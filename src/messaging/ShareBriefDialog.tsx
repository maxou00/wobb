import { Avatar, Box, Dialog, DialogContent, DialogProps, DialogTitle, Grid, IconButton, TextField, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { MdClose } from "react-icons/md";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { CssVariables } from "../css-variables";
import { useProvidedApplicants } from "../state/ProvidedApplicantsContext";
import { CampaignBrief, Deliverable, JobStatus } from "../models";
import { padZero } from "../core/utils";
import { useProvidedCampaign } from "../campaigns/ViewCampaign";
import { DeliverableWithCount } from "../core";
import { __tr, __trParams } from "../i18n";
import { Validators } from "../core/validators";
import { nanoid } from "nanoid";
import { Task } from "../models";
import { TaskStatus } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { toast } from "react-toastify";
import { Jobs } from "../models";

interface Props extends DialogProps {}


function CampaignBriefInput(props: { brief: CampaignBrief, onChange(next: CampaignBrief): any }) {
    const [dueDate, setDueDate] = useState(props.brief.dueDate || "");
    const [text, setText] = useState(props.brief.brief || "");
    const [errors, setErrors] = useState<any>({});

    let { onChange } = props;

    const onDateChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let value = ev.currentTarget.value;
        if (value) {
            setDueDate(value);
            let date = new Date(Date.parse(value)).getTime();
            let now = Date.now();
            if (date && now) {
                let nextErrs = { ...errors };
                if (date < now) {
                    let nextErrs = { ...errors };
                    nextErrs.dueDate = __tr("errorInvalidDate")
                }
                else {
                    let nextBrief = CampaignBrief.copyOf(props.brief, t => {
                        t.brief = text;
                        if (value) {
                            t.dueDate = Intl.DateTimeFormat("fr-CA").format(Date.parse(value));
                        }
                    })
                    delete nextErrs.dueDate;
                    onChange(nextBrief);
                }
                setErrors(nextErrs);
            }
        }
    }, [errors, props.brief, onChange, text]);

    const onCommentChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
        let nextErrs: any = { ...errors };
        let value = ev.currentTarget.value;
        setText(value);
        if (value && !Validators.isComment(value)) {
            nextErrs.text = __tr("errorInvalidMsg");
        }
        else {
            let nextBrief = CampaignBrief.copyOf(props.brief, t => {
                t.brief = value;
                if (dueDate) {
                    t.dueDate = Intl.DateTimeFormat("fr-CA").format(Date.parse(dueDate));
                }
            })
            delete nextErrs.text;
            onChange(nextBrief);
        }
        setErrors(nextErrs);
    }, [dueDate, errors, onChange, props.brief]);

    return <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={4}>
            <Typography variant="body1">{__tr("dueDate")}</Typography>
        </Grid>
        <Grid item xs={8}>
            <TextField
                variant="outlined"
                type="date"
                fullWidth
                size="small"
                value={dueDate}
                onChange={onDateChange}
                error={errors.dueDate}
                helperText={errors.dueDate}
            />
        </Grid>
        <Grid item xs={12}>
            <Box>
                <TextField
                    fullWidth
                    multiline
                    variant="outlined"
                    minRows={4}
                    maxRows={8}
                    placeholder="Type your message here"
                    value={text}
                    onChange={onCommentChange}
                    error={errors.text}
                    helperText={errors.text} />
            </Box>
        </Grid>
    </Grid>

}

export function ShareBriefDialog(props: Props) {
    const [busy, setBusy] = useState(false);
    const { campaign } = useProvidedCampaign();
    const { selected } = useProvidedApplicants();
    const [baseBriefs, setBaseBriefs] = useState<CampaignBrief[]>([]);

    const hiredSelectedApplicants = useMemo(() => {
        return selected.filter((a) => a.status && ([JobStatus.HIRED, JobStatus.ONGOING] as any[]).includes(a.status))
    }, [selected]);

    const notBriefedApplicants = useMemo(() => {
        return hiredSelectedApplicants.filter((applicant) => (!applicant.Tasks) || applicant.Tasks.length < baseBriefs.length);
    },[baseBriefs.length, hiredSelectedApplicants]);

    const first3 = useMemo(() => {
        if (hiredSelectedApplicants.length > 3) {
            return hiredSelectedApplicants.slice(0, 2);
        }
        return hiredSelectedApplicants;
    }, [hiredSelectedApplicants]);

    const onClose = useCallback(() => {
        if (props.onClose) {
            props.onClose({}, "backdropClick");
        }
    }, [props]);

    useEffect(() => {
        let briefArray: CampaignBrief[] = [];
        DataStore.query(
            CampaignBrief,
            c => c.campaignId("eq", campaign.id)
        ).then((res) => {
            briefArray.push(...res);
        })
            .then(async () => {
                if (briefArray.length === 0) {
                    campaign.Deliverables?.map((raw) => JSON.parse(raw) as DeliverableWithCount).forEach((deliver) => {
                        for (let i = 0; i < deliver.count; i++) {
                            let entry = new CampaignBrief({
                                deliverableType: deliver.deliverable,
                                brief: "",
                                campaignId: campaign.id
                            })
                            briefArray.push(entry);
                        }
                    })

                    await Promise.all(
                        briefArray.map(async (b) => {
                            return DataStore.save(b)
                        })
                    )
                }
            })
            .finally(() => {
                setBaseBriefs(briefArray);
            })
    }, [campaign.Deliverables, campaign.id]);

    const onBriefChange = useCallback((task: CampaignBrief) => {
        let index = baseBriefs.findIndex((b) => b.id === task.id);
        let next = [...baseBriefs];
        if (index > -1) {
            next[index] = task;
        }
        else {
            next.push(task);
        }
        setBaseBriefs(next);
    }, [baseBriefs]);

    const onSendTaskToEveryone = useCallback(async () => {
        let validBriefs = baseBriefs.filter((b) => b.brief && b.brief.length > 0);
        let jobArray = [...hiredSelectedApplicants];

        await Promise.all(baseBriefs.map((b) => {
            return DataStore.save(b);
        }))

        async function* operationGenerator() {
            for (let taskIndex in validBriefs) {
                let brief = validBriefs[taskIndex];

                for (let jobIndex in jobArray) {
                    let job = jobArray[jobIndex];

                    let existentIndex = job.Tasks?.findIndex((t) => t?.sharedID === brief.id);

                    if (job.Tasks && existentIndex && existentIndex > -1) {
                        //// a task already exists with the sharedID value it means that this task is simply been updated.
                        let existent = job.Tasks[existentIndex];

                        let next = Task.copyOf(existent as Task, t => {
                            t.Brief = brief.brief;
                            t.lastUpdate = new Date(Date.now()).toISOString();
                            t.dueDate = brief.dueDate;
                        })

                        job = Jobs.copyOf(job, j => {
                            if (!j.Tasks) {
                                j.Tasks = [];
                            }
                            j.Tasks[existentIndex || 0] = next
                        })
                    }
                    else {
                        job = Jobs.copyOf(job, j => {
                            if (!j.Tasks) {
                                j.Tasks = [];
                            }
                            j.Tasks.push(new Task({
                                deliverableType: brief.deliverableType as any,
                                Brief: brief.brief,
                                Status: TaskStatus.TOBECOMPLETED,
                                sharedID: brief.id,
                                dueDate: brief.dueDate
                            }))
                        })
                    }
                    yield DataStore.save(job, match => match.id("eq", job.id))
                }
            }
        }

        setBusy(true);
        for await (const updatedJob of operationGenerator()) {
            toast.success(__trParams(
                "sharedTaskWith",
                {
                    name: updatedJob.Infleuncer?.name
                }
            ))
        }
        setBusy(false);
        if(props.onClose) {
            props.onClose({}, "backdropClick");
        }
    }, [baseBriefs, hiredSelectedApplicants, props]);

    const onSendTaskToTheRest = useCallback(async () => {
        let validBriefs = baseBriefs.filter((b) => b.brief && b.brief.length > 0);
        let jobArray = [...notBriefedApplicants];

        await Promise.all(baseBriefs.map((b) => {
            return DataStore.save(b);
        }))

        async function* operationGenerator() {
            for (let taskIndex in validBriefs) {
                let brief = validBriefs[taskIndex];

                for (let jobIndex in jobArray) {
                    let job = jobArray[jobIndex];

                    let existentIndex = job.Tasks?.findIndex((t) => t?.sharedID === brief.id);

                    if (job.Tasks && existentIndex && existentIndex > -1) {
                        //// a task already exists with the sharedID value it means that this task is simply been updated.
                        let existent = job.Tasks[existentIndex];

                        let next = Task.copyOf(existent as Task, t => {
                            t.Brief = brief.brief;
                            t.lastUpdate = new Date(Date.now()).toISOString();
                            t.dueDate = brief.dueDate;
                        })

                        job = Jobs.copyOf(job, j => {
                            if (!j.Tasks) {
                                j.Tasks = [];
                            }
                            j.Tasks[existentIndex || 0] = next
                        })
                    }
                    else {
                        job = Jobs.copyOf(job, j => {
                            if (!j.Tasks) {
                                j.Tasks = [];
                            }
                            j.Tasks.push(new Task({
                                deliverableType: brief.deliverableType as any,
                                Brief: brief.brief,
                                Status: TaskStatus.TOBECOMPLETED,
                                sharedID: brief.id,
                                dueDate: brief.dueDate
                            }))
                        })
                    }
                    yield DataStore.save(job, match => match.id("eq", job.id))
                }
            }
        }

        setBusy(true);
        for await (const updatedJob of operationGenerator()) {
            toast.success(__trParams(
                "sharedTaskWith",
                {
                    name: updatedJob.Infleuncer?.name
                }
            ))
        }
        setBusy(false);
        if(props.onClose) {
            props.onClose({}, "backdropClick");
        }
    }, [baseBriefs, notBriefedApplicants, props]);

    return <Dialog {...props}>
        <DialogTitle>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Box>
                    <Typography variant="h6">{__tr("shareBrief")}</Typography>
                </Box>
                <Box>
                    <IconButton onClick={onClose}>
                        <MdClose size={24} />
                    </IconButton>
                </Box>
            </Box>
        </DialogTitle>
        <DialogContent dividers>
            <Box paddingX={1} paddingY={2} display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Typography variant="body1">Selected</Typography>
                <Box paddingX={.5}>
                    <AvatarGroup>
                        {
                            first3.map((applicant) => {
                                return <Avatar key={applicant.id} />
                            })
                        }
                    </AvatarGroup>
                </Box>
                {
                    first3.length < hiredSelectedApplicants.length && <Typography variant="body1">+{padZero(hiredSelectedApplicants.length - first3.length)} others</Typography>
                }
            </Box>
            {
                baseBriefs.map((entry, index) => {
                    return <Box key={`${entry.id}${index}`} paddingX={1} paddingY={2}>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12}>
                                <Typography variant="body1" style={{ fontWeight: 500 }}>{index + 1}. {__tr((entry.deliverableType || "").toLowerCase())}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Box>
                                    {
                                        <CampaignBriefInput brief={entry} onChange={onBriefChange} />
                                    }
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                })
            }
            { notBriefedApplicants.length > 0 && <Box paddingX={1} paddingY={2}>
                <Typography variant="body2" style={{ color: CssVariables.colorGrayV2 }}>
                    * Brief has already been shared with some of the users. Would you like to update everyone’s brief or share with only remaining users?
                </Typography>
            </Box> }
            <Box paddingX={1} paddingY={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Box padding={.5}>
                    <TextTransformNoneButton
                        variant='outlined'
                        color="default"
                        size="large"
                        onClick={onSendTaskToEveryone}
                        disabled={busy}>Share brief for all({selected.length}) </TextTransformNoneButton>
                </Box>
                {notBriefedApplicants.length > 0 && <Box padding={.5}>
                    <TextTransformNoneButton 
                        variant='contained' 
                        color="primary" 
                        size="large"
                        onClick={onSendTaskToTheRest}
                        disabled={busy}>Share brief to remaining({notBriefedApplicants.length})</TextTransformNoneButton>
                </Box>}
            </Box>
        </DialogContent>
    </Dialog>
}
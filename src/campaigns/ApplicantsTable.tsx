import { DataStore } from "@aws-amplify/datastore";
import { css } from "@emotion/css";
import { Box, Button, Checkbox, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, withStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { createContext, CSSProperties, PropsWithChildren, useCallback, useContext, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { toast } from "react-toastify";
import { IconifiedDeliverableState } from "../components/IconifiedDeliverableState";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { CssVariables } from "../css-variables";
import { __tr } from "../i18n";
import { JobStatus } from "../models";
import { Jobs } from "../models";
import { useApplicantSelection, useApplicantSelectionFuncs } from "../state/ProvidedApplicantsContext";
import { useAppUser } from "../state/selectors";
import { ApplicantItem } from "./ApplicantItem";
import { ApplicantFilter } from "./ApplicantsFilterTab";
import { useProvidedCampaign } from "./ViewCampaign";

const GreenButton = withStyles({
    root: {
        background: CssVariables.colorSuccess,
        color: 'white',
        textTransform: 'none'
    }
})(Button)

const DeleteButton = withStyles({
    root: {
        background: CssVariables.colorError,
        color: 'white',
        borderRadius: '4px',
        height: '31px',
        width: '31px',
        textTransform: 'none'
    }
})(IconButton)

interface Props {
    filter: string;
    applicants: Jobs[];
}

const actionsStyles = {
    row: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `
}

const tableStyles: { [key: string]: CSSProperties } = {
    th: {
        background: 'white',
        fontSize: CssVariables.fontSizeTextPrimary,
        textTransform: 'uppercase'
    },
}

const customStyles = {
    cellDeliverables: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
    deliverableWrapper: css`
        width: auto;
        margin-bottom: 4px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    `,
    title: css`
        color: ${CssVariables.colorGrayV3};
        width: 120px;
        text-overflow: ellipsis;
    `,
    deliverable: css`
        width: 100px;
        height: 50px;
        padding: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    sizedCell: css`
        min-height: 100px;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: space-around;
    `,
    date: css``,
}

interface JobContextScheme {
    job: Jobs;
}

const SingleJobContext = createContext<JobContextScheme>({} as any);

export function useProvidedJob() {
    return useContext(SingleJobContext);
}

export function ProvideSingleJob(props: PropsWithChildren<{ job: Jobs }>) {
    return <SingleJobContext.Provider value={{ job: props.job }}>
        {props.children}
    </SingleJobContext.Provider>
}


function ApplicantTableHeader(props: { filter: string }) {

    if (props.filter === "hired") {
        return <TableRow>
            <TableCell style={tableStyles.th}></TableCell>
            <TableCell style={tableStyles.th}>
                <span style={{ whiteSpace: 'nowrap' }}>{__tr("applicants")}</span>
            </TableCell>
            <TableCell style={tableStyles.th}>
                <TableSortLabel IconComponent={MdArrowDropDown}>
                    <span style={{ whiteSpace: 'nowrap' }}>{__tr("deliverables")}</span>
                </TableSortLabel>
            </TableCell>
            <TableCell style={tableStyles.th}>
                <TableSortLabel IconComponent={MdArrowDropDown}>
                    <span style={{ whiteSpace: 'nowrap' }}>{__tr("postDate")}</span>
                </TableSortLabel>
            </TableCell>
        </TableRow>
    }

    return <TableRow>
        <TableCell style={tableStyles.th}></TableCell>
        <TableCell style={tableStyles.th}>
            <span style={{ whiteSpace: 'nowrap' }}>{__tr("applicants")}</span>
        </TableCell>
        <TableCell style={tableStyles.th}>
            <TableSortLabel IconComponent={MdArrowDropDown}>
                <span style={{ whiteSpace: 'nowrap' }}>{__tr("followers")}</span>
            </TableSortLabel>
        </TableCell>
        <TableCell style={tableStyles.th}>
            <TableSortLabel IconComponent={MdArrowDropDown}>
                <span style={{ whiteSpace: 'nowrap' }}>{__tr("engagement")}</span>
            </TableSortLabel>
        </TableCell>
        <TableCell style={tableStyles.th}>
            <TableSortLabel
                IconComponent={MdArrowDropDown}>
                <span style={{ whiteSpace: 'nowrap' }}>{__tr("bidPrice")}</span>
            </TableSortLabel>
        </TableCell>
        <TableCell style={tableStyles.th}></TableCell>
    </TableRow>
}

function ApplicantRow(props: { filter: string, applicant: Jobs }) {
    const selected = useApplicantSelection(props.applicant.id);
    const funcs = useApplicantSelectionFuncs();

    const onCheckChange = useCallback((ev, check: boolean) => {
        if (check) {
            funcs.select(props.applicant)
        }
        else {
            funcs.unselect(props.applicant)
        }
    }, [funcs, props.applicant]);

    return <ProvideSingleJob job={props.applicant}>
        {
            props.filter === ApplicantFilter.hired && <TableRow>
                <TableCell>
                    <Checkbox checked={Boolean(selected)} onChange={onCheckChange} />
                </TableCell>
                <TableCell>
                    <ApplicantItem />
                </TableCell>
                <TableCell>
                    <ApplicantDeliverables />
                </TableCell>
                <TableCell>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Box height={50} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <span>Today</span>
                        </Box>
                        <Box height={50} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <span>Yesterday</span>
                        </Box>
                    </Box>
                </TableCell>
            </TableRow>
        }
        {
            props.filter !== ApplicantFilter.hired && <TableRow>
                <TableCell>
                    <Checkbox checked={Boolean(selected)} onChange={onCheckChange} />
                </TableCell>
                <TableCell>
                    <ApplicantItem />
                </TableCell>
                <TableCell>218K</TableCell>
                <TableCell>4.5%</TableCell>
                <TableCell>{props.applicant.bidCurrency} {props.applicant.bidPrice}</TableCell>
                <TableCell>
                    <ApplicableActions filter={props.filter} />
                </TableCell>
            </TableRow>
        }
    </ProvideSingleJob>
}

function ApplicantDeliverables() {
    return <div className={customStyles.cellDeliverables}>
        <div className={customStyles.deliverableWrapper}>
            <span className={customStyles.title}>1.Reel</span>
            <div className={customStyles.deliverable}>
                <IconifiedDeliverableState />
            </div>
        </div>
        <div className={customStyles.deliverableWrapper}>
            <span className={customStyles.title}>2. Static Story</span>
            <div className={customStyles.deliverable}>
                <IconifiedDeliverableState reviewed={false} submitted={true} />
            </div>
        </div>
    </div>
}

export function ApplicableActions(props: { filter: string }) {
    const [busy, setBusy] = useState(false);

    const { user, profile } = useAppUser();
    const { job } = useProvidedJob();
    const { campaign } = useProvidedCampaign();

    const onShortlist = useCallback(async () => {

        setBusy(true);
        DataStore.save(
            Jobs.copyOf(job, j => {
                j.status = JobStatus.SHORT_LISTED;
                j.shortlistedAt = new Date(Date.now()).toISOString()
            })
        )
            .then((job) => {
                setBusy(false);
                toast.success(__tr("done"))
            })

    }, [job]);

    const onReject = useCallback(async () => {

        setBusy(true);
        DataStore.save(
            Jobs.copyOf(job, j => {
                j.status = JobStatus.REJECTED;
                j.rejectedAt = new Date(Date.now()).toISOString()
            })
        )
            .then((job) => {
                setBusy(false);
                toast.success(__tr("done"))
            })

    }, [job]);

    return <div className={actionsStyles.row}>
        {
            ["received", "applied", "rejected"].includes(props.filter) && <Box marginX={.5}>
                <GreenButton disabled={busy} onClick={onShortlist} variant="contained" size="small" disableElevation>{__tr("shortlist")}</GreenButton>
            </Box>
        }
        {
            (props.filter === "invited") &&
            <Box marginX={.5}>
                <TextTransformNoneButton variant="outlined" color="primary" size="small" disableElevation>{__tr("invite")}</TextTransformNoneButton>
            </Box>
        }
        {
            ["received", "applied", "shortlisted", "invited"].includes(props.filter) &&
            <Box marginX={.5}>
                <DeleteButton size="small" onClick={onReject}>
                    <Delete fontSize="small" />
                </DeleteButton>
            </Box>
        }
    </div>
}

export function ApplicantsTable(props: Props) {

    return <Table stickyHeader>
        <TableHead>
            <ApplicantTableHeader filter={props.filter} />
        </TableHead>
        <TableBody>
            {
                props.applicants.map((applicant) => {
                    return <ApplicantRow key={applicant.id} applicant={applicant} filter={props.filter} />
                })
            }
        </TableBody>
    </Table>
}
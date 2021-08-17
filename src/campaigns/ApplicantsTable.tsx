import { css } from "@emotion/css";
import { Box, Button, Checkbox, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, withStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { CSSProperties } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IconifiedDeliverableState } from "../components/IconifiedDeliverableState";
import { TextTransformNoneButton } from "../components/TextTransformNoneButton";
import { CssVariables } from "../css-variables";
import { __tr } from "../i18n";
import { ApplicantItem } from "./ApplicantItem";

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

function ApplicantRow(props: { filter: string }) {

    if (props.filter === "hired") {
        return <TableRow>
            <TableCell>
                <Checkbox />
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
    
    return <TableRow>
        <TableCell>
            <Checkbox />
        </TableCell>
        <TableCell>
            <ApplicantItem />
        </TableCell>
        <TableCell>218K</TableCell>
        <TableCell>4.5%</TableCell>
        <TableCell>₹1000</TableCell>
        <TableCell>
            <ApplicableActions filter={props.filter} />
        </TableCell>
    </TableRow>
}

function ApplicantDeliverables() {
    return <div className={customStyles.cellDeliverables}>
        <div className={customStyles.deliverableWrapper}>
            <span className={customStyles.title}>1.Reel</span>
            <div className={customStyles.deliverable}>
                <IconifiedDeliverableState/>
            </div>
        </div>
        <div className={customStyles.deliverableWrapper}>
            <span className={customStyles.title}>2. Static Story</span>
            <div className={customStyles.deliverable}>
                <IconifiedDeliverableState reviewed={false} submitted={true}/>
            </div>
        </div>
    </div>
}

export function ApplicableActions(props: { filter: string }) {
    return <div className={actionsStyles.row}>
        {
            (props.filter === "received" || props.filter === "rejected") &&
            <Box marginX={.5}>
                <GreenButton variant="contained" size="small" disableElevation>{__tr("shortlist")}</GreenButton>
            </Box>
        }
        {
            (props.filter === "invite") &&
            <Box marginX={.5}>
                <TextTransformNoneButton variant="outlined" color="primary" size="small" disableElevation>{__tr("invite")}</TextTransformNoneButton>
            </Box>
        }
        {
            (props.filter === "received" || props.filter === "shortlisted" || props.filter === "invite") &&
            <Box marginX={.5}>
                <DeleteButton size="small">
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
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
            <ApplicantRow filter={props.filter} />
        </TableBody>
    </Table>
}
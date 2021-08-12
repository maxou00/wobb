import { Box, Typography } from "@material-ui/core";
import { PropsWithChildren, ReactNode } from "react"
import { IconGender, IconLocation } from "../components/Icons";
import { __tr } from "../i18n";
import styles from "../styles/AboutUser.module.scss";

function SquareChip(props: { label: string }) {
    return <span className={styles.squareChip}>{props.label}</span>
}

interface TitledProps {
    icon: ReactNode;
    title: string;
    content: string;
}

function TitledSection(props: PropsWithChildren<{ title: string }>) {
    return <Box width="100%" className={styles.titledSection}>
        <Box className={styles.header}>
            <Typography variant="body1" className={styles.title}>{props.title}</Typography>
        </Box>
        <Box className={styles.content}>
            {
                props.children
            }
        </Box>
    </Box>
}

function TitledContent(props: TitledProps) {
    return <Box className={styles.titledContent}>
        <div className={styles.iconWrapper}>
            <span className={styles.icon}>
                {props.icon}
            </span>
        </div>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.content}>{props.content}</span>
    </Box>
}

export function AboutUser() {
    return <Box>
    <Box className={styles.titledRow}>
        <TitledContent
            icon={<IconLocation size={24} />}
            title={__tr("location")}
            content="Jammu & kashmir" />
        <TitledContent
            icon={<IconGender size={24} />}
            title={__tr("gender")}
            content="Female" />
    </Box>
    <TitledSection title={__tr("languages")}>
        <SquareChip label="English" />
        <SquareChip label="French" />
        <SquareChip label="Russian" />
    </TitledSection>
    <TitledSection title={__tr("interests")}>
        <SquareChip label="Design" />
        <SquareChip label="Startup" />
        <SquareChip label="Fashion" />
    </TitledSection>
</Box>
}
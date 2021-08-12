import { css } from "@emotion/css";
import { Box, Typography } from "@material-ui/core";
import { CssVariables } from "../css-variables";
import { __tr } from "../i18n";

const socialStyles = {
    list: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 8px 4px;
    `,
    profile: css`
        max-width: 96px;
        margin: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
    avatar: css`
        width: 56px;
        height: 56px;
        border-radius: 28px;
        background: lightgray;
    `
}

function SocialAvatar() {
    return <div className={socialStyles.profile}>
        <div className={socialStyles.avatar}></div>
    </div>
}

export function LinkedAccounts() {
    return <Box>
        <Typography variant="body2" style={{ fontWeight: 300, color: CssVariables.colorGrayV2 }}>{__tr("linkedSocialMediaAccounts")}</Typography>
        <Box className={socialStyles.list}>
            <SocialAvatar />
            <SocialAvatar />
            <SocialAvatar />
            <SocialAvatar />
        </Box>
    </Box>
}
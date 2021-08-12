import { Box, Drawer, IconButton } from "@material-ui/core";
import { useCallback } from "react";
import { useState } from "react";
import { ProfileDrawer } from "../profile";
import { InfluencerRow } from "./InfluencerRow";
import { css } from "@emotion/css";
import { MdClose } from "react-icons/md";


const drawerStyles = css`
    width: 420px;
    overflow-x: hidden;
    scrollbar-width: thin;
`;


export function InfluencerList() {
    const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);

    const onExitProfileDrawer = useCallback(() => {
        setProfileDrawerOpen(false);
    }, []);

    return <div>
        <InfluencerRow onShowProfile={() => setProfileDrawerOpen(true)} />
        <InfluencerRow onShowProfile={() => setProfileDrawerOpen(true)} />
        <InfluencerRow onShowProfile={() => setProfileDrawerOpen(true)} />
        <InfluencerRow />
        <InfluencerRow />
        <InfluencerRow />
        <InfluencerRow />
        <InfluencerRow />
        <InfluencerRow />
        <InfluencerRow />
        <InfluencerRow />
        <InfluencerRow />
        <InfluencerRow />

        <Drawer anchor="right" open={profileDrawerOpen} onClose={onExitProfileDrawer}>
            <Box className={drawerStyles}>
                <IconButton>
                    <MdClose size={18} />
                </IconButton>
                <ProfileDrawer />
            </Box>
        </Drawer>
    </div>
}
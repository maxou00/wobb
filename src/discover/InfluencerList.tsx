import { Box, Drawer, IconButton } from "@material-ui/core";
import { useCallback } from "react";
import { useState } from "react";
import { ProfileDrawer } from "../profile/ProfileDrawer";
import { InfluencerRow } from "./InfluencerRow";
import { css } from "@emotion/css";
import { MdClose } from "react-icons/md";
import influencers from "../core/api/influencers.json";

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
        {
            influencers.map((inf) => {
                return <InfluencerRow influencer={inf} key={inf.id} onShowProfile={() => setProfileDrawerOpen(true)} />
            })
        }
        <Drawer anchor="right" open={profileDrawerOpen} onClose={onExitProfileDrawer}>
            <Box className={drawerStyles}>
                <Box margin={1}>
                    <IconButton onClick={onExitProfileDrawer}>
                        <MdClose size={18} />
                    </IconButton>
                </Box>
                <ProfileDrawer />
            </Box>
        </Drawer>
    </div>
}
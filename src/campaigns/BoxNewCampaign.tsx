import { Button } from "@material-ui/core";
import { IconEdit } from "../components/Icons";
import { __tr } from "../i18n";
import styles from "../styles/NewCampaign.module.scss";

export function BoxNewCampaign() {
    return <div className={styles.region}>
        <div className={styles.header}>
            <div>
                <IconEdit size={18} />
            </div>
            <h4 className={styles.title}>{__tr("newCampaign")}</h4>
        </div>
        <div className={styles.content}>
            <p dangerouslySetInnerHTML={{__html: __tr("newCampaignText")}}></p>
            <Button fullWidth variant="outlined" color="primary">
                {
                    __tr("postCampaign")
                }
            </Button>
        </div>
    </div>
}
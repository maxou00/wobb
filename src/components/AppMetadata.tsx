import { Link } from "react-router-dom";
import { __tr } from "../i18n";
import { Routes } from "../routes";
import styles from "../styles/Appmetadata.module.scss";

export function AppMetadata(){
    return <div className={styles.section}>
        <Link to={Routes.About} className={styles.link}>{__tr("about")}</Link>
        <Link to={Routes.PrivacyPolicies} className={styles.link}>{__tr("privacyPolicies")}</Link>
        <span className={styles.link}>{__tr("copyright")}</span>
        <Link to={Routes.HelpAndSupport} className={styles.link}>{__tr("helpAndSupport")}</Link>
        <div className={styles.company}>
            <span className={styles.name}>wobb</span>
            Ravgins International Private Limited © 2021
        </div>
    </div>
}
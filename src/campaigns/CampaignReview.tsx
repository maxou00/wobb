import { Box, Typography } from "@material-ui/core";
import { Stars } from "../components/Stars";
import styles from "../styles/CampaignReview.module.scss";

export function CampaignReview() {
    return <Box className={styles.review}>
        <div className={styles.image}></div>
        <div className={styles.content}>
            <header className={styles.header}>
                <Typography variant="body1" className={styles.title}>Ready to stich with Biba <Stars count={4.5} /> </Typography>
            </header>
            <div className={styles.pictures}>
                <div className={styles.picture}></div>
                <div className={styles.picture}></div>
            </div>
            <div className={styles.text}>
                <p>
                    Amazing Job done. So glad to work with this beauty. <span className={styles.username}>@Lara Dennis</span>
                </p>
            </div>
            <span className={styles.meta}>Biba | 23 June, 2021</span>
        </div>
    </Box>
}
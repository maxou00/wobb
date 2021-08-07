import { List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { useCallback } from "react";
import { CampaignFilters } from "../core";
import { __tr } from "../i18n";
import styles from "../styles/CampaignStatusList.module.scss";
import cn from "classnames";

interface Props {
    filter: string;
    onChange?(filter: string): any
}

export function CampaignStatusList(props: Props) {

    const onChangeFilter = useCallback((filter: string) => {
        if (props.onChange && filter !== props.filter) {
            props.onChange(filter);
        }
    }, [props]);

    return <div className={styles.region}>
        <div className={styles.header}>
            <h4 className={styles.title}>{__tr("campaignStatus")}</h4>
        </div>
        <List style={{ width: '100%' }}>
            {
                CampaignFilters.map((filter, i) => {
                    let active = props.filter === filter;
                    return <ListItem
                        button
                        key={filter}
                        onClick={() => onChangeFilter(filter)}
                        divider={i < CampaignFilters.length - 1}
                        className={cn({ [styles.filterItem]: true, [styles.active]: active })}>
                        <ListItemText
                            primary={__tr(filter)}
                            primaryTypographyProps={{ className: cn({ [styles.itemText]: true, [styles.active]: active }) }} />
                        <ListItemSecondaryAction className={cn({ [styles.count]: true, [styles.active]: active })}>3</ListItemSecondaryAction>
                    </ListItem>
                })
            }
        </List>
    </div>
}
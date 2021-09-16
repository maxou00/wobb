import { Box, Checkbox, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { useCallback } from "react";
import { __tr } from "../../i18n";

const CategoryList = [
    "Comedy",
    "Student & Education",
    "Communities",
    "Family & Parenting",
    "Music & Dance",
    "Television & Film",
    "Finance",
    "Gadgets & Electronics",
    "Sports",
    "Fashion Clothing & Access",
    "Camera & Photography",
    "E-commerce & Affiliates",
    "Toys, Children & Baby",
    "Restaurants & Eatery Review",
    "Health, Wellness & Medicine",
    "Beauty & Cosmetics",
    "Business & Careers",
    "Travel, Tourism & Aviation",
    "Art, Poetry & Design",
    "Gaming",
    "NRI",
    "Plus Size",
    "Podcast",
    "News",
    "Pranks",
    "Science & Technology",
    "Comics & Anime",
    "Tech, SaaS & Software Review",
    "Motivation",
    "Food, Cooking and Baking",
    "Automobiles",
    "Daily Bloggers & Vloggers",
    "Real Estate, Home Decoration",
    "Pets & Animals",
    "Wedding & related",
    "Fitness & Yoga"
]

interface Props {
    items: string[];
    onChange(values: string[]): any;
}

export function CategoryPicker(props: Props) {

    const onChecked = useCallback((category: string, check: boolean) => {
        let next = [...props.items];
        if(check) {
            if(!next.includes(category)) {
                next.push(category);
            }
        }
        else {
            next = next.filter((c) => c !== category)
        }
        props.onChange(next);
    }, [props]);

    return <Box minWidth="320px">
        <List dense disablePadding>
            {
                CategoryList.map((c) => {
                    let checked = props.items.includes(c);
                    return <ListItem dense button key={c}>
                        <ListItemAvatar>
                            <Checkbox color="primary" size="small" checked={checked} onChange={() => onChecked(c, !checked)} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={c} />
                    </ListItem>
                })
            }
        </List>
    </Box>
}
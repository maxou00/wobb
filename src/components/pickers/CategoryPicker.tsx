import { Box, Checkbox, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { __tr } from "../../i18n";

interface Props {

}

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

export function CategoryPicker(props: Props) {
    return <Box minWidth="320px">
        <List dense disablePadding>
            {
                CategoryList.map((c) => {
                    return <ListItem dense button key={c}>
                        <ListItemAvatar>
                            <Checkbox color="primary" size="small" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={c} />
                    </ListItem>
                })
            }
        </List>
    </Box>
}
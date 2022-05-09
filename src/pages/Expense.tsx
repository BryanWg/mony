import {
    IconButton,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
    createTheme,
    ThemeProvider,
    Typography,
} from "@mui/material";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import CheckroomRoundedIcon from "@mui/icons-material/CheckroomRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import style from "./Expense.module.css";
import { ClothesIcon, EventIcon, FoodIcon, LuxuryIcon, OthersIcon } from "../components/Icons";

const data = [
    { debitType: "food", description: "ippudo", amount: "13" },
    { debitType: "event", description: "dr strange", amount: "55" },
    { debitType: "luxury", description: "skin care", amount: "53" },
    { debitType: "clothes", description: "uniqlo", amount: "100" },
    { debitType: "others", description: "sleeping pills", amount: "21" },
    { debitType: "food", description: "ippudo", amount: "13" },
    { debitType: "event", description: "dr strange", amount: "55" },
    { debitType: "luxury", description: "skin care", amount: "53" },
    { debitType: "clothes", description: "uniqlo", amount: "100" },
    { debitType: "others", description: "sleeping pills", amount: "21" },
    { debitType: "food", description: "ippudo", amount: "13" },
    { debitType: "event", description: "dr strange", amount: "55" },
    { debitType: "luxury", description: "skin care", amount: "53" },
    { debitType: "clothes", description: "uniqlo", amount: "100" },
    { debitType: "others", description: "sleeping pills", amount: "21" },
    { debitType: "food", description: "ippudo", amount: "13" },
    { debitType: "event", description: "dr strange", amount: "55" },
    { debitType: "luxury", description: "skin care", amount: "53" },
    { debitType: "clothes", description: "uniqlo", amount: "100" },
    { debitType: "others", description: "sleeping pills", amount: "21" },
];

const avatar: { [key: string]: any } = {
    food: <FoodIcon sx={{ borderRadius: "12px" }} />,
    event: <EventIcon sx={{ borderRadius: "12px" }} />,
    luxury: <LuxuryIcon sx={{ borderRadius: "12px" }} />,
    clothes: <ClothesIcon sx={{ borderRadius: "12px" }} />,
    others: <OthersIcon sx={{ borderRadius: "12px" }} />,
};

export default () => {
    const moneySpent = 100;

    return (
        <div className={style.container}>
            <div className={style.expenseView}>
                <Typography variant='subtitle1' component='div' sx={{ color: "#757675" }}>
                    Money spent this month
                </Typography>
                <Typography variant='h2' component='div' gutterBottom mt={0} sx={{ fontWeight: "400" }}>
                    ${moneySpent}
                </Typography>
            </div>
            <div className={style.transactionView}>
                {data.map((d) => (
                    <>
                        <Divider variant='middle' />
                        <ListItem>
                            <ListItemAvatar>{avatar[d.debitType]}</ListItemAvatar>
                            <ListItemText
                                primary={d.debitType[0].toUpperCase() + d.debitType.slice(1)}
                                secondary={d.description}
                            />
                            ${d.amount}
                        </ListItem>
                    </>
                ))}
            </div>
        </div>
    );
};

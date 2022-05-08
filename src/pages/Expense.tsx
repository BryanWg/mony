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

interface Avatar {
    [key: string]: any;
}
const avatar : Avatar = {
    food: { icon: <RestaurantMenuRoundedIcon />, styles: { color: "rgb(34 197 94)", bgcolor: "rgb(220 252 231)" } },
    event: { icon: <EventRoundedIcon />, styles: { color: "rgb(14 165 233)", bgcolor: "rgb(224 242 254)" } },
    luxury: { icon: <DiamondRoundedIcon />, styles: { color: "rgb(139 92 246)", bgcolor: "rgb(237 233 254)" } },
    clothes: { icon: <CheckroomRoundedIcon />, styles: { color: "rgb(99 102 241)", bgcolor: "rgb(224 231 255)" } },
    others: { icon: <QuestionMarkRoundedIcon />, styles: { color: "rgb(245 158 11)", bgcolor: "rgb(254 243 199)" } },
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
                            <ListItemAvatar>
                                <Avatar
                                    variant='rounded'
                                    sx={{
                                        borderRadius: "12px",
                                        ...avatar[d.debitType].styles,
                                    }}
                                >
                                    {avatar[d.debitType].icon}
                                </Avatar>
                            </ListItemAvatar>
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

import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import CheckroomRoundedIcon from "@mui/icons-material/CheckroomRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import { DebitTypes } from "../data/debit-type";
import { Avatar } from "@mui/material";

export interface Avatar {
    [key: string]: any;
}

const avatar: Avatar = {
    food: { icon: <RestaurantMenuRoundedIcon />, styles: { color: "rgb(34 197 94)", bgcolor: "rgb(220 252 231)" } },
    event: { icon: <EventRoundedIcon />, styles: { color: "rgb(14 165 233)", bgcolor: "rgb(224 242 254)" } },
    luxury: { icon: <DiamondRoundedIcon />, styles: { color: "rgb(139 92 246)", bgcolor: "rgb(237 233 254)" } },
    clothes: { icon: <CheckroomRoundedIcon />, styles: { color: "rgb(99 102 241)", bgcolor: "rgb(224 231 255)" } },
    others: { icon: <QuestionMarkRoundedIcon />, styles: { color: "rgb(245 158 11)", bgcolor: "rgb(254 243 199)" } },
};

interface IconProp {
    style: any | undefined;
    variant: "square" | "circular" | "rounded" | undefined;
}

export function FoodIcon(style: any | undefined, variant: "square" | "circular" | "rounded" | undefined) {
    console.log(style)
    console.log({ borderRadius: "12px" });
    return (
        <Avatar
            variant={variant}
            sx={{
                ...style.sx,
                ...avatar[DebitTypes.FOOD.toLowerCase()].styles,
            }}
        >
            {avatar[DebitTypes.FOOD.toLowerCase()].icon}
        </Avatar>
    );
}

export function EventIcon(style: any | undefined, variant: "square" | "circular" | "rounded" | undefined) {
    return (
        <Avatar
            variant={variant}
            sx={{
                ...style.sx,
                ...avatar[DebitTypes.EVENT.toLowerCase()].styles,
            }}
        >
            {avatar[DebitTypes.EVENT.toLowerCase()].icon}
        </Avatar>
    );
}

export function LuxuryIcon(style: any | undefined, variant: "square" | "circular" | "rounded" | undefined) {
    return (
        <Avatar
            variant={variant}
            sx={{
                ...style.sx,
                ...avatar[DebitTypes.LUXURY.toLowerCase()].styles,
            }}
        >
            {avatar[DebitTypes.LUXURY.toLowerCase()].icon}
        </Avatar>
    );
}

export function ClothesIcon(style: any | undefined, variant: "square" | "circular" | "rounded" | undefined) {
    return (
        <Avatar
            variant={variant}
            sx={{
                ...style.sx,
                ...avatar[DebitTypes.CLOTHES.toLowerCase()].styles,
            }}
        >
            {avatar[DebitTypes.CLOTHES.toLowerCase()].icon}
        </Avatar>
    );
}

export function OthersIcon(style: any | undefined, variant: "square" | "circular" | "rounded" | undefined) {
    return (
        <Avatar
            variant={variant}
            sx={{
                ...style.sx,
                ...avatar[DebitTypes.OTHERS.toLowerCase()].styles,
            }}
        >
            {avatar[DebitTypes.OTHERS.toLowerCase()].icon}
        </Avatar>
    );
}

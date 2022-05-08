import { BiHomeAlt, BiMoney } from "react-icons/bi";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";

const navigationOptions = [
    { name: "home", icon: <HomeRoundedIcon /> },
    { name: "budgets", icon: <SavingsRoundedIcon /> },
    { name: "expenses", icon: <LocalAtmRoundedIcon /> },
];

interface Routes {
    [key: string]: string;
}

const routes: Routes = {
    home: "/",
    budgets: "/budgets",
    expenses: "/expenses",
};

export const NavBar = () => {
    const [value, setValue] = useState("recents");
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, option: string) => {
        setValue(option);
        navigate(routes[option]);
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            sx={{
                bgcolor: "#f0f0f0",
                position: "fixed",
                bottom: "0",
                width: "100%",
                borderRadius: "20px 20px 0px 0px",
            }}
        >
            {navigationOptions.map((option) => (
                <BottomNavigationAction
                    label={option.name}
                    value={option.name}
                    icon={option.icon}
                    sx={{ fontSize: "1.5rem" }}
                />
            ))}
        </BottomNavigation>
    );
};

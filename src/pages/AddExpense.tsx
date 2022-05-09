import { FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { DebitTypes } from "../data/debit-type";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import CheckroomRoundedIcon from "@mui/icons-material/CheckroomRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import style from "./AddExpense.module.css";
import { ClothesIcon } from "../components/Icons";

const debitTypes = [{ label: DebitTypes.CLOTHES, icon: <ClothesIcon sx={{}} /> }];
export default () => {
    const [debitType, setDebitType] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState<number | undefined>(undefined);
    return (
        <div className={style.container}>
            <Typography variant='h4' component='div' gutterBottom mt={0} sx={{ fontWeight: "400" }}>
                Add Spending
            </Typography>
            <Stack sx={{ padding: "24px 16px" }} spacing={4}>
                <FormControl size='small'>
                    <InputLabel id='debit-type-select-label'>Category</InputLabel>
                    <Select
                        labelId='debit-type-select-label'
                        id='debit-type-select'
                        value={debitType}
                        label='Category'
                        onChange={(e) => setDebitType(e.target.value)}
                    >
                        {debitTypes.map((type) => (
                            <MenuItem value={type.label}>
                                <Stack direction='row' spacing={1} alignItems='center'>
                                    {type.icon}
                                    <Typography
                                        variant='h6'
                                        component='div'
                                        gutterBottom
                                        mt={0}
                                        sx={{ fontWeight: "400" }}
                                    >
                                        {type.label}
                                    </Typography>
                                </Stack>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    id='filled-search'
                    label='Cost'
                    type='number'
                    value={cost}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setCost(parseInt(e.target.value));
                    }}
                />
                <TextField
                    id='filled-search'
                    label='Description'
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
            </Stack>
        </div>
    );
};

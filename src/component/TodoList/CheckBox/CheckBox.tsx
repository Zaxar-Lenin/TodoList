import React, {ChangeEvent} from "react";
import {Checkbox} from "@mui/material";
import {pink} from "@mui/material/colors";

type checkBoxType = {
    checkBoxStatus: (value: boolean) => void
}

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

export const CheckBox = (props: checkBoxType) => {
    const CheckingBx = (e: ChangeEvent<HTMLInputElement>) => {
        props.checkBoxStatus(e.currentTarget.checked)
    }
    return <Checkbox
        onChange={CheckingBx}
        {...label}
        defaultChecked
        sx={{
            color: pink[800],
            '&.Mui-checked': {
                color: pink[600],
            },
        }}
    />
}// <input type="checkbox" onChange={CheckingBx}/>
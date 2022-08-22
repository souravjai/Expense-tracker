import React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./NewExpense.css";


const NewExpense = () => {
    const margin = { margin: "20px" };
    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card sx={{
            padding: "20px",
            margin: "20px auto",
            width: "50%",
        }}>
            <form className="new-expense__form" onSubmit={submitHandler}>
                <div className="new-expense__div">
                    <TextField sx={margin} id="title" label="Title" variant="standard" placeholder="Enter the title" />
                    <div className="new-expense__field">
                        <label className="new-expense__label" htmlFor="price"> Rs.</label>
                        <TextField
                            id="price" label="Price" variant="standard"
                            type="Number" placeholder="Enter the price"
                            sx={margin}
                        />
                    </div>
                    <TextField sx={margin} type="date" label="date" InputLabelProps={{ shrink: true }} variant="standard" />
                </div>
                <div className="new-expense__div">
                    <Button sx={{ margin: "10px" }} variant="outlined">Cancel</Button>
                    <Button sx={{ margin: "10px" }} variant="contained">Add Expense</Button>
                </div>
            </form>
        </Card >
    );
}

export default NewExpense;
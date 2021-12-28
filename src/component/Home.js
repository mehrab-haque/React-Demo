import React, {useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, TextField} from "@mui/material";
import {showToast} from "../App";
import './home.css'
import Dashboard from "./Dashboard";

const css={
    padding:'10px'
}

const Home=props=>{

    var [isOpen,setOpen]=useState(true)

    var [isDashboard,setDashboard]=useState(false)

    const closeDialog=()=>{
        //setOpen(false)
        setDashboard(true)
        //showToast('Dialog Is Closed')
    }



    const users=[
        {
            id:1,
            name:'User Bla Bla'
        },
        {
            id:1,
            name:'User S'
        },
        {
            id:1,
            name:'User M'
        },
        {
            id:1,
            name:'User C'
        },
        {
            id:1,
            name:'User 2'
        },
        {
            id:1,
            name:'User 3'
        },
        {
            id:1,
            name:'User 4'
        }
    ]

    return(
        <Grid container style={css} spacing={1}>
            {
                users.map(u=>{
                    return(
                        <User name={u.name}/>
                    )
                })
            }

        </Grid>

    )
}

const User=props=>{
    return(
        <Grid item xs={8}>
            <Paper style={css}>
                {props.name}
            </Paper>
        </Grid>
    )
}

export default Home

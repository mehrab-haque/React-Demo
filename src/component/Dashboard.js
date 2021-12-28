import React, {useState} from 'react'
import {Button, Grid, Paper} from "@mui/material";
import {fetchCatFacts} from "../api/catFacts";
import {setLoading, showToast} from "../App";

const Dashboard=props=>{

    const [array,setArray]=useState(null)

    const loadClick=async ()=>{
        setLoading(true)
        var arr=await fetchCatFacts()
        setArray(arr)
        setLoading(false)
        showToast('Cat Facts Fetched Successfully...')
    }

    if(array===null)
        return(
            <div style={{height:'100vh',width:'100vw',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div style={{width:'100vw'}}>
                    <center>
                        <Button
                            variant={'outlined'}
                            color={'primary'}
                            onClick={loadClick}
                        >
                            Load Cat Facts
                        </Button>
                    </center>
                </div>
            </div>
        )
    return(
        <Grid style={{padding:'10px'}} container spacing={1}>

            {
                array.map(fact=>{
                    return(
                        <Grid item xs={8} md={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <Paper style={{padding:'10px'}}>
                                        {fact.text}
                                    </Paper>
                                </Grid>
                                <Grid item xs={0} md={6}/>
                            </Grid>

                        </Grid>
                    )
                })
            }
            <Grid item xs={12}/>

            <Grid item xs={8} md={4}>
                <Button
                    variant={'outlined'}
                    color={'secondary'}
                    fullWidth
                    onClick={()=>{setArray(null)}}
                    >
                    Clear Cat Facts
                </Button>
            </Grid>

        </Grid>
    )
}

export default Dashboard
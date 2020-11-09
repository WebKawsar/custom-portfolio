import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Template from '../Template/Template';



const useStyles = makeStyles({
    root: {
        backgroundColor: "#222222",
        color: "white",
        padding: "10px 50px",
        height: "100vh"

    },
    resume: {
        fontSize: "35px",
        marginBottom: "10px"
    },
    highlighter: {
        color: "#04B4E0",
    },
    myInfo: {
        textAlign: "justify"
    },
    info: {
        paddingLeft: "30px"
    }





  });


const Resume = () => {

    const classes = useStyles();
    return (
            <>
            <Template>
                <Grid className={classes.root} container>
                    
                    <Grid item md={6}>
                        <h2 className={classes.resume}>Resume</h2>
                        <h3 style={{fontSize: "25px"}}>Education</h3>
                    </Grid>
                </Grid>
            </Template>  
            </>
    );
};

export default Resume;
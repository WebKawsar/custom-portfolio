import { Box, makeStyles } from '@material-ui/core';
import React from 'react';


import introImg from "../../images/hero-bg.jpg";



const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",
        backgroundColor: "#222222",
        color: "White",
        // backgroundImage: `url(${introImg})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",


    },
    intro: {
        
        textAlign: 'center',
        position: "absolute",
        top: "40%",
        left: "52%"
    }




  });


const Intro = () => {

    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.intro}>
                    <h1 className="animate__animated animate__bounceInDown" style={{fontSize: "60px", color: "white", margin: "0 0"}}>Kawsar Ahmed</h1>
                    <p className="animate__animated animate__bounceInUp" style={{fontSize: "25px", color: "#aaaaaa", margin: "0"}}>Front-end Web Developer</p>
                </Box>
            </Box>
        </>
    );
};

export default Intro;
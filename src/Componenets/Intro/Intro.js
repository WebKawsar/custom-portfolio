import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import Typical from 'react-typical'

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
                    <p className="animate__animated animate__bounceInUp" style={{fontSize: "25px", color: "#aaaaaa", margin: "0"}}>
                        <Typical
                            steps={['Front-end Web Developer', 1000, 'Web Developer', 500, "React Developer", 1000, "JavaScript Developer", 1000]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </p>
                </Box>
            </Box>
        </>
    );
};

export default Intro;
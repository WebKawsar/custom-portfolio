import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import Particles from 'react-particles-js';
import Intro from '../../Componenets/Intro/Intro';
import Template from '../../Componenets/Template/Template';




const useStyles = makeStyles({
    root: {

    },
//    box: {
//        position: "relative",
//        height: "100vh",
//    },
//    intro: {
//        position: "absolute",
//        top: "120px",
//        right: "50%",
//        transform: "translateX(50%)"
//    }



  });



const HomePage = () => {

    const classes = useStyles();
    return (
        <>
            <Template>
                
                <Intro></Intro>
            </Template>  
        </>
    );
};

export default HomePage;
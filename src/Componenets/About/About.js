import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Template from '../Template/Template';




const useStyles = makeStyles({
    root: {
        backgroundColor: "#222222",
        color: "white",
        padding: "10px 50px",
        height: "100vh"

    },
    about: {
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

const About = () => {
    

    const classes = useStyles();
    return (
            <>
                <Template>
                    <Grid className={classes.root} container>
                        <Grid className="animate__animated animate__bounceInUp" item md={12}>
                            <h3 className={classes.about}>About <span className={classes.highlighter}>Me</span></h3>
                            <Grid container>
                                <Grid item md={7}>
                                    <p className={classes.myInfo}>Programming is my passion. I love to work with web technologies. Always try to grab the new features of technology. Last few years made myself skilled in the field of web application development. Expert in developing Single Page Application (SPA) using React JS. I am very much comfotable with JavaScript. I worked with different types of libraries and framework. Among of them I feel comfortable with React, Node, Express, MongoDB, Material UI etc</p>
                                </Grid>
                                <Grid className={classes.info} item md={5}>
                                    <p><span className={classes.highlighter}>Age : </span>24</p>
                                    <p><span className={classes.highlighter}>Residence : </span>Bangladeshi</p>
                                    <p><span className={classes.highlighter}>Address : </span>MoulviBazar, Sylhet, Bangladesh</p>
                                    <p><span className={classes.highlighter}>Email : </span>web.kawsarahmed@gmail.com</p>
                                    <p><span className={classes.highlighter}>Phone : </span>+880 1733 920 943</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Template>
                
            </>
    );
};

export default About;
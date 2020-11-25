import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import SinglePortfolio from '../SinglePortfolio/SinglePortfolio';





const allPortfolio = [
    {
        id: 101,
        name: "Creative Agency Full Stack Web",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis quod odit quo rem vitae, nulla sed. Odio nemo explicabo expedita commodi ad. Fugiat, sed laborum? Aliquid illo aperiam necessitatibus?",
        img: "https://i.ibb.co/W2rXkHZ/homepage.png",
        skills: ["React", "Node", "MongoDB", "express"],
        link: {
            githubLink: "https://github.com/WebKawsar/creative-agency-client-update",
            liveLink: "https://creative-agency-simple.web.app/"
        }
    },
    {
        id: 102,
        name: "Volunteer Network Full Stack Web",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis quod odit quo rem vitae, nulla sed. Odio nemo explicabo expedita commodi ad. Fugiat, sed laborum? Aliquid illo aperiam necessitatibus?",
        img: "https://i.ibb.co/TkKm32W/volunteer.png",
        skills: ["React", "Node", "MongoDB", "express"],
        link: {
            githubLink: "https://github.com/WebKawsar/volunteer-network-client-update",
            liveLink: "https://volunteer-network-work.web.app/"
        }
    },
    {
        id: 103,
        name: "Travel Guru React Website",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis quod odit quo rem vitae, nulla sed. Odio nemo explicabo expedita commodi ad. Fugiat, sed laborum? Aliquid illo aperiam necessitatibus?",
        img: "https://i.ibb.co/dbc6HxJ/travel-guru.png",
        skills: ["React", "Node", "MongoDB", "express"],
        link: {
            githubLink: "https://github.com/WebKawsar/travel-guru-update",
            liveLink: "https://travel-guru-29853.web.app/"
        }
    },

]


const useStyles = makeStyles({
    root: {
        backgroundColor: "#222222",
        width: "100%",
    },
    


  });


const Portfolio = (props) => {


    const classes = useStyles();
    return (
        <>  
            <Box className={classes.root}>
                <Container fluid>
                    <Grid className="animate__animated animate__bounceInUp" container>
                        {
                            allPortfolio.map(portfolio => <SinglePortfolio key={portfolio.id} portfolio={portfolio}></SinglePortfolio>)
                        }
                    </Grid>
                </Container>
            </Box>
           
        </>
    );
};

export default Portfolio;
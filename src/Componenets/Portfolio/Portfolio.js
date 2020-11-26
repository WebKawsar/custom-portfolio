import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import SinglePortfolio from '../SinglePortfolio/SinglePortfolio';





const allPortfolio = [
    {
        id: 101,
        name: "Creative Agency MERN Stack Web",
        description: [

            " Admin can add a service & show it on the homepage", 
            " Find all orders from the admin panel & update order status.",
            " Login users can order service from the home page.",
            " Users can show her order list & order status.",
            " Give any review & show it on the homepage.",

        ],
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
        description: [

            " Admin can add an event & show it on the homepage.", 
            " Find all registered volunteer list & make an action.",
            " When users are interested in the event can join this by submitting an event form.",
            " Without login can’t join any event.",
            " Any volunteer can join the event & cancel the event."

        ],
        img: "https://i.ibb.co/TkKm32W/volunteer.png",
        skills: ["React", "Node", "MongoDB", "express"],
        link: {
            githubLink: "https://github.com/WebKawsar/volunteer-network-client-update",
            liveLink: "https://volunteer-network-work.web.app/"
        }
    },
    // {
    //     id: 103,
    //     name: "Ema John Ecommerce Web Application",
    //     description: [

    //         " ", 
    //         " ",
    //         " ",
    //         " ",
    //         " "

    //     ],
    //     img: "https://i.ibb.co/17qxCcM/ema-jofn.png",
    //     skills: ["React", "Node", "MongoDB", "express"],
    //     link: {
    //         githubLink: "https://github.com/WebKawsar/ema-john-simple",
    //         liveLink: "https://ema-john-simple-ecommerce.web.app/"
    //     }
    // },

    // {
    //     id: 104,
    //     name: "Apartment Hunt ( Team Project )",
    //     description: [

    //         " ", 
    //         " ",
    //         " ",
    //         " ",
    //         " "

    //     ],
    //     img: "https://i.ibb.co/r0hnmw0/apartment-hunt.png",
    //     skills: ["React", "Node", "MongoDB", "express"],
    //     link: {
    //         githubLink: "https://github.com/Asaduzzaman607/mern-apartment-rental-client",
    //         liveLink: "https://mern-apartment-rental-app.web.app/"
    //     }
    // },
    {
        id: 105,
        name: "Travel Guru Auth Application",
        description: [

            " A traveler can choose her favorite place.", 
            " Submitting the booking form is an interested traveler.",
            " Without login/register can’t submit the booking form.",
            " After submitting the booking form see the nearest hotel information.",
            " Hotel information is restricted."

        ],
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
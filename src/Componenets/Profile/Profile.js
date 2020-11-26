import { faFacebook, faFacebookF, faFacebookSquare, faGithub, faGithubSquare, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import profile from "../../images/programming.jpg";
import MainMenu from '../MainMenu/MainMenu';


const useStyles = makeStyles({
    root: {
        minWidth: "380px",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#444444",
        overflow: "hidden",
        position: "absolute",
        left: "85px",
        top: "0"
    },
    profileImage: {
         padding: "60px 0 0",
    },
    image: {
        width: "180px",
        height: "180px",
        borderRadius: "50%",
        border: "3px solid white",

    },
    name: {
        fontSize: "36px",
        fontWeight: "600",
        color: "#f5f5f5",
        margin: "5px 0 7px",
        lineHeight: "1.2em",
    },
    cv: {
        padding: "10px 38px",
        borderRadius: "30px",
        border: "2px solid white",
        backgroundColor: "#444444",
        color: "white",
        textDecoration: "none",
        transitionDuration: "1s",
        "&:hover": {
            backgroundColor: "white",
            color: "black",
        }

    },
    social: {
        display: "flex",
        justifyContent: "center"
    },
    icon: {
        fontSize: "30px",
        margin: "10px 10px 50px",
        color: "white",
        "&:hover": {
            backgroundColor: "#444444"
        }
    }







  });

const Profile = () => {

    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.profileImage}>
                    <img className={classes.image} src="https://i.ibb.co/vhGdJNq/Kawsar.jpg" alt="Profile"/>
                </Box>
                <Box className={classes.profileInfo}>
                    <h2 className={classes.name} style={{color: "white", marginBottom: "0", fontSize: "36px"}}>Kawsar Ahmed</h2>
                    <h4 className="animate__animated animate__bounceInLeft" style={{color: "#bbbbbb", margin: "5px 0 25px", fontSize: "18px", fontWeight: "400"}}>Front-end Web Developer</h4>
                    <Box>

                    
                    <Box className={classes.social}>
                        {/* <ul>
                            <li><a href="/"><FontAwesomeIcon className={classes.icon} icon={faFacebook} /></a></li>
                            <li><a href="/"><FontAwesomeIcon className={classes.icon} icon={faFacebook} /></a></li>
                            <li><a href="/"><FontAwesomeIcon className={classes.icon} icon={faFacebook} /></a></li>
                        </ul> */}

                        <Box>
                            <a href="https://www.facebook.com/web.kawsarahmed"><FontAwesomeIcon className={classes.icon} icon={faFacebookSquare} /></a>
                        </Box>
                        <Box>
                            <a href="https://www.linkedin.com/in/web-kawsar-ahmed/"><FontAwesomeIcon className={classes.icon} icon={faLinkedin} /></a>
                        </Box>
                        <Box>
                            <a href="https://github.com/WebKawsar"><FontAwesomeIcon className={classes.icon} icon={faGithubSquare} /></a>
                        </Box>
                        

                    </Box>

                    </Box>
                    <a style={{ overflow: "hidden", display: "inline-block"}} href="https://drive.google.com/u/1/uc?id=1jxzsiglqKV-yMPP5Jw1lpSu603fLj0rC&export=download" className={classes.cv}>Download CV</a>

                    {/* <Link className={classes.cv} to="https://drive.google.com/u/0/uc?id=176xqxutSVQAU6til2zS7mbCSOYJNcN2B&export=download">Download CV</Link> */}
                </Box>
            </Box>


        </>
    );
};

export default Profile;
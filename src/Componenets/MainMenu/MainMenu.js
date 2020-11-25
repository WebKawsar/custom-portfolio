import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBook, faBriefcase, faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Icon, makeStyles } from '@material-ui/core';
import { Description, Email, Home, Person } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';




const useStyles = makeStyles({
    root: {
        minWidth: "85px",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#222222",
        overflow: "hidden",
        color: "White",
        position: "absolute",
        left: "0",
        top: "0",
    },
    menu: {
        padding: "70px 0 0",
    },
    item: {
        marginBottom: "30px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    icon: {
        fontSize: "30px",
        color: "#b5b6b7"
        
    },
    link: {
        textDecoration: "none",
        color: "white",
        "&:hover": {
            color: "#04b4e0"
        }
    }



  });

const MainMenu = () => {

    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.menu}>
                    <Box className={classes.item}>
                        <Link to="/" className={classes.link}>
                            <FontAwesomeIcon className={classes.icon} icon={faHome} />
                            <span style={{fontSize: "14px", display: "block"}}>Home</span>
                        </Link>
                    </Box>

                    <Box className={classes.item}>
                        <Link to="/about" className={classes.link}>
                            <FontAwesomeIcon className={classes.icon} icon={faUser} />
                            <span style={{fontSize: "14px", display: "block"}}>About Me</span>
                        </Link>
                    </Box>

                    
                    {/* <Box className={classes.item}>
                        <Link to="/resume" className={classes.link}>
                            <FontAwesomeIcon className={classes.icon} icon={faGraduationCap} />
                            <span style={{fontSize: "14px", display: "block"}}>Resume</span>
                        </Link>
                    </Box> */}
                    <Box className={classes.item}>
                        <Link to="/portfolio" className={classes.link}>
                            <FontAwesomeIcon className={classes.icon} icon={faBriefcase} />
                            <span style={{fontSize: "14px", display: "block"}}>Portfolio</span>
                        </Link>
                    </Box>
                    <Box className={classes.item}>
                        <Link to="/blog" className={classes.link}>
                            <FontAwesomeIcon className={classes.icon} icon={faBook} />
                            <span style={{fontSize: "14px", display: "block"}}>Blog</span>
                        </Link>
                    </Box>
                    <Box className={classes.item}>
                        <Link to="/contact" className={classes.link}>
                            <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
                            <span style={{fontSize: "14px", display: "block"}}>Contact</span>
                        </Link>
                    </Box>

                </Box>
            </Box>

        </>
    );
};

export default MainMenu;
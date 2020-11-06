import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        backgroundColor: "#222222",
        height: "100vh",
        width: "100%",
    },
    paper: {
        padding: "30px",
        marginTop: "155px",
        backgroundColor: "#172A45"
    },
    img: {
        width: "100%",
        minHeight: "350px"
    },
    textPaper: {
        padding: "30px",
        margin: "35px 0 0 -40px",
        backgroundColor: "#172A45",
        color: "white"
    },
    skillButton: {
        padding: "5px 15px",
        margin: "0 3px",
        backgroundColor: "#4B5769",
        border: "none",
        color: "white",
    },
    icon: {
        fontSize: "25px",
        color: "white",
        margin: "20px 10px",
    }



  });


const SinglePortfolio = (props) => {

    const {name, description, img, link:{githubLink, liveLink}, skills} = props.portfolio;
    const classes = useStyles();

    return (
        <>
            <Grid item md={12}>
                <Paper className={classes.paper}>
                    <Grid container>
                        <Grid item md={6}>
                            <Link to="/"><img className={classes.img} src={img} alt=""/></Link>
                        </Grid>
                        <Grid item md={6}>
                            <Paper className={classes.textPaper}>
                                <h2 style={{margin: "0"}}>{name}</h2>
                                <p>{description}</p>
                                <Box>
                                    <button className={classes.skillButton}>React</button>
                                    <button className={classes.skillButton}>Node</button>
                                    <button className={classes.skillButton}>MongoDB</button>
                                    <button className={classes.skillButton}>Express</button>
                                </Box>
                                <Box>
                                    <a target="_blank" href={githubLink}> <FontAwesomeIcon className={classes.icon} icon={faGithub} /></a>
                                    <a target="_blank" href={githubLink}> <FontAwesomeIcon className={classes.icon} icon={faExternalLinkSquareAlt} /></a>


                                    {/* <Link to={githubLink}>
                                        <FontAwesomeIcon className={classes.icon} icon={faGithub} />
                                    </Link>
                                    <Link to={liveLink}>
                                        <FontAwesomeIcon className={classes.icon} icon={faExternalLinkSquareAlt} />
                                    </Link> */}
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>
    );
};

export default SinglePortfolio;
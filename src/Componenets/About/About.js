import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Template from '../Template/Template';
import { faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { School } from '@material-ui/icons';


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
 

import image from "../../images/profile-img.jpg";
import Ourskills from '../Experience/Experience';



const useStyles = makeStyles({
    root: {
        backgroundColor: "#222222",
        color: "white",
        padding: "10px 50px",
        minHeight: "100vh",
        verticalAlign: "middle",

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
        paddingLeft: "30px",
    },
    img: {
        width: "100%"
    },
    skillBtn: {
        padding: "10px 38px",
        borderRadius: "5px",
        margin: "10px 10px",
        border: "2px solid white",
        backgroundColor: "#444444",
        color: "white",
        textDecoration: "none",
        transitionDuration: "1s",
        "&:hover": {
            backgroundColor: "white",
            color: "black",
            cursor: "pointer"
        }
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
                                <Grid item md={12}>
                                    <p className={classes.myInfo}>Programming is my passion. I love to work with web technologies. Always try to grab the new features of technology. Last few years made myself skilled in the field of web application development. Expert in developing Single Page Application (SPA) using React JS. I am very much comfotable with JavaScript. I worked with different types of libraries and framework. Among of them I feel comfortable with React, Node, Express, MongoDB, Material UI etc</p>
                                </Grid>
                                {/* <Grid className={classes.info} item md={5}>
                                    <p><span className={classes.highlighter}>Age : </span>24</p>
                                    <p><span className={classes.highlighter}>Residence : </span>Bangladesh</p>
                                    <p><span className={classes.highlighter}>Address : </span>MoulviBazar, Sylhet, Bangladesh</p>
                                    <p><span className={classes.highlighter}>Email : </span>web.kawsarahmed@gmail.com</p>
                                    <p><span className={classes.highlighter}>Phone : </span>+880 1733 920 943</p> 

                                    <Box>
                                        <img className={classes.img} src={image} alt=""/>
                                    </Box> 

                                    
                                </Grid> */}
                            </Grid>
                        </Grid>
                        <Grid item md={12}>
                            <h3 className={classes.about}> <span className={classes.highlighter}>Skills</span></h3>
                            <Box>
                                <button className={classes.skillBtn}>React</button>
                                <button className={classes.skillBtn}>Node</button>
                                <button className={classes.skillBtn}>MongoDB</button>
                                <button className={classes.skillBtn}>Express</button>

                                <button className={classes.skillBtn}>JavaScript</button>
                                <button className={classes.skillBtn}>Material UI</button>
                                <button className={classes.skillBtn}>Bootstrap</button>
                                <button className={classes.skillBtn}>SASS</button>
                                <button className={classes.skillBtn}>HTML</button>
                                <button className={classes.skillBtn}>CSS</button>
                                <button className={classes.skillBtn}>Firebase</button>
                                <button className={classes.skillBtn}>Netlify</button>
                                <button className={classes.skillBtn}>Heroku</button>
                                <button className={classes.skillBtn}>Jira</button>
                                <button className={classes.skillBtn}>Git & Github</button>
                                <button className={classes.skillBtn}>VS Code</button>
                               
                            </Box>
                        </Grid>

                        <Grid className="animate__animated animate__bounceInUp" item md={12}>
                            <h3 className={classes.about}> <span className={classes.highlighter}>Education</span></h3>
                            <Grid container>
                                <Grid item md={12}>
                                    {/* <p className={classes.myInfo}>National University, Bangladesh</p> */}
                                    
                                    <Box>
                                        <VerticalTimeline>

                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', borderTop: "5px solid white" }}
                                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                            date="Jun 2020 - Present"
                                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                            icon={<FontAwesomeIcon icon={faReact} />}
                                        >
                                            <h3 className="vertical-timeline-element-title">Programming Hero</h3>
                                            <h4 className="vertical-timeline-element-subtitle">Complete Web Development Course</h4>
                                            <p>
                                            React, Node, MongoDB, Express
                                            </p>
                                        </VerticalTimelineElement>



                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--education"
                                            date="Jan 2017 - Dec 2017"
                                            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', borderTop: "5px solid white" }}
                                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                            icon={<FontAwesomeIcon icon={faPhp} />}
                                        >
                                            <h3 className="vertical-timeline-element-title">Basis Institute of Technology Management (BITM)</h3>
                                            <h4 className="vertical-timeline-element-subtitle">Certified Web Development Specialist</h4>
                                            <p>
                                            Php, mySql, jQuery, JavaScript
                                            </p>
                                        </VerticalTimelineElement>


                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--education"
                                            date="2016 - Present"
                                            contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', borderTop: "5px solid white" }}
                                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                            icon={<School></School>}
                                        >
                                            <h3 className="vertical-timeline-element-title">National University Bangladesh</h3>
                                            <h4 className="vertical-timeline-element-subtitle">Bachelor's of Business Administration (BBA)</h4>
                                            <p>
                                            MoulviBazar Govt College, MoulviBazar
                                            </p>
                                        </VerticalTimelineElement>

                                        
                                        
                                        </VerticalTimeline> 
                                    </Box>

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12}>
                            {/* <Ourskills></Ourskills> */}
                        </Grid>
                    </Grid>
                </Template>
                
            </>
    );
};

export default About;
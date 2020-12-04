import { Box, Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import Template from '../Template/Template';

import { init, sendForm } from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
init('user_mg1JAbn9K4W9QqKYPBqsH');




const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "black",
      padding: "0 50px",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center"
    },
    paper: {
        padding: "30px",

    },
    input2: {
        width: "48%",
        marginRight: "2%"

    },
    helperText: {
        color: "red"
    },
    submit: {
        padding: "15px 50px",
        borderRadius: "5px",
        border: "2px solid #444444",
        // backgroundColor: "#444444",
        marginTop: "30px",
        color: "black",
        textDecoration: "none",
        transitionDuration: "1s",
        "&:hover": {
            backgroundColor: "#444444",
            color: "white",
            cursor: "pointer"
        }

    },
    highlighter: {
        color: "#04B4E0",
    },
   


  }));
  

const Contact = () => {

    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        
        sendForm('267257267257', 'template_io559qs', '#contact-form')
        .then((result) => {
            
            if(result.text === "OK"){
                alert("Message Send Successfully. As soon as possible try to reply you.")
                document.getElementById("name").value ="";
                document.getElementById("email").value ="";
                document.getElementById("subject").value ="";
                document.getElementById("message").value ="";
            }

        }, (error) => {
            console.log(error.text);
        });

    }



    const classes = useStyles();
    return (
        <>
            <Template>
                <Grid container className={`${classes.root} `}>
                    <Grid className="animate__animated animate__bounceInUp" item md={12}>
                        <h2 style={{ fontSize: "40px", color: "white"}}>Contact <span className={classes.highlighter}>Me</span></h2>
                        <Paper className={classes.paper}>
                            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    inputRef={register({
                                        required: "Name is required",
                                    })}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    // defaultValue={loggedInUser.name}
                                    className={`${classes.input2} input2`}
                                    id="name"
                                    type="text"
                                    label="Your name / company's name"
                                    name="name"
                                    FormHelperTextProps={{
                                        className: classes.helperText,
                                    }}
                                    helperText={errors.name && errors.name.message}
                                />


                                <TextField
                                    inputRef={register({
                                        required: "Email is required",
                                    })}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    // defaultValue={loggedInUser.email}
                                    className={`${classes.input2} input2`}
                                    id="email"
                                    type="email"
                                    label="Your email address"
                                    name="email"
                                    FormHelperTextProps={{
                                        className: classes.helperText,
                                    }}
                                    helperText={errors.email && errors.email.message}
                                />

                                <TextField
                                    inputRef={register({
                                        required: "Subject is required",
                                    })}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    className={classes.input}
                                    multiline
                                    id="subject"
                                    type="text"
                                    label="Subject"
                                    name="subject"
                                    FormHelperTextProps={{
                                        className: classes.helperText,
                                    }}
                                    helperText={errors.subject && errors.subject.message}
                                />


                                <TextField
                                    inputRef={register({
                                        required: "Message is required",
                                    })}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    className={classes.input}
                                    multiline
                                    rows={5}
                                    id="message"
                                    type="text"
                                    label="Message"
                                    name="message"
                                    FormHelperTextProps={{
                                        className: classes.helperText,
                                    }}
                                    helperText={errors.message && errors.message.message}
                                />

                                <input className={classes.submit} type="submit" value="Submit"/>
                            </form>

                        </Paper>
                    </Grid>
                   
                </Grid>
            </Template>
        </>
    );
};

export default Contact;
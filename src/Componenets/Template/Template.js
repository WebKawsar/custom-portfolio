import { Box, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Profile from '../Profile/Profile';


const useStyles = makeStyles({
    root: {
        // display: "flex",
        
    },
    fixed: {
        // flex: "0 0 465px",
        position: "fixed",
    },
    children: {
        // flex: 1,
        marginLeft: "465px",
    }


  });

const Template = (props) => {

    const classes = useStyles();
    return (
            <>
                <Box className={classes.root}>
                    <Box className={`${classes.fixed} fixed`}>
                        <MainMenu></MainMenu>
                        <Profile></Profile>
                    </Box>

                    <Box className={`${classes.children} children`}>
                        {
                            props.children
                        }
                    </Box>
                </Box>

            
            </>
    );
};

export default Template;
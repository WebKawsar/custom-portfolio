import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Profile from '../Profile/Profile';


const useStyles = makeStyles({
    root: {

    },
    fixed: {
        position: "fixed"
    },
    children: {
        
        marginLeft: "465px",
    }


  });

const Template = (props) => {

    const classes = useStyles();
    return (
        <>
            
                
                <Box className={classes.root}>

                    <Box className={classes.fixed}>
                        <MainMenu></MainMenu>
                        <Profile></Profile>
                    </Box>
                    
                    <Box className={classes.children}>
                        {
                            props.children
                        }
                    </Box>
                    
                </Box>
             
        </>
    );
};

export default Template;
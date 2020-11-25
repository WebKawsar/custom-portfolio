import { Grid, makeStyles, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import Template from '../Template/Template';





const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "black",
      padding: "10px 50px",
      minHeight: "100vh",
      verticalAlign: "middle",
    },
   


  }));
  

const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {

        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@web-kawsarahmed')
        .then((response) => response.json())
        .then((data) => setBlogs(data.items))


    }, [])



    const classes = useStyles();
    return (
        <>
            <Template>
              <Grid container className={classes.root}>   
                {
                    blogs.map((blog, index) => <SingleBlog key={index} blog={blog}></SingleBlog>)
                }     
              </Grid>
            </Template>
        </>
    );
};

export default Blog;
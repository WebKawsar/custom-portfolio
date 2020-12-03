import { Grid, makeStyles, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import Template from '../Template/Template';





const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "black",
      // padding: "10px 50px",
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

    function getWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      );
    }
    
    function getHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );
    }
    
    console.log('Width:  ' +  getWidth() );
    console.log('Height: ' + getHeight() );

    const classes = useStyles();
    return (
        <>
            <Template>
              <Grid container className={`${classes.root} blog`}>   
                {
                    blogs.map((blog, index) => <SingleBlog key={index} blog={blog}></SingleBlog>)
                }
              </Grid>
            </Template>
        </>
    );
};

export default Blog;
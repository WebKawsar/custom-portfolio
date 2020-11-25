import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
  card: {
      minWidth: 345,
      margin: "30px 30px"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: "red",
    },



  }));
  
const SingleBlog = (props) => {
  const {title, pubDate, thumbnail, link} = props.blog;
  console.log(props.blog);
    const classes = useStyles();
    return (
        <>
            <Grid item md={6}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            K
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title={title}
                        subheader={pubDate}
                    />
                    <CardMedia
                        className={classes.media}
                        image={thumbnail}
                        title="Medium.com"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>

                        <a href={link}>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                        </a>
                    </CardActions>
                </Card>
            </Grid> 
        </>
    );
};

export default SingleBlog;
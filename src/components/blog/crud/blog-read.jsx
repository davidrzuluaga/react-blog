import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteBlogEntry from './blog-delete';

const useStyles = makeStyles({
  card: {
    margin: '10px 0',
  },
  media: {
    height: 140,
  },
});

export default function BlogRead(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.element.picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.element.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.element.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {window.location.pathname === '/userentries' ?
          <DeleteBlogEntry {...props} element={props.element} />
        : ""}
      </CardActions>
    </Card>
  );
}
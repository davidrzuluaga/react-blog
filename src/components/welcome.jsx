import React, {useState} from 'react';
import BlogEntries from './welcome/blogentries';
import { Grid } from '@material-ui/core';
import axios from 'axios';

const Welcome = () => {
  // eslint-disable-next-line
  const [start, setStart] = useState(() => getBlogEntries())

  const [blogEntries, setBlogEntries] = useState([])

  function getBlogEntries() {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_NODE_SERVER_URL}/api/blogs`
    }).then(element => {
      setBlogEntries(element.data.Blog)
    }).catch(e=>{
      console.log(e)  
    })
  }    
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={5}>      
        <div className="welcome">
            <h1>Welcome to the blog</h1>
            <p>Here you can see all the entries!</p>
        </div>
        <BlogEntries blogEntries={blogEntries} />
      </Grid>
    </Grid>
  );
  
}

export default Welcome
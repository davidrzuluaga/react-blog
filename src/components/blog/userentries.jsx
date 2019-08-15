import React, {useState} from 'react';
import BlogEntries from '../welcome/blogentries';
import axios from 'axios';
import cookie from 'react-cookies'
import { Grid } from '@material-ui/core';
import CreateBlogEntry from './crud/blog-create';

const UserEntries = () => {
  // eslint-disable-next-line
  const [start, setStart] = useState(() => getBlogEntries())

  const [blogEntries, setBlogEntries] = useState([])

  function getBlogEntries() {
    axios({
      headers: {'Authorization':`Token ${cookie.load('session').token}`},
      method: "GET",
      url: `https://node-blog-api-app.herokuapp.com/api/blog/${cookie.load('session')._id}`
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
      {console.log(blogEntries)}
      <Grid item xs={5}>
        <div className="UserEntries">
          <h1>Your Entries</h1>
          <CreateBlogEntry blogEntries={blogEntries} setBlogEntries={setBlogEntries} />
          <BlogEntries blogEntries={blogEntries} setBlogEntries={setBlogEntries} />
        </div>  
      </Grid>
    </Grid>
  );
  
}

export default UserEntries
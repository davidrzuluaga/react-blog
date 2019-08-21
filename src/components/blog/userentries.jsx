import React, {useState, useEffect} from 'react';
import BlogEntries from '../welcome/blogentries';
import axios from 'axios';
import cookie from 'react-cookies'
import CreateBlogEntry from './crud/blog-create';

const UserEntries = () => {
  const [blogEntries, setBlogEntries] = useState([])
  
  useEffect(() => {
    getBlogEntries()
  });

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
    <div className="row">
      <div className="col-5 centered">
        <div className="UserEntries">
          <h1>Your Entries</h1>
          <CreateBlogEntry blogEntries={blogEntries} setBlogEntries={setBlogEntries} />
          <BlogEntries blogEntries={blogEntries} setBlogEntries={setBlogEntries} />
        </div>  
      </div>
    </div>
  );
  
}

export default UserEntries
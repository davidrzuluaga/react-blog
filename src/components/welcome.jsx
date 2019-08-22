import React, {useState, useEffect} from 'react';
import BlogEntries from './welcome/blogentries';
import axios from 'axios';

const Welcome = () => {
  const [blogEntries, setBlogEntries] = useState([])
  
  useEffect(() => {
    getBlogEntries()
  }, []);

  function getBlogEntries() {
    axios({
      method: "GET",
      url: `https://node-blog-api-app.herokuapp.com/api/blogs`
    }).then(element => {
      setBlogEntries(element.data.Blog)
    }).catch(e=>{
      console.log(e)  
    })
  }

  return (
    <div className="row" >
      <div className="col-5 centered">      
        <div className="welcome">
            <h1>Welcome to the blog</h1>
            <p>Here you can see all the entries!</p>
        </div>
        <BlogEntries blogEntries={blogEntries} />
      </div>
    </div>
  );
  
}

export default Welcome
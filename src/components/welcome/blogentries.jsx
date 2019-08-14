import React, {useState} from 'react';
import axios from 'axios';

const BlogEntries = (props) => {
    const [blogEntries, setBlogEntries] = useState([])
    // eslint-disable-next-line
    const [start, setStart] = useState(() => getBlogEntries())

    function getBlogEntries() {
        axios({
            method: "GET",
            url: `http://localhost:5035/api/blogs`
        }).then(element => {
            setBlogEntries(element.data.Blog)
        }).catch(e=>{
            console.log(e)  
        })
    }    

    return (
        <div className="blogEntries">
            {blogEntries.map(element => 
                <p>{element.title}</p>
            )}
        </div>
    );
  
}

export default BlogEntries
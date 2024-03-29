import React from 'react';
import BlogRead from '../blog/crud/blog-read';

const BlogEntries = (props) => {
    
    return (
        <div className="blogEntries">
            {props.blogEntries.length === 0 ? "It seems that is not entries here. Write one!" : 
                props.blogEntries.map(element => 
                    <BlogRead key={element._id} {...props} element = {element} />
                )
        }
        </div>
    );
  
}

export default BlogEntries
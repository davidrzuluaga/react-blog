import React from 'react';
import BlogRead from '../blog/crud/blog-read';

const BlogEntries = (props) => {
    
    return (
        <div className="blogEntries">
            {props.blogEntries.map(element => 
                <BlogRead element = {element} />
            )}
            {props.blogEntries.length === 0 ? "It seems that is not entries here. Write one!" : ""}
        </div>
    );
  
}

export default BlogEntries
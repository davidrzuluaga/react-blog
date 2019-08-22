import React from 'react';

const Loading = () => {
  return (
    <div class="loadcontent">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>¡Loading the blog entries!</p>
    </div>  
  );
  
}

export default Loading
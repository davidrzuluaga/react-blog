import React from 'react';
import BlogEntries from './welcome/blogentries';

const Welcome = () => {
  return (
    <div className="welcome">
        <h1>Bienvenido al blog</h1>
        <p>Aqui puedes ver todas las entradas</p>
        <BlogEntries />
    </div>
  );
  
}

export default Welcome
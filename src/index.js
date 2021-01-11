import React from 'react';
import ReactDOM from 'react-dom';

const fname = "nurul";
const lname = "islam"
const fullName = fname + " "+ lname

ReactDOM.render(
    <>
    <h1> Hello react App </h1>
    <p> this is a pragraph</p>
    <p>My full name is {fname} {lname}</p>
    </>
    

      
    
  ,

  document.getElementById('root')
);




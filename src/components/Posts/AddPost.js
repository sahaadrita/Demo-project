import React, { Component, useState, handleChange } from 'react'


export default function AddPost(){
    
   const [title, setTitle]=useState('')
   const [body, setBody]=useState('')
   const [titleErr, setTitleErr]=useState({})
   const [bodyErr, setBodyErr]=useState({})
   
    function submitHandler(e){e.preventDefault();const isValid=formvalidation();
      // if(isValid){
        
        
      // }
        fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    }
    
  const formvalidation =()=>
  {
   const titleErr={};
   const bodyErr={};
   let isValid=true;

   if(title.trim().length<5){
     titleErr.titleShort="Title is too short";
     isValid=false;
   }
   if(title.trim().length>10){
     titleErr.titleLong="Title cannot be more than 10 characters";
     isValid=false;
   }
   if(body.trim().length<10){
     bodyErr.bodyLong="Body cannot be less than 10 characters";
     isValid=false;
   }
   setTitleErr(titleErr);
   setBodyErr(bodyErr);
   return isValid;
  }
    return(
        <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type ="text" name="title" id="title" />
                </div>
                
                {Object.keys(titleErr).map((key)=>{
                  return <div style={{color:"red"}}>{titleErr[key]}</div>
                })}
                <br/>
                <div>
                    <label htmlFor="body">Body</label>
                    <input value={body} onChange={(e)=>setBody(e.target.value)} type ="text" name="body" id="body"/>
                </div>
               
                {Object.keys(bodyErr).map((key)=>{
                  return <div style={{color:"red"}}>{bodyErr[key]}</div>
                })}
                <br/>
                <input type = 'submit'></input>
            </form>
    )
}

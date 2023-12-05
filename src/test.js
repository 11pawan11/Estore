import React, { useState } from 'react';


const Forms = () => {
    const [inputs,setInputs]= useState({});

   
    const handleChange = (event) =>{
      const name= event.target.name; 
      const value = event.target.value;
      setInputs(values=>({...values, [name]:value}))
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(inputs);
    };
    
    return (
    <div>
    <form onSubmit={handleSubmit}>
    <label>Enter your name:
    <input type="text" name="name" value={inputs.name || ""}
        onChange={handleChange} /><br/>
    </label>
    <label>Enter your password:
      <input type="password" name="password" value = {inputs.password || ""}
       onChange={handleChange}/></label><br/>
      <button>Submit</button>
      </form>
    </div>
  )
    };


export default Forms;

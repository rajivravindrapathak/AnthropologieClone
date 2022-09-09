
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./Register.css"
const Register = () => {
    const navigate=useNavigate()

    const [formData,setformData]=useState([])

    const Handle=(e)=>{

        const {name, value}=e.target
            setformData({
                ...formData,[name]:value,
            })
        }
        
  const handleSubmit=(e)=>{
    e.preventDefault()
    
 
    const create={
      "firstName": formData.firstName,
      "lastName": formData.lastName,
      "email": formData.email,
      "password": formData.password,
    }
    fetch("https://anthropologie-application.herokuapp.com/register",{
      method:"POST",
      headers:{
          "content-type":"application/json",
      },
      body:JSON.stringify(create),
    
    }).then(data => data.json())
    .then(data =>  { 
        console.log(data);
        if(data.status="ok"){
            alert("Successfully Registered"); 
            navigate("/login")
        } else{
            alert("Registation failed"); 
        }
    })
    .catch((err) => {
         alert ("This is a warning message!");
        console.error(err);
    })
    
    }
      
    return (
        <form  onSubmit={handleSubmit}  >
        <div className="register">
        <i id="close" class="fa-solid fa-angle-left"></i>
        <h2 className="r-heading">Create An Account</h2>
        <hr />
       <div className='r-inputs'>
       <lable className="lable" >Firstname</lable >
        <input   onChange={Handle} type="text" className="firstame" name='firstName'/>
        <lable className="lable">Lastname</lable >
        <input onChange={Handle}  type="text" className="lastname" name='lastName'/>
        <lable className="lable " >Email</lable >
        <input onChange={Handle}  type="text" className="name" name='email'/>
        <lable className="lable" >Password</lable >
        <input onChange={Handle}  type="password" className="name" name='password'/>
        <input className="submit"  type="submit" value="Submit" />
  
        <span>
        By creating an account, you agree to Anthropologie's <a href="">terms of use</a> and <a href="">privacy policy</a>. Landlines, VoIP, and prepaid phones are not supported. Standard message & data rates may apply. Message frequency may vary. Reply HELP for help, and STOP to cancel. <a href="">Contact us</a> for more information.
        </span>
        
       </div>
       <h2 className="r-heading">Already Have an Account?</h2>
    <Link to="/login">  <button className='create-button'>Sign In</button></Link>
         </div>
         </form>
    );
};

export default Register;
 
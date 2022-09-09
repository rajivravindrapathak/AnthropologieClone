import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
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
      "email": formData.email,
      "password": formData.password,
    }
    fetch("https://anthropologie-application.herokuapp.com/login",{
      method:"POST",
      headers:{
          "content-type":"application/json",
      },
      body:JSON.stringify(create),
    
    }).then(data => data.json())
    .then(data =>  { 
        console.log(data);
        if(data.status=="ok"){
            alert("Successfully login"); 
            navigate("/")
        } else{
            alert("Login Failed"); 
        }
    })
    .catch((err) => {
         alert ("This is a warning message!");
        console.error(err);
    })
    
    }
    return (
        <form onSubmit={handleSubmit}  >
        <div className="register">
        <h2 className="r-heading">Sign in</h2>
        <hr />
       <div className='r-inputs'>
        <lable className="lable " >Email</lable >
        <input  onChange={Handle} type="text" className="name" name='email'/>
        <lable className="lable" >Password</lable >
        <input  onChange={Handle} type="password" className="name" name='password'/>
        <button className="submit"  type="submit" value="Submit">sign in</button>
       
  
  
        <span>
        By creating an account, you agree to Anthropologie's <a href="">terms of use</a> and <a href="">privacy policy</a>. Landlines, VoIP, and prepaid phones are not supported. Standard message & data rates may apply. Message frequency may vary. Reply HELP for help, and STOP to cancel. <a href="">Contact us</a> for more information.
        </span>
        
       </div>
       <h2 className="r-heading">Sign Up</h2>
    <Link to="/register">  <button className='create-button'>Create An Account</button></Link>
         </div>
         </form>
    );
};

export default Login;
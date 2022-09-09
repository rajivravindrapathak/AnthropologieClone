import { useState } from "react"
// import cardlogo from "../../Images/black-prime-logo.jpeg"
import axios from "axios"
import "./Address.css"
import { Link } from "react-router-dom"

export const Address=()=>{



    function Payment(){
        alert("Your Order Succesfully Placed Thanku!")
    }
 const [check,subcheck]=useState(false)
 const [form,setform]=useState({
     name:"",
      mobile:"",
     Zip:"",
     address1:"",
     address2:"",
     city:"",
     state:""
 })
  
 const handledata=(e)=>{
     const {className,value}=e.target
     setform({...form,[className]:value})
 }
 const handlesubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:8080/users",{
      name:form.fullname,
      mobile:form.mobile,
      Zip:form.zip,
      address1:form.address1,
    address2:form.address2,
    city:form.city,
    state:form.state

  })
 
 }
    

   

    return(
       <>
            

           
            <p className="addhead">Add a billing address</p>
            <div className="inputdiv2">
                <form onSubmit={handlesubmit}>
               <label>Full Name</label><br></br>
               <input onChange={handledata} className="fullname" type="text" ></input><br></br> 
               <label>Phone number</label><br></br>
               <input onChange={handledata} className="mobile" type="number" ></input> <br></br>
               <label>ZIP Code</label><br></br>
               <input onChange={handledata} className="zip" type="number" ></input>  <br></br>
               <label>Address Line 1</label><br></br>
               <input onChange={handledata} className="address1" type="text" ></input> <br></br> 
               <label>Line2</label><br></br>
               <input onChange={handledata} className="address2" type="text" ></input>  <br></br>
               <label>City</label><br></br>
               <input onChange={handledata} className="city" type="text" ></input>  <br></br>
               <label>State</label><br></br>
               <input onChange={handledata} className="state" type="text" ></input> <br></br>
               <input onClick={Payment} className="add-submit" type="submit" value="Use this address"></input> 
               </form>

            </div>
            <div className="conti">
            <Link to={'/'} >
            <button className="continue">Continue To Shopping</button>
            </Link>
             <br></br> 
           
           
             </div>
            </>
    )
}
import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom";

import './Product.css'


function Check(p){


  

    if(p.p!== ''){
      return <img onClick={(()=>{
          change(p.p)
      })} src={p.p} alt="" />
  }
  



}
// function Setimg(s){
// return <img src={s.s}/>
// }

const Product = ({cat}) => {






    const [productData,setproductData]=useState([])
    const [productimagemain,setproductimagemain]=useState([])
    const [text,setText] = useState("")






   useEffect(()=>{
    axios.get('https://anthropologie-application.herokuapp.com/products')
    .then(function (response) {
      // handle success
      setproductData(response.data)
  
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
   },[])


   
    
            // sorting 
            function Handle(e){
              const sortdata=[...productData]
              if(e.target.value=="low"){
                sortdata.sort(function(a,b){
                  return (a.price-b.price)
                 
                })
               
                setproductData(sortdata)
              } 
              if(e.target.value=="high"){
                sortdata.sort(function(a,b){
                  return (b.price-a.price)
                 
                })
               
                setproductData(sortdata)
              }
              if(e.target.value=="a"){
                sortdata.sort(function(a,b){
                  if(a.title>b.title){
                    return 1
                  }else if(a.title<b.title){
                    return -1
                  }else{
                    return 0
                  }
                  
                 })
                setproductData(sortdata)
              }
              if(e.target.value=="z"){
                sortdata.sort(function(a,b){
                  if(a.title<b.title){
                    return 1
                  }else if(a.title>b.title){
                    return -1
                  }else{
                    return 0
                  }
                  
                 })
                setproductData(sortdata)
              }
           

              
            }
   
 

  
    return (
   
        <div className='product'>
            <p className='p-head'>{cat}   </p>
            <div id="sort">
              
              <h2>Related Product to : {cat}</h2>
              <p></p>
    <p>Sort By :</p> 
    <select  onChange={Handle}
             id="select"
            >
        <option value="">Featured</option>
        <option value="low">Price Low-High</option>
        <option value="high">Price High-Low</option>
        <option value="a">A-Z</option>
        <option value="z">Z-A</option>
    </select>
</div>
            <div className="p-main">
                <div className="p-main-left">
<p>Browse By:</p>

<Link to="/perfume">Perfume</Link>
<Link to="/beauty&wellness">Beauty & wellness</Link>
<Link to="/outdoorpatiofurniture">Outdoor Patio Furniture</Link>
<Link to="/outdoordecor">Outdoor Decor</Link>
<Link to="/dresses">Dresses</Link>
<Link to="/clothing">Clothing</Link>
                </div>
                <div className="p-main-right">
              

               
               {
                   productData.filter((product)=>product.category.toLowerCase().includes(`${cat}`)).map((e)=>(
                    <Link className='p-main-right-div' key={e._id} to={`/product/${e._id}`}>
                     

 
<img className='product-mainimage' src={e.image_link[0]} alt="" />
<p>{e.title} </p>
<p>${e.price}</p>
<div className='p-main-right-div-subdiv'>
<Check p={e.image_link[0]}/>
<Check p={e.image_link[1]}/>
<Check p={e.image_link[2]}/>
<Check p={e.image_link[3]}/>
</div>
                 </Link>
                   ))
               }
 
               
                
                </div>
            </div>
        </div>
    );
                   
};


export default Product;
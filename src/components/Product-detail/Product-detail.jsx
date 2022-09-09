import React from 'react';
import "./Product-detail.css"
import { FaStar } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';




 function Check(p){

  

    if(p.p !== ''){
        return <img onClick={(()=>{
            change(p.p)
        })} src={p.p} alt="" />
    }


 }
 function Check2(t){

    
        if(t.t !== ''){
            return <div>{t.t}</div>
        }
    
    
     }
     var  change;
   var id;
const Productdetail = () => {

  const [state,setState]=useState(true)
const [qnt,setQnt]=useState()

const [productData,setproductData]=useState([])
const [productimagemain,setproductimagemain]=useState([])
const [productimage,setproductimage]=useState([])
const [productcolor,setproductcolor]=useState([])
const [productsize,setproductsize]=useState([])





function Addcart(p){

    axios.post('https://anthropologie-application.herokuapp.com/cart', {
        product_id: p,
        quantity: qnt
      })
      .then(function (response) {
        console.log(response);
      
      })
      .catch(function (error) {
        console.log(error);
      });
      setState(!state)
      location.reload();

      

     
     
}






function Handlechange(e){
   setQnt( e.target.value)
}


    const {_id}=useParams()

    


     change=(p)=>{
        setproductimagemain(p)
     }

    
   useEffect(()=>{
    axios.get(`https://anthropologie-application.herokuapp.com/products/${_id}`)
    .then(function (response) {
      // handle success
      setproductData(response.data)
      setproductimage(response.data.image_link)
      setproductimagemain(response.data.image_link[0])
      setproductcolor(response.data.color)
      setproductsize(response.data.size)
  
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
   },[])


  
    return (
        <div className='product-detail'>
                   <p className='p-d-heading'>{productData.category}   /  {productData.title}</p>
                   <div className="product-detail-maindiv">
                       <div className="p-d-leftdiv">
                       <div className="p-d-left1">
                           {
                              
                                productimage.map((e)=>(
                                 <Check p={e}/>
                                ))
                            
                           }
                          

                       </div>
                      {/* left2nd */}
                       <div className="p-d-left2">
                           
<img src={productimagemain} alt="" />
                       </div>
                       </div>
                      
                      {/* rightdiv */}
                       <div className="p-d-rightdiv">
                       <span className='p-d-rightdiv-title'>{productData.title}</span>
                       {/* star */}
                        <div className="star">
 <FaStar/>
 <FaStar/>
 <FaStar/>
 <FaStar/>
 <FaStar/>
 <a className='star-review' href="">Write a review</a>
</div>
{/* price */}
   <p className='price'>${productData.price}.00</p>

   <span className='p-d-rightdiv-offer' >Or 4 interest-free installments of $80.00 with <span>Klarna</span> or <span>afterpay</span><h3></h3></span>

<hr className='' />
<p  className="p-d-rightdiv-color">Color</p>
<div className='circle'>
{
                               productcolor.map((e)=>(
                                <Check p={e}/>
                               ))
                           }

</div>
<p  className="p-d-rightdiv-color">Size</p>
<div className='p-d-rightdiv-size'>
    
{
                               productsize.map((e)=>(
                                <Check2 t={e}/>
                               ))
                           }
    
</div>
 <p className="p-d-rightdiv-color">Qty</p>
 <select onChange={Handlechange} className='product-select'>
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
 </select>
 <button className='cart-button' onClick={()=>{
   Addcart(productData._id)
 }}>{state ? "Add To Card" :"Added To Cart"}</button>
 <p className="p-d-rightdiv-color">Product detail</p>
 <p className='product-detail-deatil'>{productData.detail}</p>


                       </div>
                   </div>
        </div>
    );
};

export default Productdetail;
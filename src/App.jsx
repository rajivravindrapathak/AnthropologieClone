import { useState } from 'react'
import logo from './logo.svg'

import Button from './components/button/button'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

import Product from './components/Product/Product'
import Home from './components/Home/Home'
import Productdetail from './components/Product-detail/Product-detail'
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Search }from './components/Search/Search'
import Home2 from './components/Home2/Home2'
import { Cartpage } from './components/Cart/Cartpage'
import { Payment } from './components/payment/Payment'
import { Address } from './components/Address/Address'





function App() {
  // const [state, setState] = useState(false)

  return (
    <div className="App">
     <Navbar/>


        <Routes>
     
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home2" element={<Home2/>}/>
        <Route exact path="/cart" element={<Cartpage/>}/>

        
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/new!" element={<Product cat={"new!"}/>}/>
          <Route exact path="/product/:_id" element={<Productdetail/>}/>
                                        {/* product */}
          <Route exact path="/shoes" element={<Product cat={"shoes"}/>}/>
          <Route exact path="/giftsformom" element={<Product cat={"gifts for mom"}/>}/>
          <Route exact path="/dresses" element={<Product cat={"dresses"}/>}/>
          <Route exact path="/accessories" element={<Product cat={"accessories"}/>}/>
          <Route exact path="/home&furniture" element={<Product cat={"home & furniture"}/>}/>
          <Route exact path="/beauty&wellness" element={<Product cat={"beauty & wellness"}/>}/>
          <Route exact path="/garden&outdoor" element={<Product cat={"garden & outdoor"}/>}/>
          <Route exact path="/clothing" element={<Product cat={"clothing"}/>}/>
          <Route exact path="/weddings" element={<Product cat={"weddings"}/>}/>
          <Route exact path="/sale" element={<Product cat={"sale"}/>}/>
          <Route exact path="/search" element={<Search/>}/>
          <Route exact path="/payment" element={<Payment/>}/>
          <Route exact path="/address" element={<Address/>}/>
          <Route exact path="/perfume" element={<Product cat={"perfume"}/>}/>
          <Route exact path="/outdoorpatiofurniture" element={<Product cat={"outdoor patio furniture"}/>}/>
          <Route exact path="/outdoordecor" element={<Product cat={"outdoor decor"}/>}/>
          
          

        </Routes>
        <Footer/>
      
    
   
    
     
    </div>
  )
}

export default App

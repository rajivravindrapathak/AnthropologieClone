 import React from 'react'
import './Footer.css'
import img1 from './location.png';
import img2 from './gmail.png';
import img3 from './pinterest.png';
import img4 from './instagram.png';
import img5 from './facebook.png';
import img6 from './twitter.png';
export const Footer = () => {
    const help = ["Track Your Order","Start A Return Or Exchange (US)", "Returns & Exchanges","Shipping","Customer Service","Customer Service","Current Promotions","Product Recalls","COVID-19 Update"];
    const about = ["Our Story","Events","A Greater Good","Diversity & Inclusion","Stories"];
    const service=["AnthroPerks","Gift Cards","Trade Membership","Furniture: Guides & Services","Store Pickup & Collection Points","Klarna"];
    const connect=["Contact Us","Stay Connected","Careers","Styling Services","Request A Catalog"];
  
  
  
    return (
    <div className="main">
        <div className="firstbox">
            <div className="firstbox1">
                <div className="emailbox">
                <p className="email">Sign up for Email</p>
                <p className="text">Receive early access to new arrivals, sales, exclusive content, events and much more!</p>
                </div>
                <div className="footer-submit">
                    <p className="address">Email Address*</p>
                    <div className="f-button">
                    <input type="email" className="input1"></input>
                    <button  className="btn" onClick={() => { alert('Got it! You have successfully signed up for email.');  }}>SUBMIT</button>
                    </div>
                </div>
            </div>
            <p className="text1">By signing up, you will receive Anthropologie offers, promotions and other commercial messages. You are also agreeing to Anthropologie’s <u >Privacy Policy</u>. You may unsubscribe at any time.</p>
        </div>
        <div className="secondbox">
            <div className="helpbox">
            <h5 className="helptext"> Help</h5>
             <div >
            
               <ul>
                   {help.map((e) =>{
                       return <li className="help">{e}</li>;
                   })}
               </ul>
             </div>
            </div>
            <div className="helpbox">
            <h5 className="helptext"> About Us</h5>
             <div >
            
               <ul>
                   {about.map((e) =>{
                       return <li className="help">{e}</li>;
                   })}
               </ul>
             </div>
            </div>
            <div className="helpbox">
            <h5 className="helptext"> Services</h5>
             <div >
            
               <ul>
                   {service .map((e) =>{
                       return <li className="help">{e}</li>;
                   })}
               </ul>
             </div>
            </div>
            <div className="helpbox">
            <h5 className="helptext"> Connect</h5>
             <div >
            
               <ul>
                   {connect .map((e) =>{
                       return <li className="help">{e}</li>;
                   })}
               </ul>
             </div>
            </div>
            <div className="helpbox">
                <div className="locate">
                <img src={img1} alt=""></img>
                <p className="store">Store Locator</p>
                </div>
                <div className="locate">
                <img src={img2} alt=""></img>
                <p className="store">Get Email</p>
                </div>
                </div>
                </div>
<div className="app">
                   
                       <img className="iphone" src="https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg" alt=""></img>
                       <img className="pin" src={img3}></img>
                       <img className="insta" src={img4}></img>
                       <img className="insta" src={img5}></img>
                       <img className="insta" src={img6}></img>
                
</div>
<div className="shine">
  <img  className="shine1"src="https://images.ctfassets.net/5de70he6op10/2Lh06CXT4AzVnj4LxvGsQD/a424e10a3b8c9e2e270dc22505bfbfa6/022421_SiteFooter_SMS_SIgnUp.jpg"></img>
</div>
<div className="country">
    <ul className="country1">
    <li>US</li>
    <li>France</li>
    <li>Germany</li>
    <li>UK</li>
    </ul>
</div>
<div className="ca">
    <ul className="ca1">
    <li>Privacy Policy</li>
    <li>Terms of Use</li>
    <li>CA Transparency</li>
    <li>Accessibility</li>
    <li>URBN.com</li>
    
    </ul>
    <p className="ca2"> For CA Residents</p>
    <p className="ca3">2022 URBN.com. All Rights Reserved.</p>
</div>
        </div>
  );
}

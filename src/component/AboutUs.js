import * as React from 'react';

import Button from '@mui/material/Button';
import Image from "../assets/image/member.jpeg";
import "./About.css";
import Service from "../assets/image/people.jpg"
import { Card, Col, Row } from 'antd';
import Service1 from "../assets/image/team.jpg";
import Service3 from "../assets/image/serv.jpg";
import Service4 from "../assets/image/imageste.jpg";
import Service5 from "../assets/image/commerce.jpg";
import Service6 from "../assets/image/comc.jpg";
import Product from "../assets/image/g.jpg";
import Product1 from "../assets/image/w.jpg";
import Product2 from "../assets/image/m.jpg";
import Product3 from "../assets/image/s.jpg";
import Product4 from "../assets/image/d.jpg";
import Product5 from "../assets/image/t.jpg";
import Product6 from "../assets/image/pexel.jpeg";
import Product7 from "../assets/image/nom.jpeg";
import Header from "../component/header";
import Footer from "../component/footer";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const About=() =>{
    return(
        <>
        <Header/>
        <div className='about-container'>
        <div className="Original">
            <h1 className='header-about'>Get All Original Product</h1>
            <h1 className="br-about">Browser By Categories</h1>
            <Button  sx={{backgroundColor:" darkgoldenrod",position:"relative",left:"35rem",fontSize:"1.2rem",color:"white",top:"10px"}}>Shop Now</Button>
            </div>

       
            
        </div>
       

            <h1 className="Our">Best Seller Product</h1>
            <div className="site-card-wrapper">
   
      <div className="crd">
        
        <Card  bordered={true} className="Card">
          <img src={Product} className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}>Product Name: Electricity</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",color:"black",fontSize:"1.2rem",marginLeft:"8rem"}}>Shop Now</Button>
        </Card>
        <Card  bordered={true} className="Card">
          <img src={Product1} className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}>Product Name: Women's Clothes</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>Shop Now</Button>
        </Card>
        <Card  bordered={true} className="Card">
          <img src={Product2} className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}>Product Name: Men's Clothes</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>Shop Now</Button>
        </Card>
      
        
        </div><br></br><br></br>
        <div className="carde">
        <Card  bordered={true} className="Card">
          <img src={Product3 } className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}>Product Name: Sports</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>Shop Now</Button>
        </Card>
        <Card  bordered={true} className="Card">
          <img src={Product4} className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}>Product Name: Decoration</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>Shop Now</Button>
        </Card>
        <Card  bordered={true} className="Card">
          <img src={Product5} className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}>Product Name: Babby's Toys</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>Shop Now</Button>
        </Card>
        </div>

        
      
   
  </div>
  <h1 className="Our">Our Team</h1>
            <div className="site-card-wrapper">
   
      <div className="crd">
        <Card  bordered={true} className="Card">
          <img src={Service} className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}> Name: Niyigena Claudine</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>FrontEnd Developer</Button>
        </Card>
        <Card  bordered={true} className="Card">
          <img src={Service1} className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}> Name: Uwase Yvone</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>Full stack Developer</Button>
        </Card>
        <Card  bordered={true} className="Card">
          <img src={Service3} className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}> Name: Stella Impuhwe </h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>Full Stack Developer</Button>
        </Card>
      
        
        </div><br></br>
        <div className="carde">
        <Card  bordered={true} className="Card">
          <img src={Service4 } className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}> Name: Dusengemungu Marie Elise</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>Full stackDeveloper</Button>
        </Card>
        <Card  bordered={true} className="Card">
          <img src={Service5} className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}> Name: Hyacintha Niyonizeye</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>FrontEnd Developer</Button>
        </Card>
        <Card  bordered={true} className="Card">
          <img src={ Service6} className="service"></img>
          <h1 style={{color:"black",fontSize:"16px"}}> Name: Aurore Iyokwizerwa</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>FullStack Developer</Button>
        </Card>
        
        </div><br></br>
        <div className='ct-about'>
        <Card  bordered={true} className="Carde">
          <img src={ Service6} className="services"></img>
          <h1 style={{color:"black",fontSize:"16px"}}> Name:Scott Brian</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>FullStack Developer</Button>
        </Card>
        <Card  bordered={true} className="Carde">
          <img src={Product6} className="services"></img>
          <h1 style={{color:"black",fontSize:"16px"}}> Name:Clemance IyoKwizerwa</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>Backend Developer</Button>
        </Card>
        <Card  bordered={true} className="Carde">
          <img src={ Product7} className="services"></img>
          <h1 style={{color:"black",fontSize:"16px"}}> Name:Habimana Neema</h1>
          <Button  sx={{backgroundColor:" darkgoldenrod",fontSize:"1.2rem",color:"black",marginLeft:"8rem",marginTop:"5px"}}>Ui/X Designer</Button>
        </Card>
        </div>
        

        <div>
        <h1 className="Our">Our Mission</h1>
        <h2 className='mission' >An e-commerce website is one that allows people to buy and sell physical goods,
           services, and digital products over the internet rather than at a brick-and-mortar location.<br></br> 
           Through an e-commerce website, a business can process orders, accept payments,&nbsp; 
          manage shipping and logistics, and provide customer service.
          Ecommerce or electronic commerce is the trading of goods and services on the internet.&nbsp;  
          It is your bustling city center &nbsp; 
          or brick-and-mortar shop translated into zeroes and ones on the internet superhighway 
          There are 3 key functions of e-Commerce  marketing, finance and supply chain &nbsp;  
          which sit outside the set-up of your store website. You can't do e-Commerce 
          without marketing your store, managing payments and managing deliveries. &nbsp; 
          Each of these functions of e-Commerce come with their own set of challenges.</h2>
  </div> 
  <div>
  <h1 className="Our">Our Vision</h1>
  <h2 className='mission'>The ecommerce giant's mission is summed up with the statement: “Making commerce better for everyone.”
  An e-commerce website is one that allows people to buy and sell physical goods,
           services, and digital products over the internet rather than at a brick-and-mortar location.<br></br> 
           Through an e-commerce website, a business can process orders, accept payments,&nbsp; 
          manage shipping and logistics, and provide customer service.
          Ecommerce or electronic commerce is the trading of goods and services on the internet.&nbsp;  
          It is your bustling city center &nbsp; 
          or brick-and-mortar shop translated into zeroes and ones on the internet superhighway 
          There are 3 key functions of e-Commerce  marketing, finance and supply chain &nbsp;  
          which sit outside the set-up of your store website. You can't do e-Commerce 
          without marketing your store, managing payments and managing deliveries. &nbsp; 
          Each of these functions of e-Commerce come with their own set of challenges.
  </h2>
    </div>   
    
    <h2 className='h2-about'>You can join Us using this link:</h2>

        <FacebookIcon sx={{fontSize:"5rem",marginLeft:"40rem",padding:"2px",background:"rgb(10, 10, 44)",color:"white",borderRadius:"50px"}}/>
        <InstagramIcon sx={{fontSize:"5rem",background:"red",marginLeft:"2rem",color:"white",borderRadius:"50px"}}/>
        <TwitterIcon sx={{fontSize:"5rem",background:"blue",marginLeft:"2rem",color:"white",borderRadius:"50px"}}/>
   
   
  </div>
  
 <Footer/>
        </>     
 
    );
};

export default About;
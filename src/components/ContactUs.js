import React from 'react';
import "./Contact.css"
import Footer from "../component/footer";
import Header from "../component/header";
import {Typography,Card,CardContent,Grid, TextField,Button} from "@material-ui/core";
import Saless from "../assets/image/salesss.avif"

function ContactUS(){
    return(
    <>
    <Header/>
    <div className='container2'>
    <h1 className='title'>Get In Touch with us</h1>
          <p className='text'>Ecommerce Rwanda is looking forward to assisting you in
           any query you may have about your shopping,Payment, order or Delivery,&nbsp;
          
           Returns, and Refunds.Please dont't hesitate to contact us during our working times. </p>
          
    </div> 
   <div className='ihg'>
    <Card style={{maxWidth:450,margin:"0 auto"}}>
      <CardContent>
      <form>
        <Grid container spacing={1} >
        <Grid xs={12} sm={6} item>
<TextField label="FirstName" placeholder='enter first name' variant='outlined' fullWidth required/>
        </Grid>
        <Grid xs={12} sm={6} item>
<TextField label="LastName" placeholder='enter last name' variant='outlined' fullWidth required/>
        </Grid>
       
        <Grid xs={12} item>
        <TextField type="email" label="Email" placeholder='enter Email' variant='outlined' fullWidth required/>
        </Grid>
        <Grid xs={12} item>
        <TextField type="number" label="Phone Number" placeholder='enter phone number' variant='outlined' fullWidth required/>
        </Grid>
        <Grid xs={12} item>
        <TextField label="Message" multiline rows={4} placeholder='Type your message here' variant='outlined' fullWidth required/>
        </Grid>
        <Grid xs={12} item>
        <Button type="submit" style={{background:"darkgoldenrod",color:"white"}}  color="white" fullWidth required>Submit</Button>
        </Grid>
        </Grid>
        </form>
      </CardContent>
    </Card>
    </div>
    
    <Footer />
</>
    )
}

export default ContactUS;
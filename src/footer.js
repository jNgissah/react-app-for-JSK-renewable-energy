import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Call from '@material-ui/icons/Call';
import Email from '@material-ui/icons/Email';
import LocationOn from '@material-ui/icons/LocationOn';
import WhatsApp from '@material-ui/icons/WhatsApp';

const useStyles=makeStyles((theme)=>({
    caro:{ 
        
      backgroundColor:'black',
      color:'white',
        padding:'50px',
       
    },
    back:{ 
        
      backgroundColor:'black',
      color:'gray',
        padding:'10px',
        fontSize:13
       
    }
}));




function Example(props){
    const classes=useStyles()
    return (
        
        <div className={classes.back}>
        <div className={classes.caro}>
        <Grid container spacing={8}>
        <Grid item xs={12} sm={5} md={5} >
         <h2 style={{textAlign:'left'}}> JSK Renewable Energy</h2>
        <Grid container spacing={5} style={{textAlign:'left'}}>
        <br/>
        
       
We specialize in the Waste-to-Energy sector in Ghana, with a vision to contribute to nation building through sustainable energy solutions for Heat production.
        </Grid>
        </Grid>
        <Grid item  xs={12} sm={3} md={3} >
    <h2 style={{textAlign:'left'}}> Quick Link</h2>
        
        
        <Grid container spacing={1} style={{textAlign:'center'}}>
        
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}}>
       Biomass
         </Grid>
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}}>
         Our Product
         </Grid>
        
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}}>
       Woodpallet
         </Grid>
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}}>
        email
         </Grid>
        </Grid>
    
        </Grid>
        
        
        
        <Grid item  xs={12} sm={4} md={4} >
        <h2 style={{textAlign:'left'}}> Contact Us</h2>
        
        <Grid container spacing={1} style={{textAlign:'left'}}>
         <Grid item xs={2} sm={1} md={1} style={{textAlign:'right', paddingBottom:'0px'}}>
        <WhatsApp/>
         </Grid>
        <Grid item xs={9} sm={11} md={11} style={{textAlign:'left', paddingTop:'6px'}}>
        <a href="https://wa.me/+233546330506/?text=Hi there, Welcome to JSK Renewable Energy. Please send your message"> WhatsApp Chat</a>
         </Grid><Grid item xs={2} sm={1} md={1} style={{textAlign:'right', paddingBottom:'0px'}}>
        <Email/>
         </Grid>
        <Grid item xs={9} sm={11} md={11} style={{textAlign:'left', paddingTop:'6px'}}>
        <a href='mailto:support@jskrenewable.com'>support@jskrenewable.com</a>
         </Grid><Grid item xs={2} sm={1} md={1} style={{textAlign:'right', paddingBottom:'0px'}}>
        <Call/>
         </Grid>
        <Grid item xs={9} sm={11} md={11} style={{textAlign:'left', paddingTop:'6px'}}>
         <a href='tel:+233 241879286'>+233 241879286 </a>
         </Grid><Grid item xs={2} sm={1} md={1} style={{textAlign:'right', paddingBottom:'0px'}}>
        <LocationOn/>
         </Grid>
        <Grid item xs={9} sm={11} md={11} style={{textAlign:'left', paddingTop:'6px'}}>
         <a href='https://goo.gl/maps/kuEJyQHjEerrqNYR7'>Sokoban WoodVillage, close to Angel City, Kumasi-Ghana</a>
         </Grid>
        </Grid>
    
        </Grid>
        
        

      </Grid>
 </div>
     <p style={{textAlign:'center'}}>
      Copyright 2021 JSK Renewable Energy all rights reserved <br/>
      Powered by <a  href="http://ravinlead.com">RavinLead Tech Hub</a>
</p>
        </div>
        
   
        
        
    

    )
}


export default Example



import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from './img/Engaging-an-AC-Compressor-Clutch.jpg'
import {makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Power from './img/electric.jpg';
import Power1 from './img/power.jpg';
import Grid from '@material-ui/core/Grid';
import { Parallax } from "react-parallax";
import Para1 from './img/img/img9.jpeg';
import Para2 from './img/slide2.jpeg';
import Para3 from './img/img/loader3.jpg';
import AOS from 'aos';
import "aos/dist/aos.css";


const insideStyles = {
//  background: "white",
  padding: "0%",
  position: "absolute",
  top: "49%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontSize:"272%",
  color:"white",
    textAlign:"center",
};    

const parallaxside={
     backgroundColor:"#63d471",
 backgroundImage: "linear-gradient(315deg, #2FA71B 0%, #0F6300 74%)",
    padding:20,
    color:"white",
    textAlign:"left"
    
    
 
    
}


const useStyles=makeStyles((theme)=>({

     root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '70%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
    
    
    
    caro:{ 
        
        backgroundRepeat: 'no-repeat', 
        backgroundImage: `url(${Image})`,
        backgroundSize:'cover',
        backgroundPosition:'center',  
        [theme.breakpoints.up('xs')]: {
        height:240,
            paddingTop: '15%'
    },   
      [theme.breakpoints.up('sm')]: {
      height:550,
          paddingTop: '15%'
         
    }
    }
}));





function Example(props)

{
     AOS.init({
    // initialise with other settings
    duration : 700
  });
//    const classes = useStyles();
    
  var items = [
        {
            name: "OUR PRODUCT",
            image: Para1,
            description: "We provide the best biomass wood pellet"
        },
        {
            name: "BIOMASS WOOD PELLET",
             image: Para3,
            description: "Our Pellets are highly efficient"
        },
        {
            name: "CHOOSE BIOMASS",
             image: Para2,
            description: "The best renewable energy"
        }
    ]

    return (
        <div>
        <Carousel swipe={true} touch={true} animation={"slide"} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>

    <br/>
    <br/>


    <Container  maxWidth="lg">
         <h2 data-aos="fade-up" className="MuiTypography-h4" style={{textAlign:"center"}}>
        Biomass Wood Pellet
            </h2>

<p style={{textAlign:"left"}} data-aos="fade-up">
            Excellent pellet quality is essential to attain a constant and optimal heating process. As different fuel qualities exist, it is essential for stove and boiler owners to choose the right quality fuel that fits best with their installations. If not adapted, ill-advised choices can not only lead to a loss of efficiency, but can also disturb the combustion process and/or complicate an appliance’s maintenance. This is particularly important on smaller boilers and stoves used in domestic properties as the tolerances involved are much lower than boilers with larger capacities.


            </p>
            <p style={{textAlign:"left"}} data-aos="fade-up">
                 wood pellet is very easy to manage compared to other biomass fuel. As the shape and hydrous rate are stable, wood pellet is suitable to use in automatic combustion installation and it can remarkably save time and labor for both of electric power generation boiler and pellet stove for house. It is possible to transport long distance because wood pellet has high energy density and much energy can be transported at once. Also wood pellet which is heat-treated, can be stored in long term with less risk for molding.
            </p>

 
        
        
</Container>

    
  <br/>
  <br/>
  <br/>



        <Grid container spacing={0} >
        
        <Grid item xs={12} sm={6} md={6} style={{textAlign:'left'}}>

            
           <Parallax bgImage={Power} strength={300}>
      <div style={{ height: 400 }}>
        <div style={insideStyles}>   </div>
      </div>
    </Parallax>  
            
            
            
         </Grid>




<Grid item xs={12} sm={6} md={6} style={parallaxside}>

          <h3 className="MuiTypography-h4"  style={{marginTop:28}} data-aos="fade-up">How are pellets used in power generation?</h3>
        <p className="MuiTypography-h6" style={{marginTop:'-29px'}}></p>
<br/>
            <p style={{marginBottom:18}} data-aos="fade-up">
            Biomass pellets can be used to generate power in a similar way to coal, allowing existing coal power stations to be transformed to use renewable bioenergy instead.

A conveyor system takes pellets from storage through to pulverising mills, where they are crushed into a fine powder that is then blown into the power station’s boiler. Here the biomass is combusted as fuel, the heat from this combustion is used to make steam which powers the generators that produce electricity.

Biomass pellets’ density and uniform shape also makes them easier to transport and store in large quantities. However, it is essential that they are kept dry while in transit and that when stored in biomass domes the atmospheric conditions are carefully monitored and controlled to prevent unwanted combustion.
            </p>
         </Grid> 

        </Grid>


        <Grid container spacing={0} >
        <Grid item xs={12} sm={6} md={6} style={parallaxside}>

          <h3 className="MuiTypography-h4"  style={{marginTop:35}} data-aos="fade-up">Why are pellets powerful?</h3>
       
<br/>
            <p style={{marginBottom:45}} data-aos="fade-up">
            The advantage of using biomass in the form of a pellet is its energy density. This refers to the amount of energy that can be stored in a given amount of a material.

On their own the wood and residues like wood chips and sawdust that make up biomass do not have a high energy density. A kilogram of wood, for example, stores little energy, compared to fuels like coal, diesel or uranium.

However, by compressing forest industry residues into a pellet, biomass becomes significantly more energy dense. Wood pellets can also have very low moisture content, giving them a high combustion efficiency – an important feature in power generation.
            </p>
         </Grid> 

        <Grid item xs={12} sm={6} md={6} style={{textAlign:'left'}}>

            
           <Parallax bgImage={Power1} strength={300}>
      <div style={{ height: 400 }}>
        <div style={insideStyles}>  </div>
      </div>
    </Parallax>  
            
            
            
         </Grid>
        </Grid>
            


            
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15852.715187970067!2d-1.6076919!3d6.6247003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7484da3476fe47a!2sJsk%20Renewable%20Energy%20Ltd!5e0!3m2!1sen!2sgh!4v1626316766707!5m2!1sen!2sgh" width="100%" height="400" style={{border:0, allowfullscreen:""}} title="location" loading="lazy"></iframe>

    </div>

      
    )
}

function Item(props)



{
    const classes=useStyles()
     return (
         
        <div className={classes.caro} style={{backgroundImage: `url(${props.item.image})`}}>
            <h1 style={{color:"white", fontSize:"40px", marginTop:30}} data-aos={"flip-right"}><span style={{backgroundColor:"rgba(0,255,0, 0.3)", paddingLeft:12, paddingRight:12}}>{props.item.name} </span></h1>
            <p style={{color:"white", fontSize:"20px"}} data-aos={"zoom-in"}>{props.item.description}</p>

          
        
        
        </div>
        
        

    )
}


export default Example



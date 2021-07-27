import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Green from './img/sustainable.jpg';
import Illus from './img/illus.jpg';
import Burn from './img/burn.jpg';
import Burner from './img/istockphoto-1201762864-612x612.jpg';
import Bg from './img/pellets_1.jpg';
import Energy from './img/energy.jpg';
import Use2 from './img/use2.jpg';
import Para0 from './img/about3.jpg';
import Para1 from './img/slide.jpeg';
import Para3 from './img/slide3.jpeg';
import Grid from '@material-ui/core/Grid';
import { Parallax } from "react-parallax";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import itemData from './data';
import Typography from '@material-ui/core/Typography';
import AOS from 'aos';
import "aos/dist/aos.css";

import ButtonBase from '@material-ui/core/ButtonBase';
import  {
  Link
} from 'react-router-dom';
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
    textAlign:'left'
    
    
}

const useStyles=makeStyles((theme)=>({
    image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 0,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },

    root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
    
    
    
    caro:{ 
        
        backgroundRepeat: 'no-repeat', 
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


const images = [
  {
    url: Burner,
    title: 'Cut Down Cost',
    width: '100%',
  }
];


function Example(props){
    AOS.init({
    // initialise with other settings
    duration : 700
  });
    const classes = useStyles();
    
    var items = [
        {
            name: "JSK RENEWABLE ENERGY",
            image: Para0,
            description: "Excellent pellet quality is essential to us"
        },  {
            name: "WE PRODUCE BIOMASS WOOD PELLET",
            image: Para3,
            description: "Our pellets are highly efficient"
        }, 
        {
            name: "BIOMASS ENERGY",
            image: Para1,
            description: "This is the best renewable energy"
        },
        
    ]

    return (
        
        <div>
        <Carousel swipe={true} touch={true} animation={"slide"} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    <div>
    <div  style={{textAlign:"left", marginTop:"50px", backgroundColor:""}}> 
<Grid container spacing={0} >
        <Grid item xs={12} sm={7} md={7} style={{textAlign:'left', backgroundColor:"white"}} >
<h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"center",color:"green", padding:"30px", marginTop:"40px"}}>
       DO YOU WANT TO CUT DOWN FUEL COST FOR YOUR BIOMASS BOILER PLANT OR COOKING STOVE?
            </h4>
            <p style={{color:"green", textAlign:"center", fontSize:"40px"}}></p>

         </Grid> 

        <Grid item xs={12} sm={5} md={5} style={{textAlign:'left'}}>
  <Link to="/contact">
            <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span data-aos={"zoom-in"}
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
</Link>            
            
         </Grid>
        </Grid>


    </div> 
<br/>
<br/>
<br/>
<Container  maxWidth="lg" style={{textAlign:"left"}}> 
            <h2 className="MuiTypography-h4" data-aos="fade-up" style={{textAlign:"center"}}>
        The Problem
            </h2>
<p style={{textAlign:"center", marginTop:"-25px", fontSize:"16px", color:"green"}}></p>
 <br/>
<p data-aos="fade-up">
 The use of fossil fuels in power and heat generation, cooking and transportation is taking a huge toll on the environment, human health and finance. At the same time, depleting fossil fuel levels are a reality of our future, and pose a significant threat in terms of energy security, especially for developing nations such as Ghana.
</p>
<br/>


<Grid container spacing={1} >
        <Grid item xs={12} sm={6} md={6} style={{textAlign:'left'}} >
            <img src={Illus} width='100%' data-aos="fade-right" alt="alt" /> 
            
            
            

         </Grid> 

        <Grid item xs={12} sm={6} md={6} style={{textAlign:'left'}} data-aos="fade-right">

            <Parallax bgImage={Burn} strength={250} >
      <div style={{ height: 310 }}>
        <div style={insideStyles} data-aos="fade-up" >Biomass Wood Pellet</div>
      </div>
    </Parallax>
             
            
            
            
         </Grid>
        </Grid>


    </Container> 
     
  <br/>
  <br/>
  <br/>
        
        
<Container  maxWidth="md" style={{textAlign:"left"}}> 
            <h2 className="MuiTypography-h4" style={{textAlign:"center"}} data-aos="fade-up">
        The Solution (Biomass Wood Pellet)
            </h2>

<p data-aos="fade-up" style={{textAlign:"center", marginTop:"-25px", fontSize:"16px", color:"green"}}>Benefits of using Biomass Wood Pellet</p>
<div data-aos="fade-up">
<b>HIGH EFFICIENCY </b> 
<p>
    The net energy content of wood pellet fuel is approximately 75% of the energy content of the same amount, by weight, of average quality steam coal. One ton of wood pellets has the same amount of energy as 3.4 barrels of crude oil or 18,000 cubic feet of natural gas.
</p>
<br/>

<b>LOW-COST RENEWABLE FUEL </b> 
<p>
    Limited capital expenditure is required to replace, or co-fire, coal with wood pellet fuel in existing coal-fired power plants. This makes it one of the lowest cost renewable fuels.
</p>
<br/>
<b>BASELOAD RENEWABLE FUEL </b> 
<p>
    Unlike wind, solar and other forms of intermittent renewable energy, wood pellets provide a dispatchable, uninterrupted source of power.
</p>
<br/>
<b>CARBON NEUTRAL </b> 
<p>
    Trees absorb carbon dioxide as they grow. This stored carbon dioxide is released when the biomass is burned to generate energy and is absorbed during forest regeneration. No new atmospheric carbon dioxide is produced under a sustainably managed forest system, and for every ton of coal that is replaced by wood pellets, there is a corresponding 1.7-ton reduction in carbon dioxide emissions.
</p>
</div>
    </Container> 
     
  <br/>
  <br/>
  <br/>

     
    </div>
<Container maxWidth="md">
         <h2 data-aos="fade-up" className="MuiTypography-h4" style={{textAlign:"center"}}>
        Application Of Biomass Wood Pellet
            </h2>


 <div className={classes.root} data-aos="fade-up">
      <ImageList rowHeight={300} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
         
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img} >
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
        
        
</Container>

    
  <br/>
  <br/>
  <br/>


        <Grid container spacing={0} >
        <Grid item xs={12} sm={6} md={6} style={parallaxside}>

          <h3 className="MuiTypography-h4"  style={{marginTop:80, color:'white'}} data-aos="fade-up">We Are JSK </h3>
        <p className="MuiTypography-h6" style={{marginTop:'-29px', color:'white'}}  data-aos="fade-up">Our Purpose</p>
            <p style={{marginBottom:80, color:'white'}} data-aos="fade-up">
            We exist to be the leading producers of Biomass wood pellet. We achieve this by producing reliable and quality wood pellets. As a renewable energy alterntive to fossil fuels, JSK indusatrial and domestic wood pellets are designed to provide consistent, reliable results for wide range of heat and power generating customers.
            </p>
         </Grid> 

        <Grid item xs={12} sm={6} md={6} style={{textAlign:'left'}}>

            
           <Parallax bgImage={Bg} strength={250}>
      <div style={{ height: 400 }}>
        <div style={insideStyles} data-aos="zoom-in">Biomass Eneregy</div>
      </div>
    </Parallax>  
            
            
            
         </Grid>
        </Grid>
            
<Container  maxWidth="lg" style={{textAlign:"left"}}>
    
   
    
   <Grid container spacing={4} style={{marginTop:80,marginBottom:80}}>
        <Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

            
            
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={Energy}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Wood Pellet Energy Value
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            One ton of wood pellets has the energy equivalency of +/- 500 l of heating oil! When used in high-efficiency wood pellet stoves and boilers, pellets typically offer combustion efficiency of over 85%
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> 
            
            
          
         </Grid> 




<Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

            
            
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={Use2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            How Pellets Are Used
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            It is a biomass product made of renewable substances – generally recycled wood waste. Wood pellets mainly used for heat, in freestanding stoves, fireplace inserts, furnaces, and boilers
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
     
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> 
            
            
          
         </Grid> 

        <Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

            
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={Green}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sustainable Energy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> 
            
            
            
            
            
         </Grid>
        </Grid> 
    
    
    
    
</Container>


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



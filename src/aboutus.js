import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from './img/Engaging-an-AC-Compressor-Clutch.jpg'
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Sustain from './img/sustainable.jpg';
import Responsible from './img/responsible.jpg';
import Commitment from './img/commitment.jpg';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Para2 from './img/img/loader1.jpg';
import Para1 from './img/about3.jpg';
import Ronak from './img/ronak.jpg';
import Mitul from './img/mitul.jpg';
import Appiah from './img/appiah.jpeg';
import Amit from './img/amit.jpeg';
import Avatar from '@material-ui/core/Avatar';
import AOS from 'aos';
import "aos/dist/aos.css";
import Typography from '@material-ui/core/Typography';



const parallaxside={ 
    backgroundColor:"#63d471",
    backgroundImage: "linear-gradient(315deg, #2FA71B 0%, #0F6300 74%)",
    padding:20,
    color:"white",
    textAlign:"left",
    
    
 
    
}


const useStyles=makeStyles((theme)=>({
    
     large:{
        
       [theme.breakpoints.up('xs')]: {
        width: theme.spacing(26),
        height: theme.spacing(26),
           marginLeft:'18%',
        },
       [theme.breakpoints.up('sm')]: {
        width: theme.spacing(26),
        height: theme.spacing(26),
           marginLeft:'15%',
        }
   
  },
 
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





function Example(props){
      AOS.init({
    // initialise with other settings
    duration : 700
  });
    const classes = useStyles();
    
   var items = [
        {
            name: "ABOUT US",
            image: Para1,
            description: "Our core purpose is to increase energy access in Ghana in a sustainable manner"
        },
        {
            name: "WE PROVIDE SUSTAINABLE ENERGY",
             image: Para2,
            description: "Get affordable Biomass Energy"
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
         <h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"center"}}>
        JSK Renewable Energy
            </h2>
<p style={{textAlign:"center", marginTop:"-25px", fontSize:"16px", color:"green"}} data-aos={"fade-up"}>Our core purpose is to increase energy access in Ghana in a sustainable manner</p>

<p style={{textAlign:"left"}} data-aos={"fade-up"}>
            Energy access is a key driver to create economic growth and help people from poverty into the mainstream economy. This objective needs to be acheived in a manner that is environmentally and financially sustainable, promotes energy independence and is good for local communities. JSKs mission is to find innovative solutions achieving all those objectives by combining knowledge from diverse disciplines and aligning efforts with local stakeholders. 

            </p>
            

 
        
        
</Container>


<br/>
<br/>


    <Container  maxWidth="lg">
         <h2 className="MuiTypography-h4" style={{textAlign:"center"}} data-aos={"fade-up"}>
        Our Core Values
            </h2>


<p >
            <Container  maxWidth="lg" style={{textAlign:"left"}}>
    
   
    
   <Grid container spacing={1} style={{marginTop:5,marginBottom:80}}>
        <Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}} data-aos={"fade-up"}>

            
            
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={Sustain}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sustainability
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We deliver solutions which are economically advantageous and up to the highest expectations of our customers and partners. 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card> 
            
            
          
         </Grid> 




<Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}} data-aos={"fade-up"}>

            
            
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={Responsible}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Responsibility
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We are higly responsible towards our natural environment and the well being of the people living in it. We see to it the our customers meet their expectations
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card> 
            
            
          
         </Grid> 

        <Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}} data-aos={"fade-up"}>

            
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={Commitment}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Commitment
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We commit to bring the best environmentally friendly technologies and to keep developing renewable energy solutions.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card> 
            
            
            
            
            
         </Grid>
        </Grid> 
    
    
    
    
</Container> 

            </p>
            

 
   <div>
            
           
         
    <Container  maxWidth="lg" style={{textAlign:"left"}}> 
            
        <h2 className="MuiTypography-h4" style={{textAlign:"center"}} data-aos={"fade-up"}>
        PROFILE
            </h2>
  <br/> 
  <br/> 

<Grid container spacing={1} >
       


 <Grid item xs={12} sm={3} md={3} style={{textAlign:'center'}} data-aos={"fade-up"}> 
                
            <Avatar alt="Remy Sharp" src={Mitul} className={classes.large} />
<Typography gutterBottom variant="h6" component="h2" data-aos={"fade-up"}>
            MITUL KUMAR PATEL
          </Typography>
<p style={{marginTop:"-12px", color:"grey"}} data-aos={"fade-up"}>
                    CHAIRMAN
</p>

        
         </Grid> 

 <Grid item xs={12} sm={3} md={3} style={{textAlign:'center'}} data-aos={"fade-up"}> 
                
            <Avatar alt="Remy Sharp" src={Ronak} className={classes.large} />
<Typography gutterBottom variant="h6" component="h2" data-aos={"fade-up"}>
            RONAK KUMAR PATEL
          </Typography>
<p style={{marginTop:"-12px", color:"grey"}} data-aos={"fade-up"}>
                    CHIEF EXECUTIVE OFFICER (CEO)
</p>

        
         </Grid> 



 <Grid item xs={12} sm={3} md={3} style={{textAlign:'center'}} data-aos={"fade-up"}> 
                
            <Avatar alt="Remy Sharp" src={Amit} className={classes.large} />
<Typography gutterBottom variant="h6" component="h2" data-aos={"fade-up"}>
            AMIT KUMAR PATEL
          </Typography>
<p style={{marginTop:"-12px", color:"grey"}} data-aos={"fade-up"}>
                    CHIEF FINANCIAL CONTROLLER
</p>

        
         </Grid> 



 <Grid item xs={12} sm={3} md={3} style={{textAlign:'center'}} data-aos={"fade-up"}> 
                
            <Avatar alt="Remy Sharp" src={Appiah} className={classes.large} />
<Typography gutterBottom variant="h6" component="h2" data-aos={"fade-up"}>
            EVANS K. APPIAH
          </Typography>
<p style={{marginTop:"-12px", color:"grey"}} data-aos={"fade-up"}>
                    MANAGING DIRECTOR (MD)
</p>

        
         </Grid> 




    </Grid>


    </Container> 
  
     
    </div>
     
        
</Container>

    
  <br/>
  <br/>
  <br/>


        <Grid container spacing={0} >
        <Grid item xs={12} sm={6} md={6} style={parallaxside}>

          <h3 className="MuiTypography-h4"  style={{marginTop:80}} data-aos={"fade-up"}>Our Mission</h3>
        <p className="MuiTypography-h6" style={{marginTop:'-29px'}}></p>
<br/>
            <p style={{marginBottom:80}} data-aos={"fade-up"}>
            JSK RENEWABLE ENERGY LTD is in business for the provision of clean renewable energy at 
affordable prices to consumers with the aim to become Africa’s first fully integrated Biomass 
Company through exceptional products, expert knowledge, and premium quality pellets. 
            </p>
         </Grid> 

        <Grid item xs={12} sm={6} md={6}  style={parallaxside}>

            <h3 className="MuiTypography-h4"  style={{marginTop:80}} data-aos={"fade-up"}>Our Vision</h3>
        <p className="MuiTypography-h6" style={{marginTop:'-29px'}}></p>
<br/>
            <p style={{marginBottom:80}} data-aos={"fade-up"}>
            To be a worldwide leading manufacturer of premium quality solid biofuel at a competitive price. 
            </p>
            
            
            
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



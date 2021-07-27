import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from './img/Engaging-an-AC-Compressor-Clutch.jpg'
import {makeStyles} from '@material-ui/core/styles';
import Para1 from './img/img/img5.jpeg';
import Para2 from './img/product2.jpg';
import AOS from 'aos';
import "aos/dist/aos.css";
//import itemData from './data';
//import ImageList from '@material-ui/core/ImageList';
//import ImageListItem from '@material-ui/core/ImageListItem';
import Images from './img';


const useStyles=makeStyles((theme)=>({

    root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
    imageList: {
    width: 500,
    height: 450,
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



function Example(){
      AOS.init({
    // initialise with other settings
    duration : 700
  });
//    const classes = useStyles();
    
     var items = [
        {
            name: "GALLERY",
            image: Para1,
            description: "We stay committed to our work"
        },
        {
            name: "WE SERVE OUR CLIENTS",
             image: Para2,
            description: "we provide the best of services to our clients"
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
        <br/>

 <Images/>
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



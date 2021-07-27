//import React from 'react';
import React from 'react';

import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
//import './materialize.css';
import './style.css';



import Main from './home';
import Contact from './contactus';
import About from './aboutus';
import Products from './product';
//import Profile from './profile';
import Footer from './footer';
import Logo from './logo.jpg';
import Gallery from './gallery';
import clsx from 'clsx';
//import welcome from './img/air-con-compressor-not-working-hero-image.jpg';
//import logo from './img/user2.jpg';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu_ from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
    displayer_small:{
        [theme.breakpoints.up('xs')]: {
        display:'flex',
        },
         [theme.breakpoints.up('sm')]: {
       display:'none',
        }
    },
    displayer_big:{
        [theme.breakpoints.up('xs')]: {
        display:'none',
        },
         [theme.breakpoints.up('sm')]: {
       display:'flex',
        }
    }
}));




const Menu = ()=>{
    
  const classes = useStyles();
  const [state, setState] = React.useState({top: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[<Link to="/">Home</Link>,<Link to="/products">Our Product</Link>, <Link to="/Gallery">Gallery</Link>, <Link to="/about">About Us</Link>, <Link to="/contact">Contact Us</Link>].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );


        
 
 console.log()     
        
        
        

    return(
        
        <Router>
        <nav className="white" role="navigation">
         <div className={classes.displayer_big}>
            <div className="nav-wrapper containe before" >
                <a href="index.html" className="brand-logo logo-container"> <img src={Logo} className="logo_img" alt="" /></a>
                <ul className="right hide-on-med-and-down">
        
                    
                    <li><Link to="/products">Our Product</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                
        <button  data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">
        
        </i></button> 
         </div>
         </div>
        
        <div>
       
        
        
        <div className={classes.displayer_small} style={{textAlign:'left', padding:10}}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><Menu_ /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
      <span style={{marginLeft:'24%'}}>
         <img src={Logo} className="logo_img_small" alt="" />
      </span>
    </div>
        
        
        
        </div>
        </nav>
        
        
       
        
        <Switch>
          <Route path="/products">
            <Products/>
          </Route> 
        
        <Route path="/about">
            <About />
          </Route>
        
        <Route path="/gallery">
            <Gallery />
          </Route> 
       
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
        
        
        
        <Footer/>
        </Router>
        
        
        
        
    )
    
}



export default Menu;
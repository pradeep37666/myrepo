import  React from 'react';
import Menu from './Menu';
import Banner from './Banner';
import Contact from './Contact';
import Shop from './Shop'

import {Route,Switch} from 'react-router-dom'
import Footer from './Footer';
import { BrowserRouter } from "react-router-dom";


const Allbody =()=>{


    return(
      <>
        <Menu/>
        
        <Switch>
           <Route exact path="/" component={Banner}/>
           <Route exact path="/Shop" component={Shop}/>
           <Route exact path="/Contact" component={Contact}/>
           
       </Switch>
       
      
      
      
       <Footer /> 
      </>
      
      
    )

}
export default Allbody;
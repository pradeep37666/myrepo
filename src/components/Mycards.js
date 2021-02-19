import React from 'react';
import './mycards.css';
import Card from './Card'
import s1 from "./myimage/s1.jpg";
import s2 from "./myimage/s2.jpg";
import s3 from "./myimage/s3.jpg";
import s4 from "./myimage/s4.jpg";
import s5 from "./myimage/s5.jpg";

const mycards = () => {
    const myData = [s1,s2,s3,s4,s5]
   
   
    return (
       <>
        <div className="card_heading_div"> <h3>Destination</h3></div>
        <div className="card_div">
            
            {myData.map( c => (<Card dta={c} />))}
               
               
               
               
            </div>
       </>
    )
}

export default mycards;


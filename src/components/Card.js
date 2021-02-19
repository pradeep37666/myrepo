import React from "react";
import "./card.css";

import "./Mycards";

function Card(props) {
    console.log(props.dta);
  return (
    <>
      <div className="card">
        <span className="offer">Special offer</span>
        <div className="imgBx">
          <img src={props.dta} alt="hello" />
        </div>
        <div className="bxContent">
            <button>check out</button>
        </div>
      </div>
    </>
  );
}

export default Card;

import React from "react";
import "./footer.css";
import footerdata from "./footerdata";

const Footer = () => {
  return (
    <>
      <div className="footer_div">
        {footerdata.map((c) => (
          <div className="footer_content">
            <h2>{c.heading}</h2>
            <ul id={c.social}>
              {c.heading_data.map((d) => (
                <li>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="copy">
        <p className="cp">all right are reserved | Angry Creative corporation 2021</p>
      </div>
    </>
  );
};

export default Footer;

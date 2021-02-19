import React from "react";
import ReactDOM from "react-dom";

import Allbody from "./components/Allbody";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Allbody />
  </BrowserRouter>,
  document.getElementById("root"),
);
import React from "react";
import ReactDOM from "react-dom";
// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
import "./assets/demo/demo.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";




document.getElementById("root").innerText =
  "The React app has not connected to the backend yet.";


axios
  .get("/api/checkuser")
  .then((response) => {
    console.log(
      "on refresh response.data.userDoc is =====",
      response.data.userDoc
    );
    ReactDOM.render(
      <Router>
        <App user={response.data.userDoc} />
      </Router>,
      document.getElementById("root")
    );
  })
  .catch((err) => {
    alert("backend not running or /checkuser route not defined !");
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

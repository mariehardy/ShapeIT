import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";


// document.getElementById("googleButton").innerText =
//   "this is google button";

// const responseGoogle = (response) => {
//   console.log(response);
// };

// ReactDOM.render(
//   <GoogleLogin
//     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     isSignedIn={true}
//     cookiePolicy={"single_host_origin"}
//   />,
//   document.getElementById("googleButton")
// );



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

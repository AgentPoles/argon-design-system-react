/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import Index from "views/Index.js";
// import Landing from "views/examples/Landing.js";
// import Login from "views/examples/Login.js";
// import Profile from "views/examples/Profile.js";
// import Register from "views/examples/Register.js";
import HomePage from "views/HomePage";
import MyProfile from "views/MyProfile";
import Ask from "views/Ask.js";
import FrontEnd from "views/Projects/Frontend";
import Backend from "views/Projects/Backend";
import Blockchain from "views/Projects/Blockchain";
import Engineering from "views/Projects/Engineering";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <HomePage {...props} />} />
      <Route path="/backend" exact render={(props) => <Backend {...props} />} />
      <Route
        path="/blockchain"
        exact
        render={(props) => <Blockchain {...props} />}
      />
      <Route
        path="/engineering"
        exact
        render={(props) => <Engineering {...props} />}
      />
      <Route
        path="/frontend"
        exact
        render={(props) => <FrontEnd {...props} />}
      />
      <Route
        path="/profile"
        exact
        render={(props) => <MyProfile {...props} />}
      />
      <Route path="/reachout" exact render={(props) => <Ask {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

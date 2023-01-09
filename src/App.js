
import React from "react";
//import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./component1/Home";
import Fetch from "./component1/Fetch";
import Profile from "./component1/Profile";
//import About from "./component/About";
//import Login from "./component/Login";
//import Signup from "./component/Signup";
// import Profile from "./component/Profile";
// import Vikesh from "./component/Vikesh";
import UserDetails from "./component1/UserDetails";
import Refactored from "./component1/Refactored";
const App = () => {
  return (
    <>
   < Refactored/>
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/fetch">
      <Fetch/>
      </Route>
      <Route  path="/UserDetails">
      <UserDetails/>
      </Route>

     
{/* 
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>*/}

      <Route path="/profile">
        <Profile />
      </Route>
      {/* <Route path="/vikesh">
        <Vikesh />
      </Route>  */}

    </Switch>
    </>
  );
};

export default App;
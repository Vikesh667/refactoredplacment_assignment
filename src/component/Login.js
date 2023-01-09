import React, { useState, useEffect } from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Header from "./Header";
import { NavLink } from "react-router-dom";
const Login = () => {
  const paperStyle = { padding: '30px 50px', width: 350, margin: "20px auto",
    backgroundColor:"#8ad9e9",
    justifyContent: "cnter" }

    const gridStyle={display:"flex",flexDirection:"column",
    justifyContent:"center",
    alignItem:"center"}


    const [input, setInput] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));

    const user = userData.find((user) => user.username === input.username);
    if (user) {
      if (user.password === input.password) {
        alert("login successfull");
      } else {
        alert("invalid password");
      }
    } else {
      alert("User undefined");
    }
    setInput("");
  };
  return(
    <Grid>
      <Paper style={paperStyle}>
        <Grid  align="center">

        <Avatar>
          V
        </Avatar>
        </Grid>
        <Grid style={gridStyle}>
          <form action="">
        <label htmlFor="email">Email</label>
        <input
              name="username"
              value={input.username}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
        />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" 
        placeholder="Enter your password"
        value={input.password}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
        />
        <br/>
        <div style={{display:"flex",justifyContent:"center"}}>
        <p>
              Didn't have an account?<NavLink to="/Registration">Register</NavLink>
            </p>
        <button >Login</button>
        </div>
        </form>
        </Grid>
      </Paper>
      
    </Grid>
  );
};
export default Login
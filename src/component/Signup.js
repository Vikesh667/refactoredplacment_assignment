import React, { useEffect, useState } from 'react'
import { FaUsers } from "react-icons/fa";
import { MdOutlineMail,MdPassword } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { Grid, Paper, Avatar, Typography,Button} from '@material-ui/core'


const getLocalItems=()=>{
    let list=localStorage.getItem("list")
 
    if(list){
        return JSON.parse(localStorage.getItem("list"))
    }else{
        return []
    }
}
const Signup = () => {

    const [userRegister, setUserRegister] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password:""
        
    })
    const [recod, setRecods] = useState(getLocalItems)
    const[formErrors,setFormErros]=useState({})
    const[isSubmit,setIsSubmit]=useState(false)

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)
        setUserRegister({ ...userRegister, [name]: value })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userRegister.username==="" && userRegister.email==="" && userRegister.phone==="" && userRegister.password==="" ){
        setIsSubmit(false)
        } else if(userRegister.username!=="" && userRegister.email!=="" && userRegister.phone!=="" && userRegister.password!==""){

       
        const newUser = { ...userRegister, id: new Date().getTime().toString() }
        setRecods([...recod, newUser])
        setUserRegister({ username: "", email: "", password: "", phone: "" })
        setFormErros(validate(userRegister))
        setIsSubmit(true)

        }
        localStorage.setItem("list",JSON.stringify(recod))
    }

    useEffect(()=>{
      if(Object.keys(formErrors).length===0 && isSubmit){
        console.log(userRegister)
      }
    },[formErrors])

    const validate =(values)=>{
        const errors={}
        const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        const passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
        if(!values.username){
            errors.username="Username is required!"
        }else if(values.username.split("").length<3 ){
            errors.username="Name is to sort"
        }
        if(!values.email){
            errors.email="Email is required!"
        }else if(!regex.test(values.email)){
            errors.email="Please enter a valid email"
        }
        if(!values.phone){
            errors.phone="Phone is required!"
        } else if(!values.phone.match(phoneno)){
              errors.phone="Phone number should be only 10 digit"
        }
        if(!values.password){
            errors.password="Password is required!"
        }else if(!values.password.match(passw)){
            errors.password="Invalid password"
        }
        if(!values.confirm_password){
            errors.confirm_password="Please confirm your password"
        }else if(values.password!==values.confirm_password){
            errors.confirm_password="Password don't match"
        }
        return errors;
    }
    const paperStyle = {
        padding: '30px 50px', width: 350, margin: "20px auto",
        backgroundColor: "#8ad9e9",
        justifyContent: "cnter"
    }
    const headerStyle = { margin: 0, display: "flex", flexDirection: "column" }
    const lableStyle = { fontSize: "15px", color: "black" }
    const inputStyle = { width: "250px", height: "26px", outline: "none", borderRadius: "5px" }
    return (
        <Grid >
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar>
                    
                    </Avatar>
                    <h2 style={headerStyle}>SignUp</h2>
                    <Typography gutterBottom>
                        Please fill this form to create an acount!
                    </Typography>

                    <form action=""
                        onSubmit={handleSubmit}
                        className='div-con'>
                        <div style={{
                            display: "flex", flexDirection: "column",
                            justifyContent: "center"
                        }}>
                            <div className='label '>
                                <label htmlFor="username"
                                    style={lableStyle}
                                ><FaUsers />Fullname</label> <br />
                                <input type="text" placeholder='Enter your name'
                                    style={inputStyle}
                                    value={userRegister.username}
                                    
                                    onChange={handleInput}
                                    name="username" id="username" />
                            </div>
                            <p style={{color:"red",fontSize:"15px"}}>{formErrors.username}</p>
                            <br />
                            <div className='label '>
                                <label htmlFor="email"
                                    style={lableStyle}
                                >
                                    
                                    <MdOutlineMail/> Email</label><br />
                                <input type="text"  placeholder='Enter your email'
                                    style={inputStyle}
                                    value={userRegister.email}
                                
                                    onChange={handleInput}
                                    name="email" id="email" />
                            </div>
                            <p style={{color:"red",fontSize:"15px"}}>{formErrors.email}</p>
                            <br />
                            <div className='label '>
                                <label htmlFor="phone"
                                    style={lableStyle}><AiFillPhone/>Phone</label><br />

                                <input type="text" placeholder='Enter your phone number'
                                    style={inputStyle}
                                    value={userRegister.phone}
                                    
                                    onChange={handleInput}
                                    name="phone" id="phone" />
                            </div>
                            <p style={{color:"red",fontSize:"15px"}}>{formErrors.phone}</p>
                            <br />
                            <div className='label '>
                                <label htmlFor="password"
                                    style={lableStyle}
                                ><MdPassword/>Password</label><br />

                                <input type="password" placeholder='Enter your password'
                                    style={inputStyle}
                                    value={userRegister.password}
                                    
                                    onChange={handleInput}
                                    name="password" id="password" />
                            </div>
                            <p style={{color:"red",fontSize:"15px"}}>{formErrors.password}</p>
                            <br />
                            <div className='label '>
                                <label htmlFor="password"
                                    style={lableStyle}
                                >Confirm Password</label><br />

                                <input type="password" placeholder='Enter your confirm password'
                                    style={inputStyle}
                                    value={userRegister.confirm_password}
                                    
                                    onChange={handleInput}
                                    name="confirm_password" id="confirm_password" />
                            </div>
                            <p style={{color:"red",fontSize:"15px"}}>{formErrors.confirm_password}</p>
                            <br />

                            <Button type='submit' variant='contained'  color='primary'>Registration</Button>
                        </div>
                    </form>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default Signup

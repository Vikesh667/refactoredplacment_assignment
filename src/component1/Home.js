import React from 'react'
//import {Grid,Paper} from "@material-ui/core"
import {NavLink} from 'react-router-dom'
import { TiUserDelete} from 'react-icons/ti';
import Delete from './Delete';
import { HiOutlineUserGroup} from 'react-icons/hi';
import Fetch from './Fetch'
import UserDetails from './UserDetails';
import './Refactored.css'
const Home = () => {
  return (
   <nav className='main-home'>
    <div className='header'>
      <h1>Home Page</h1>
    </div>
    <div className='home1'>
    <ul>
      <li className='li-btn'>
        
        <button className='btn'><Fetch /></button>
      </li>
      <li>
         <button className='btn1'><Delete/></button>
      </li>
      <li>
        <NavLink to ='/userdetails'><HiOutlineUserGroup/>
         user details
        </NavLink>
      </li>
    </ul>
    <div>
   
    </div>
    </div>
   </nav>
  )
}

export default Home

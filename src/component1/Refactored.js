import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Refactored.css'
import { AiFillHome} from 'react-icons/ai';
import { CgProfile} from 'react-icons/cg';
const Refactored = () => {
   
    return (
        <>
        <nav className='main-nav'>
            <div className='logo'>
                <NavLink to='/'>
                    <h1>Vikesh</h1>
                </NavLink>
            </div>
            <div className='menu-link'>
                <ul>
                    <li>
                        <NavLink to='/'><AiFillHome/></NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='/fetch'>fetch</NavLink>
                    </li>
                    <li>
                        <NavLink to='/delete'>delete user</NavLink>
                    </li>
                    */}
                    <li>
                        <NavLink to='/userdetails'>user details</NavLink>
                    </li> 
                </ul>

            </div>
            <div className='profile'>
                
                <NavLink to='/profile'>
                <CgProfile/> 
                </NavLink>
            </div>
        </nav>
        
        </>
    )
}

export default Refactored

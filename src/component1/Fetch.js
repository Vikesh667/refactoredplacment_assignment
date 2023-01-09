
import React,{useEffect, useState} from 'react'
import UserDetails from './UserDetails';
import { TiUserDelete} from 'react-icons/ti';
import { SiFarfetch} from 'react-icons/si';
const Fetch = () => {
  const[articles,setArticles]=useState([])
 const apiGet=()=>{
  fetch("https://randomuser.me/api/?results=100")
    .then((res)=>res.json())
    .then((data)=>{
      localStorage.setItem('posts',JSON.stringify(data))
      setArticles(data)
      console.log(data)
      alert("data fetch succses ")
    })
 }
 useEffect(()=>{
  apiGet()
 },[])
    
   
  return (
    <div>
      
     
     <button onClick={apiGet}><SiFarfetch/>Fetch</button>
           
          
    </div>
  )
}

export default Fetch

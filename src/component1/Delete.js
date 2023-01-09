import React, { useEffect, useState } from 'react'
import { TiUserDelete} from 'react-icons/ti';
const Delete = () => {
  const[data,setData]=useState([])
  const handleDelete=()=>{
    try{
      localStorage.removeItem("posts")
      setData([])
      alert("The data deleted from localstorage succusesfully")
    }catch(error){
      console.log(error)
    }
  }
 
  return (
    <div>
      <button onClick={()=>handleDelete()}><TiUserDelete/>Delete</button>
    </div>
  )
}

export default Delete

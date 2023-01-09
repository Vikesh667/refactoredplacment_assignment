import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import axios from "axios";
import Pagination from './Pagination';
const UserDetails = () => {
  const[posts,setPost]=useState([])
  const[loading,setLoading]=useState(false)
  const[currentPage,setCurrentPage]=useState(1)
  const[postsPerPage]=useState(10)
 useEffect(()=>{
  const fetchPosts= async()=>{
    setLoading(true)
    const res=await axios.get("https://jsonplaceholder.typicode.com/comments")
    setPost(res.data)
    setLoading(false)
    
  }
  fetchPosts()
 },[])

 const indexOfLastPost=currentPage*postsPerPage
 const indexOfFirstPost=indexOfLastPost-postsPerPage
 const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)

 const paginate=(pageNumber)=> setCurrentPage(pageNumber)
 

  return (
    <div>
     <Posts posts={currentPosts} loading={loading}/>
     <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default UserDetails

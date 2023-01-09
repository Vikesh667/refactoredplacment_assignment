import React from 'react'

const Posts = ({posts,loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
  return  <table>
      <th>Id</th>
      <th>PostId</th>
      <th>Name</th>
      <th>Email</th>
      

      {
        posts.map((post)=>{
            return(
                <tr key={(post.id)}>
                    <th>{post.id}</th>
                    <th >{post.postId}</th>
                    <th>{post.name}</th>
                    <th>{post.email}</th>
                    <th></th>
                </tr>
            )
        })
      }
  </table>
}

export default Posts

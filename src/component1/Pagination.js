import React from 'react'

const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <nav style={{display:"flex",flexDirection:"row"}}>
      {/* {pageNumbers.map(number=>(
          <li key={number} style={{display:"flex",flexDirection:"row"}}>
            <a onClick={()=>paginate(number)} href="!#" >
                {number}
            </a>
             </li>
      ))} */}


      {
        pageNumbers.map((number)=>{
            return(
                <li key={number.id}>
                  <button onClick={()=>paginate(number)}  style={{marginInline:"2px",width:"20px"}}>{number}</button>
                </li>
            )
        })
      }
    </nav>
  )
}

export default Pagination

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
function Product() {
    const fetchData=localStorage.getItem('dataaas')
    console.log('fetcheddataaa',fetchData)
    const {id}=useParams();
    const SingleProduct=()=>{
        
    }
  return (
    <div>Single Product page...</div>
  )
}

export default Product
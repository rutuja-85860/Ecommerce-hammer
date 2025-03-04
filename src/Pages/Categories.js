import React from 'react'
import '../css/Categories.css';
import Top from '../Components/Top';
const Categories = () => {
  return (
    <div className='container'>
      <div className='cont-in1'>
        <h1>Top Categories</h1>
      </div>
      <div className='cont-in2'>
        <Top/>
      </div>
    </div>
  )
}

export default Categories;

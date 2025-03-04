import React from 'react';
import Cards from '../Components/Cards';
import '../css/Products.css';
const Products = () => {
  return (
    <div className='top-product'>
   <div className='tag'>
    <h2>Top selling</h2>
   </div>
   <div className='cards'>
    <Cards/> 
      </div>
    </div>
  )
}

export default Products;

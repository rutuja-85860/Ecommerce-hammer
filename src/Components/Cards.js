import React from 'react'
import '../css/Products.css';
import Pic1 from '../Images/out1.webp';
import Pic2 from '../Images/out2.webp';
import Pic3 from '../Images/out3.webp';
import pic4 from '../Images/out4.webp';
const Cards = () => {
  return (
    <div className='items'>
      <div className='content'>
      <div className='outer1'>
        <div className='pic1'>
        <img src={Pic1} class="d-block w-100" alt="..."/>
        </div>
        <div className='inner1'>
          <h3>Airflow Plus</h3>
          <p>Sale Price:Rs. 799.00<br/> Regular priceRs. 4,999.00<br/>13mm Drivers | Bluetooth v5.1</p>
          <button>Buy it Now</button> 
        </div>
      </div>
      <div className='outer2'>
      <div className='pic2'>
      <img src={Pic2} class="d-block w-100" alt="..."/>
      </div>
      <div className='inner2'>
      <h3>Ace 2.0</h3>
          <p>Sale Price:Rs. 1,299.00 <br/> Regular priceRs. 3,999.00<br/>BT Calling | 1.83" TFT Display</p>
          <button>Buy it Now</button> 
      </div>
      </div>
      <div className='outer3'>
      <div className='pic3'>
      <img src={Pic3} class="d-block w-100" alt="..."/>
      </div>
      <div className='inner3'>
      <h3>Bash 2.0 </h3>
          <p>Sale Price:Rs. 2,499.00 <br/>  Regular priceRs. 8,245.00<br/>Wireless | 40mm Sound Drivers1</p>
          <button>Buy it Now</button> 
      </div>
      </div>
      <div className='outer4'>
      <div className='pic4'>
      <img src={pic4} class="d-block w-100" alt="..."/>
      </div>
      <div className='inner4'>
        <h3>Gan Charger 65W</h3>
          <p>Sale Price:Rs. 1,799.00 <br/>Regular priceRs. 7,999.00 <br/>65W Output | Fast Charging</p>
          <button>Buy it Now</button> </div>
      </div>
      </div>
    </div>
  )
}

export default Cards;

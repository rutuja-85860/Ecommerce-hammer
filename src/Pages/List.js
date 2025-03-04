import React from 'react'
import Pictures from '../Components/Pictures';
import '../css/List.css';
import image1 from '../Images/img1.webp';
import image2 from '../Images/img2.webp';
import image3 from '../Images/img3.webp';
import picture1 from '../Images/L1.webp';
import picture2 from '../Images/L2.webp';
import picture3 from '../Images/L3.webp';
import Cardimg1 from '../Images/c1.webp';
import Cardimg2 from '../Images/c2.webp';
import Cardimg3 from '../Images/c3.webp';
import Cardimg4 from '../Images/c4.webp';
import Imgs1 from '../Images/A1.webp';
import Imgs2 from '../Images/A2.webp';
import Imgs3 from '../Images/A3.webp';
import Imgs4 from '../Images/A4.webp';
import imgs5 from '../Images/R1.webp';
import imgs6 from '../Images/R2.webp';
import imgs7 from '../Images/R3.webp';
import imgs8 from '../Images/R4.webp';

const List = () => {
  return (
    
    <div className='header'>
      <div className='title'>
      <h1>Hammer Grab List</h1>
      </div>
      <ul className='d-flex ' style={{listStyle:"none",}}>
           
            <li>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">New Launches
                <span className='item-line1'></span>
                </button>
           
            </li>
            <li>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" class="active" aria-current="true" aria-label="Slide 2">Best sellers
                <span className='item-line2'></span>
                </button>
            </li>
            <li>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" class="active" aria-current="true" aria-label="Slide 3">Budget Buys
                <span className='item-line3'></span>
                </button>
            </li>
            
        </ul>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
      
    
  <div class="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    
  </div>
      <div className='images'>
      <div>
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
    <div className='box1'>
      <div className='left1'>
        
        <img src={picture1} class="d-block w-100" alt="..."/></div>
      <div className='right1'>
      
         <div className='card1'> 
        <img src={Cardimg1} class="d-block w-100" alt="..."/>
        </div>
        <div className='card2' >
        <img src={Cardimg2} class="d-block w-100" alt="..."/>
        </div>
        <div className='card3'>
        <img src={Cardimg3} class="d-block w-100" alt="..."/>
        </div>
        <div className='card4'>
          <img src={Cardimg4} class="d-block w-100" alt="..."/>
        </div> 
      </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className='box2'>
              <div className='left2'>
         
  <img src={picture2} class="d-block w-100" alt="..." /></div>
              <div className='right2'>
                <div className='c1'>
                  <img  src={imgs5} class="d-block w-100" alt="..." />
                </div>
                <div className='c2' >
                  <img style={{borderRadius:"30px"}} src={imgs6} class="d-block w-100" alt="..." />
                 
                </div>
                <div className='c3'>
                  <img src={imgs7} class="d-block w-100" alt="..." />
                </div>
                <div className='c4'>
                  <img style={{borderRadius:"30px"}}src={imgs8} class="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
    </div>
    <div class="carousel-item">
    <div className='box3'>
    <div className='left3'>
      <img src={picture3} class="d-block w-100" alt="..."/></div>
      <div className='right3'>
      <div className='c1'>
        <img src={Imgs1} class="d-block w-100" alt="..."/>
        </div>
        <div className='c2' >
        <img style={{borderRadius:"30px"}} src={Imgs2} class="d-block w-100" alt="..."/>
        </div>
        <div className='c3'>
        <img src={Imgs3} class="d-block w-100" alt="..."/>
        </div>
        <div className='c4'>
          <img style={{borderRadius:"30px"}} src={Imgs4} class="d-block w-100" alt="..."/>
        </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>        
    
      </div>
    </div>
    </div>
  )
}

export default List;

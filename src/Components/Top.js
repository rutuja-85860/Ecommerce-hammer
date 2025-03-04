import React from 'react'
import '../css/Categories.css';
import Pic1 from '../Images/Topimg1.webp';
import Pic2 from '../Images/topimg2.webp';
import Pic3 from '../Images/topimg3.webp';
import Pic4 from '../Images/topimg4.webp';
const Top = () => {
  return (
    <div>
  <ul className='d-flex ' style={{listStyle:"none"}}>
           
            <li>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">Smart Watches
                <span className='item-line1'></span>
                </button>
           
            </li>
            <li>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" class="active" aria-current="true" aria-label="Slide 2">Headphones
                <span className='item-line2'></span>
                </button>
            </li>
            <li>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" class="active" aria-current="true" aria-label="Slide 3">Electric Toothbrushes
                <span className='item-line3'></span>
                </button>
            </li>
            <li>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" class="active" aria-current="true" aria-label="Slide 4">True Wireless Earbuds
                <span className='item-line4'></span>
                </button>
            </li>
        </ul>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
      
    
  <div class="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={Pic1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Bluetooth Calling SmartWatch</h5>
        <button>Buy Now</button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Pic2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Hammer Bluetooth Headphones</h5>
        <button>Buy Now</button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Pic3} class="d-block w-100" alt="..."/>
      <div  class=" carousel-caption d-none d-md-block">
        <h5 style={{color:"black", textAlign:"center", marginLeft:"40px"}}>Hammer Electric Toothbrush</h5>
        <button>Buy Now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Pic4}class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Hammer True Wireless Earbuds</h5>
        <button>Buy Now</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Top;

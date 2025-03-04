import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import Logoimg from '../Images/logo.avif';
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div className='logo'>
  <img src={Logoimg} class="d-block w-100" alt="..."/></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page"to="/" >Home</Link>
        <Link class="nav-link" href="#" to="/Products">Products</Link>
        <Link class="nav-link" href="#" to="/Categories">Categories</Link>
        <Link class="nav-link" href="#" to="/List">List</Link>
        <Link class="nav-link" href="#" to="/Collection">Collection</Link>
        <Link class="nav-link" href="#" to="/Quality">Quality</Link>
        <Link class="nav-link" href="#" to="/Contact">Contact</Link>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;

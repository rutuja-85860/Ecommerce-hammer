import React from 'react'
import Navbar from '../src/Components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Categories from './Pages/Categories';
import List from './Pages/List';
import Collection from './Pages/Collection';
import Quality from './Pages/Quality';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
  <>
    <BrowserRouter>
 <Navbar/>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/Categories' element={<Categories/>}/>
    <Route path='/List' element={<List/>}/>
    <Route path='/Collection' element={<Collection/>}/>
    <Route path='/Quality' element={<Quality/>}/>
    <Route path='/Contact' element={<Contact/>}/>

 </Routes>
 
 
 </BrowserRouter>
 </>
  
  )
}

export default App;

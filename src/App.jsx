import { Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'

function App() {
  

  return (
    <>
    
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/wishlist' element={<Wishlist/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/view/:id' element={<View/>}/>
  <Route path='/*' element={<Navigate to={"/"}/>}/>
</Routes>
    <Footer/>
      
    </>
  )
}

export default App

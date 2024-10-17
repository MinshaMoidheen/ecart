import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../Redux/Slice/productSlice';


function Header({insideHome}) {
  const {wishlist}=useSelector((state)=>state.wishListReducer)
  const cart=useSelector((state)=>state.cartReducer)

const[wishlistCount,setwishlistCount]=useState(0)
const[cartCount,setCartCount]=useState(0)

  const dispatch=useDispatch()

  useEffect(()=>{
setwishlistCount(wishlist?.length)
setCartCount(cart?.length)
  },[wishlist,cart])
  return (
    <div>
      <Navbar expand="lg" className="bg-dark text-white">
      <Container>
        <Navbar.Brand href="#home" style={{color:"white"}}>E-Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

        {insideHome&&<Nav.Link >
              <input type="text" style={{width:"500px"}} className='form-control' placeholder='Enter the product name to search'  
              onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} />
              </Nav.Link>}
            <Nav.Link className='btn ' >
                <Link to={'/wishlist'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>
                <i class="fa-solid fa-heart text-danger"></i>Wishlist
                <Badge bg="secondary">{wishlistCount}</Badge>
                </Link>
                </Nav.Link>

                <Nav.Link className='btn  ms-2'>
                <Link to={'/cart'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>
                <i class="fa-solid fa-cart-shopping text-warning"></i>Cart
                <Badge bg="secondary">{cartCount}</Badge>
                </Link>
                </Nav.Link>
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header

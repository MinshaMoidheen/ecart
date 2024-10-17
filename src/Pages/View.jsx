
import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishList } from '../Redux/Slice/wishListSlice'
import { addToCart } from '../Redux/Slice/cartSlice'
import Header from '../Components/Header'




function View() {

  const{id}=useParams()

  const[product,setProduct]=useState({})
  const {loading}=useSelector((state)=>state.productReducer)

  const dispatch=useDispatch()

  console.log(id)

  const {wishlist}=useSelector((state)=>state.wishListReducer)
  const cart=useSelector((state)=>state.cartReducer)



  useEffect(()=>{
    const products=JSON.parse(localStorage.getItem('products'))
    setProduct(products?.find(product=>product.id==id))
  },[])


  const handleWishList=(product)=>{
    const existingProduct=wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Already exist")
    }
    else{
      dispatch(addToWishList(product))
    }
  }

  console.log(product);

  const handleCart = (product) => {
    const existingProduct = cart?.find(item => item.id === product.id);
    
    if (existingProduct) {
      dispatch(addToCart(product));
      alert("Item added");
    } else {
      dispatch(addToCart(product));
      alert("Item added successfully");
    }
  };
  


  return (
    <>
    <Header/>
    <div className="mt-5">
      {
        loading?<div className='text-center mt-3 mb-5 fw-bolder'>
        <Spinner animation="border" variant="primary" /> Loading.....
      </div>:
        <div className='container row' style={{marginTop:"100px",marginBottom:"60px"}}>
      <div className="col-lg-4">
<img style={{width:"100%",height:"400px"}} src={product?.thumbnail} alt="" />
      </div>
      <div className="col-lg-2">

      </div>
      <div className="col-lg-6">
        <p>Pid:{product?.id}</p>
        <h1>{product?.title}</h1>
        <h5 className='fw-bolder'>Price: <span style={{color:"red"}}>${product?.price}</span></h5>

<p>{product?.description}</p>
        <div className="d-flex justify-content-between mt-4">
          <Button onClick={()=>handleWishList(product)} className="btn btn-outline-dark">
          <i class="fa-solid fa-heart text-danger"  ></i>Wishlist
          </Button>
          <Button onClick={()=>handleCart(product)} className="btn btn-outline-dark">
          <i class="fa-solid fa-cart-shopping text-danger"></i>Cart
          </Button>
        </div>
      </div>
    </div>
      }
    </div>
    </>
    
  )
}

export default View

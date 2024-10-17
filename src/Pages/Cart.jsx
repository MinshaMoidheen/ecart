import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Redux/Slice/cartSlice'
import Header from '../Components/Header'


function Cart() {

  const cart=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()
  const [total,setTotal]=useState(0)

  useEffect(()=>{
    if(cart?.length>0){
      setTotal(cart?.map(product=>product.totalPrice).reduce((p1,p2)=>p1+p2))

    }
    else{
      setTotal(0)
    }
  },[cart])


  return (
    

    <>
    <Header/>
    <div className='container' style={{marginTop:"80px",marginBottom:"50px"}}>
      {
        cart?.length>0?
        <div className="row mt-5">
        <div className="col-lg-8">

    <table className='table shadow'>

  <thead>
    <tr>
      <th>SI No</th>
      <th>Title</th>
      <th>Image</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {cart?.map((product,index)=>(
      <tr>
      <td>{index+1}</td>
      <td>{product?.title}</td>
      <td><img style={{width:"300px", height:"150px"}} src={product?.thumbnail} alt="" />
      </td>
      <td><input type="text" value={product?.quantity} style={{width:"25px"}} readOnly /></td>
      <td>${product.totalPrice}</td>
      <td><button className='btn' onClick={()=>dispatch(removeFromCart(product?.id))}><i class='fa-solid fa-trash text-danger'></i></button></td>
    </tr>
    ))}
  </tbody>
      </table>
<div className="d-flex justify-content-between">
  <button className='btn btn-danger'  onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
  <Link to={'/'}  style={{textDecoration:"none"}} className='btn btn-success'>Shop-More</Link>

</div>


        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className="container border rounded shadow mt-5 p-5 w-100">
            <h1>Cart Summary</h1>
            <h4>Total Products:{cart?.length}</h4>
            <h5>Total: <span className='text-danger fw-bolder'>${total}</span></h5>
          </div>
          <div className="d-grid">
            <button className="btn btn-success m-3 rounded">Checkout</button>
          </div>
        </div>
      </div>:<div className='d-flex align-items-center mt-5 mb-5'>

<img src="data:image/jpeg;base64,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TW9GWcNywk1o0l365WLmDj9fafHqr5c3T48+jbeRtz91bGfWIwWZ1KX0e9FpOKWVLOU+09Uzhn49MV4iseO7riz3yVmbT57ORbQslZz3IRmoweI7zi29x43m48N7G93PElojVwW66anyz81emdvoii8xT8jEhpryQAAAAAAAAAAAAAAAAAAACL2rZQrtNycWljKWdPURMDPbThRgqcc4S7yRk67HzAddj5gU67HzAr12PmB5toQhcR3G5LDymvHhwIkX7Mt40I7kXJ5lltrv4CB7yQAAADeAMMrhLxAsd5HzAhuVdotoW8rVVJU22nnGU8PO7JaZTOuHJ7u8W1tzyU669PholjzctT+mrw3N7LUIy3pe/RPRa68C3POjXw17q8cWd957Oj7LjRtKcaFCCjCPcvHvbfe34lG17Wndp3K1WsVjUNEtOQr65K5r1KcqXTuokt7fl2sqM88EtFxfAuW5cRj6axqVaOPPXu09nSIXUeCyUVtmhVUgLwAAAAAAAAAAAAAAAAABSSyBidun4gWdUj5gU6lEB1GPmA6lECvUo+YFytY+YF8KSQGQAAAAAMMrdMDG7NeIFOooCnUEA6ggKqxQFVZrxAvjbpd7AzRWAKgAAAAAAAAP/9k=" alt="" />
<h1>Your Wishlist is empty</h1>
        </div>}
    </div>
    </>
    
  )
}

export default Cart

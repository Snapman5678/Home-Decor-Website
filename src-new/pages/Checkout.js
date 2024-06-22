import React from 'react'
import CheckoutImage from '../assets/Checkout.png'

function Checkout() {
  return (
    <div className="checkout" style={{ width: "100%", height: "90vh",  backgroundImage: `url(${CheckoutImage})`, backgroundSize: "cover"}}>
        <div className="checkoutHeader" style={{ color:"white", textAlign:"center"}}>
            <h1> Thank you for shopping from Evangelion! </h1>
            <h2> We hope to see you again </h2>
        </div>
    </div>
  )
}

export default Checkout
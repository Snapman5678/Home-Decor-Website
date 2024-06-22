import React, { useContext } from 'react'
import { CatalogueContext } from '../../context/CatalogueContext'

export const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(CatalogueContext);

  return (
    <div className="cartItem">
        <img src={image} alt={name}/>
        <div className="description">
            <p> <b> {name} </b> </p>
            <p> Rs. {price} </p>
        </div>
        <div className="countHandler">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input 
                value={cartItems[id]} 
                onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}> + </button>
        </div>
    </div>
  )
}
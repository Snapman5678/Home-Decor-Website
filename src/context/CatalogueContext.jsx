import React, { createContext, useState } from 'react'
import { CatalogueList } from '../helpers/CatalogueList'

export const CatalogueContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i=1; i < CatalogueList.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

export const CatalogueContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}));
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = CatalogueList.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  const contextValue = {
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateCartItemCount,
    getTotalCartAmount
  };

  return (
    <CatalogueContext.Provider value={contextValue}>{props.children}</CatalogueContext.Provider>
  )
}
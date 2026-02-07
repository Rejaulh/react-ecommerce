import React, { createContext, useState } from "react";
import all_product from '../Assets/all_product.js'

export const ShopContext = createContext(null)

// Create default cart
const getDefaultCart = () =>{
        let cart = {};
        for (let index = 0; index < all_product.length+1; index++){
            cart[index] = 0;
        }
        return cart;
    }

const ShopContextProvider = (props) => {

    const[cartItems, setCartItems] = useState(getDefaultCart());

    // Add to cart
    const addToCart = (ItemId) =>{
        setCartItems((prev) => ({...prev,[ItemId]:prev[ItemId]+1}))
    }

    // Remove from cart
    const removeFromCart = (ItemId) =>{
        setCartItems((prev) => ({...prev,[ItemId]:prev[ItemId]-1}))
    }
    
    // Total cart items (for Navbar badge)
  const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        total += cartItems[item];
      }
    }
    return total;
  };

    const contextValue = {
        all_product, 
        cartItems, 
        addToCart, 
        removeFromCart, 
        getTotalCartItems
    };

    console.log(cartItems);

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
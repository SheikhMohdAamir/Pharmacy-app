import React from 'react'
import CartContext from './cart-context'
import { useState } from 'react'

const CartProvider = (props) => {
  const [ additem, setAddItem ] = useState([])
  const addItemHandler=(item)=>{ 
      setAddItem([...additem,item]) 
  }

  const duplicateQuantity=(item)=>{
 
    cartContext.items.find(o=>{
      return(o.name===item.name?o.quantity+=1:'')
    })
    setAddItem([...additem])

  }

  const cartContext={
    items:additem,
    addItems:addItemHandler,
    duplicateQuantity:duplicateQuantity

    }

  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider
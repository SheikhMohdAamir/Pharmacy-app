import React from 'react'
import { useContext } from 'react'
import CartContext from '../ContextAPI/cart-context'
import { useState } from 'react'

const Item = (props) => {
  
  const [quan, setQuan] = useState(props.item.quantity)
  const api= useContext(CartContext)

  const addToCartHandler=()=>{
    const noDuplicate= api.items.find(o=>o.name===props.item.name)
    if(noDuplicate===undefined){
      setQuan((prev)=>prev>1?prev-1:'Out Of Stock')
      props.item.quantity=1
      api.addItems(props.item,quan)
    }
 
    else{
      api.duplicateQuantity(props.item)
      setQuan((prev)=>prev>1?prev-1:'Out Of Stock')
    }
  } 
  
  return (
    <div className='container-sm '>
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            <div className="fw-bold">{props.item.name}</div>
            {props.item.desc}
            </div>
            <div className="ms-3 me-auto fw-bold">Rs.{props.item.price}</div>
            <span className="badge bg-success ">{quan}  <button type="button" className={quan==='Out Of Stock'?'btn btn-success disabled':"btn btn-success btn-sm "} onClick={addToCartHandler} >Add To Cart</button></span>
        </li>
    </div>
  )
}

export default Item;
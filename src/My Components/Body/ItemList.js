import React from 'react'
import Item from './Item'

const ItemList = (props) => {
  return (
    <div className='container-sm border border-success'> 
    <h3 style={{textAlign:'center'}}>Our Stock</h3>
    <br/>
      <ol className='list-group '>
      <div className='container-sm'>
        <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
              <div className="fw-bold">Medicine with desc</div>
              </div>
              <div className="ms-2 me-auto fw-bold">Price</div>
              

              <span className='fw-bold'>Quantity</span>
          </li>
      </div>
        {props.objectState.map((item)=>{
            return(<Item key={item.name} item={item}/>)
        })}
      </ol>
    </div>
  )
}

export default ItemList

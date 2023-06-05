import React from 'react'
import Modal from './Modal';
import { useState } from 'react';
import { useContext } from 'react';
import CartContext from '../ContextAPI/cart-context';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const api= useContext(CartContext)

    const modalHandler=(event)=>{
        event.preventDefault()
        setShowModal(true)
    }

    const closeModal=()=>{
        setShowModal(false)
    }
    
    let obj= api.items.reduce((i,c)=>{
        return(i+=c.quantity)
    },0)

  return (
    <div >
        <nav className="navbar bg-body-tertiary border border-success">
            <div className="container-fluid">
                <h2 className='text-success'>React Pharmacy</h2>
                <form className="d-flex" role="search">
                <button type="submit" className="btn btn-success position-relative" onClick={modalHandler}>Your Cart<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{obj}</span>
                </button>
                </form>
            </div>
        </nav>
        <br/>
       {showModal && <Modal closeModal={closeModal} />}
    </div>
  )
}

export default Navbar
 
import React from 'react';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import CartContext from '../ContextAPI/cart-context';


const Modal = (props) => {
    const api = useContext(CartContext)

    const modalContainer = {
        position: "fixed",
        maxWidth: "30rem",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        borderRadius: "1rem",
        padding: "2rem 3rem",
      };
      const modalWrapper = {
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "0",
        top: "0",
        background: "rgba(0, 0, 0, 0.5)",
      };

      const closeModal=()=>{
        props.closeModal()
      }

  return (
    <>
    {ReactDOM.createPortal(
        <>
        <div style={modalWrapper} onClick={closeModal}></div>
        <div className='container'  style={modalContainer}>
          <hr/>
            <h3>Cart Items</h3>
            <ul className="list-group">{api.items.map((i)=>
                <li className="list-group-item d-flex justify-content-between align-items-center" key={i.name}>{i.name}
                <span className="badge bg-primary rounded-pill">x{i.quantity}</span>
                <span className="badge bg-success ">Rs.{i.price*i.quantity}</span>
                </li>
                )}
            </ul>
            <hr/>
            {/* <h4>Total Amount - <b>Rs.{api.items.reduce((i,c)=>{
                  return(i+=c.price)
                },0)}</b></h4> */}
            <hr/>
            
            
        </div>
        </>
        ,
    document.getElementById('modalRoot')
    )}
        
    </>
  )
}

export default Modal

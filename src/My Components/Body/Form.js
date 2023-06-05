import React from 'react'
import { useState } from 'react' 



const Form = (props) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const nameHandler=(event)=>{    
        setName(event.target.value)
    }
    const descHandler=(event)=>{    
        setDesc(event.target.value)
    }
    const quantityHandler=(event)=>{    
        setQuantity(event.target.value)
    }
    const priceHandler=(event)=>{    
        setPrice(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault()

        const formData={
            name:name,
            desc:desc,
            quantity:quantity,
            price:price
        }
        props.formDataHandler(formData)
        setName('')
        setDesc('')
        setQuantity('')
        setPrice('')
        
    }

  return (
    <div className='container-sm'>
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name Of Medicine</label>
                <input type="text" className="form-control border-success" id="exampleInputEmail1" value={name} onChange={nameHandler}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label ">Description</label>
                <input type="text" className="form-control border-success" id="exampleInputPassword1" value={desc} onChange={descHandler}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">Quantity</label>
                <input type="number" className="form-control border-success" id="exampleInputPassword2" value={quantity} onChange={quantityHandler}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword3" className="form-label">Price</label>
                <input type="number" className="form-control border-success" id="exampleInputPassword3" value={price} onChange={priceHandler}/>
            </div>
            
            <button type="submit" className="btn btn-success">Add Product</button>
        </form>
        <br/>
    </div>
  )
}

export default Form

import './App.css';
import Form from './My Components/Body/Form';
import ItemList from './My Components/Body/ItemList';
import Navbar from './My Components/Header/Navbar';
import { useState } from 'react';
import CartProvider from './My Components/ContextAPI/CartProvider';

let object=[
  {name:'Cheston Cold ',
   desc:'fever',
   quantity:5,
   price:50}
   ,
   {name:'Nicip Plus+',
   desc:'headache',
   quantity:10,
   price:70}
   ,
   {name:'Pentosec DSR',
   desc:'Muscle Pain',
   quantity:20,
   price:230}
]



function App() {
  const [objectState, setObjectState] = useState(object);

  const formDataHandler=(formData)=>{
    setObjectState((prev)=>[...prev,formData])
  }
  return (
    <CartProvider>
      <Navbar />
      <Form formDataHandler={formDataHandler} />
      <ItemList objectState={objectState}/>
    </CartProvider>
  )
}

export default App;

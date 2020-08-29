import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout'

function App() {
 const [product, setProduct] = useState({
   name: "Digital Wealth Book",
   price: 20,
   productBy: "J.J Omojuwa"
 })

 const makePayment = token =>{
   const body = {
     token,
     product
   }
   const headers = {
     "Content-type": "application/json"
   }

   return fetch(`http://localhost:2000/payment`,{
     method: "POST",
     headers,
     body: JSON.stringify(body)
   })
   .then(response =>{
     console.log("RESPONSE", response )
     const {status} = response;
     console.log("STATUS", status)
   })
   .catch(error => console.log(error))
 }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StripeCheckout
          stripeKey=""
          token={makePayment}
          name="Buy Digital Wealth Book"
          amount={product.price * 100}
        >
          <button className="btn btn-large blue">
            Buy Digital Wealth Book for ${product.price}
          </button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default App;

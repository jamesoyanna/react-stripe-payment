import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout'

function App() {
 const [product, setProduct] = useState({
   name: "Digital Wealth Book",
   price: 10,
   productBy: "J.J Omojuwa"
 })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <StripeCheckout stripeKey="" token="" name="Buy Digital Wealth Book">
         <button className="btn btn-large blue">Buy Digital Wealth Book</button>
       </StripeCheckout>
      </header>
    </div>
  );
}

export default App;

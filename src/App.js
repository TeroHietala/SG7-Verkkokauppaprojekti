import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Products from './Products';
import Discount from './Discount';
import NotFound from './Notfound';
import ContactUs from './ContactUs';
import Register from './register';
import Cart from './Cart';
import NavBar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Order from './Order';


function App() {
  const [category, setCategory] = useState(null);
  const [searchPrase, setSearchPrase] = useState('');
  const [cart, setCart] = useState([]); // ostoskorin muuttujat

  useEffect (() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('Cart')));
    }
  }, []);


// callback function add product to cart.
function addToCart(product) {
  const newCart = [...cart,product]; // Create new table
  setCart(newCart); // update state variable.
  localStorage.setItem('Cart',JSON.stringify(newCart));
}

  return (
    <>
    <NavBar />
    <Header />
    <div className="container">
    <Switch>
      <Route path="/" component={Home} render={() => <Home
      addToCart={addToCart}/>}
      exact 
      />

      <Route path="/products" component={Products} />
      <Route path="/discount" component={Discount} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/cart" component={Cart} />
      <Route path="/register" component={Register} />
      <Route component={NotFound}/>
    </Switch>
    </div>
    <Footer />        
    
     <h3>Tuotteet {category?.name}</h3>
        {products.map(product => (
            <div key={product.id}>
            <p>{product.name}</p>
            <button className='btn btn-primary' type='button' onClick={e => addToCart(product)}> Add </button>
            </div>
        ))}
    </>

  );
}

export default App;

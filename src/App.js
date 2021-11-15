import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './Home';
import Products from './inc/Products';
import Discount from './inc/Discount';
import NotFound from './inc/Notfound';
import ContactUs from './inc/ContactUs';
import Register from './inc/register';
import Navbar from './inc/Navbar';
import Header from './inc/Header';
import Footer from './inc/Footer';




const URL = 'http://localhost/verkkokauppa/';

function App() {
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]); //shopping cart

  let location = useLocation();

  useEffect(() => {
    if (location.state !== undefined) {
      setCategory({ id: location.state.id, name: location.state.name });
      console.log(category)
    }
  }, [location.state])

      useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  // Callback function add product to cart.
function addToCart(product) {
  const newCart = [...cart,product]; // Create new table
  setCart(newCart); // update state variable.
  localStorage.setItem('cart',JSON.stringify(newCart));
}

  return (
    <>
      <Navbar url={URL} setCategory={setCategory} />
      <Header />
      <div id="content" className="container-fluid">
        <Switch>
          <Route
            path="/" render={() =>
              <Home
                url={URL}
                category={category}
                addToCart={addToCart}/> } exact
              />
              <Route path="/inc/Discount" component={Discount} />

        </Switch>
      </div>
      <Footer />

    </>

  );
}

export default App;

import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './Home';
//import Products from './inc/Products';
import Discount from './inc/Discount';
//import NotFound from './inc/Notfound';
//import ContactUs from './inc/ContactUs';
//import Register from './inc/register';
import Navbar from './inc/Navbar';
import Header from './inc/Header';
import Footer from './inc/Footer';
import Order from './inc/Order';

const URL = 'http://localhost/verkkokauppa/';

function App() {
  const [category, setCategory] = useState(null); //tuote kategoriat
  //const [searchPharse, setSearchPharse] = useState('')
  const [cart, setCart] = useState([]); //shopping cart

  let location = useLocation();

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  useEffect(() => {
    if (location.state !== undefined) {
      setCategory({ id: location.state.id, name: location.state.name });
    }
  }, [location.state])

  function addToCart(product) {

    const newCart = [...cart, product]; // Create new table
    setCart(newCart); // update state variable.
    localStorage.setItem('cart', JSON.stringify(newCart));

  }
  return (
    <>
      <Navbar url={URL} setCategory={setCategory} cart={cart} setCart={setCart} />
      <Header />
      <div id="content" className="container-fluid">
        <Switch>
          <Route
            path="/" render={() =>
              <Home
                url={URL}
                category={category}
                addToCart={addToCart}
                cart={cart}
              />
            }
            exact
          />
          <Route path="/inc/Discount" component={Discount}  />
          <Route
            path="/inc/Order"setCart={setCart} render={() =>
              <Order
                url={URL}
                cart={cart}

                //empty={emptyCard}
                removeFromCart={removeFromCart}
              />
            }
            exact
          />
        </Switch>
      </div>
      <Footer />
    </>
  );

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved));
  }

}

export default App;

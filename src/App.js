import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Products from './Products';
import Discount from './Discount';
import NotFound from './Notfound';
import ContactUs from './ContactUs';
import Basket from './ShoppingBasket';
import NavBar from './Navbar';
import Header from './Header';
import Footer from './Footer';



function App() {
  return (
    <>
    <NavBar />
    <Header />
    <div className="container">
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/products" component={Products} />
      <Route path="/discount" component={Discount} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/shoppingbasket" component={Basket} />
      <Route component={NotFound}/>
    </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;

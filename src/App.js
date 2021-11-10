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

  let location = useLocation();

  useEffect(() => {
    if (location.state !== undefined) {
      setCategory({ id: location.state.id, name: location.state.name });
      console.log(category)
    }
  }, [location.state])

  return (
    <>
      <Navbar uri={URL} />
      <Header />
      <div id="content" className="container-fluid">
        <Switch>
          <Route
            path="/" render={() =>
              <Home
                URL={URL}
                category={category}
              />}
            exact
          />
          <Route path="inc/products" component={Products} />
          <Route path="inc/discount" component={Discount} />
          <Route path="inc/contactus" component={ContactUs} />
          <Route path="inc/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />

    </>

  );
}

export default App;

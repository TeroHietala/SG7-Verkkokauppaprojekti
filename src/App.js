import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './Home';
import Products from './Products';
import Discount from './Discount';
import NotFound from './Notfound';
import ContactUs from './ContactUs';
import Register from './register';
import NavBar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Order from './Order';

const URL = 'http://localhost/verkkokauppa/';

function App() {
  const [category, setCategory] = useState(null);

  let location = useLocation();

  useEffect(() => {
    if (location.state !==undefined) {
      setCategory({id: location.state.id,name:location.state.name});
    }
  },[location.state])
  

  return (
    <>
    <NavBar url={URL} setCategory={setCategory}/>
    <Header />
    <div id="content" className="container-fluid">
    <Switch>
      <Route
        path="/" render ={() =>
          <Home
            url={URL}
            category={category}
          />}
          exact
          />

      <Route path="/products" component={Products} />
      <Route path="/discount" component={Discount} />
      <Route path="/contactus" component={ContactUs} />
      
      <Route path="/register" component={Register} />
      <Route component={NotFound}/>
    </Switch>
    </div>
    <Footer />        
    
    </>

  );
}

export default App;

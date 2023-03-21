import React from 'react'
import '../styles/App.css';
import { Link, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
const App = () => {

  return (
    <div id="main">
      <BrowserRouter>
        <Switch>
          <Route>
            <div id='navbar' path="/">
              <div id='home-link' path="/home" element={<Home />}> Home</div>
              <div id='aboutus-link'  path="/about-us" element={<AboutUs />}>About Us</div>
            </div>
          </Route>
          <Route>
            <Home />
          </Route>
          <Route >
            <AboutUs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  )
}


export default App;

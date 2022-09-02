import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Home/Header';
import Home from './components/Home/Home';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact';
import Gallery from './components/Pages/Gallery';
import Chefs from './components/Pages/Chefs';
import Events from './components/Pages/Events';
import Menu from './components/Pages/Menu';
import Cart from './components/Pages/Cart';
import AOS from "aos"
import { useEffect } from 'react';

function App() {
  useEffect(() => {     // to animation items page
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/chefs">
          <Chefs />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
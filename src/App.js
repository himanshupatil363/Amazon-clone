import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
const App = () => {
  return (

      <div className="">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />            
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer/>
      </Router>
      </div>

  )
}
export default App
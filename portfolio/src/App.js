import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from "../src/components/Header";
import HomePage from "../src/Pages/HomePage"
import PortfolioPage from "../src/Pages/PortfolioPage"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"




function App() {
  return (
    <div className="App">
         <Router>
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={Contact} />
        < Footer/>
      </div>
    </Router>

    </div>
  );
}

export default App;

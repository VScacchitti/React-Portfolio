import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from "../src/components/Header";
import AboutMe from "../src/components/AboutMe";
import Portfolio from "../src/components/Portfolio"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"



function App() {
  return (
    <div className="App">
         <Router>
      <div>
        <Header />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        < Footer/>
      </div>
    </Router>

    </div>
  );
}

export default App;

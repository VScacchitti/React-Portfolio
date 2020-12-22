import logo from './logo.svg';
import './App.css';
import Header from "../src/components/Header";
import AboutMe from "../src/components/AboutMe"
import Footer from "../src/components/Footer"
function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;

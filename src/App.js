import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

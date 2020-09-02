import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./PageConstants/Header"
import Footer from "./PageConstants/Footer"
import MiddleSection from "./PageConstants/MiddleSection"

function App() {
  return (
    <div className="App">
      <Header/>
      <MiddleSection/>
      <Footer/>
    </div>
  );
}

export default App;

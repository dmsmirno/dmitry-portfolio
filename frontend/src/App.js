import logo from './logo.svg';
import './App.css';
import { About, Header, Footer, Skills, Work } from './container';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

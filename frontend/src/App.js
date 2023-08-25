import logo from './logo.svg';
import './App.scss';
import { About, Header, Footer, Skills, Work } from './container';
import { Navbar } from './components';
import React from 'react';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

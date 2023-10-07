import './App.scss';
import { About, Header, Footer, Skills, Work, Reviews, Blog, BlogEntry } from './container';
import { Navbar } from './components';
import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Reviews />
            <Footer />
            </>
          }/>
        
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogEntry" element={<BlogEntry/>} />
      </Routes>
    </Router>
    
  );
}

export default App;

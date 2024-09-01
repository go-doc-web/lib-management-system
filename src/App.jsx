import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './componets/Header';
import Footer from './componets/Footer/Footer';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="wrap">
      <Header />

      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;

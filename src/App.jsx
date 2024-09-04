import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './componets/Header';
import Footer from './componets/Footer/Footer';
import Home from './pages/Home/Home';
import SingleBook from './pages/SingleBook';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="wrap">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="book/:isbn" element={<SingleBook />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;

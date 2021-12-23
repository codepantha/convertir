import React from 'react';
import 'tachyons';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Navigation } from './components';
import { Converter, Currency } from './containers';

const App = () => (
  <div className="App">
    <Navigation />
    <Header />
    <Routes>
      <Route path="/" element={<Currency />} />
      <Route path="/:from/:to" element={<Converter />} />
    </Routes>
  </div>
);

export default App;

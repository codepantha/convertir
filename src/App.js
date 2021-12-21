import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components';
import { Converter, Currency } from './containers';

const App = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<Currency />} />
      <Route path="/:from/:to" element={<Converter />} />
    </Routes>
  </div>
);

export default App;

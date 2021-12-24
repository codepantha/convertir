import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const { baseCurrency } = useSelector((state) => state.currenciesReducer);
  return (
    <div data-testid="heading" className="convertir__header">
      <h1>{baseCurrency}</h1>
    </div>
  );
};

export default Header;

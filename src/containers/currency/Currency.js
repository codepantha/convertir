import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '../../components';
import { getCurrencies } from '../../redux/currency/currency';
import './Currency.css';

const Currency = () => {
  const dispatch = useDispatch();
  const { loading, baseCurrency, worldCurrencies } = useSelector(
    (state) => state.currenciesReducer,
  );

  useEffect(() => {
    dispatch(getCurrencies('usd'));
  }, [dispatch]);

  return (
    <div className="convertir__currency">
      <h2>World Currencies</h2>
      <div className="convertir__currency-grid_container">
        {loading
          ? 'Loading...'
          : worldCurrencies.map((currency) => (
            <Link key={uuidv4()} to={`${baseCurrency}/${currency.currency}`}>
              <Card currency={currency} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Currency;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Card, Filter } from '../../components';
import { getCurrencies } from '../../redux/currency/currency';
import './Currency.css';

const Currency = () => {
  const dispatch = useDispatch();
  const { loading, baseCurrency, worldCurrencies } = useSelector(
    (state) => state.currenciesReducer,
  );

  useEffect(() => {
    dispatch(getCurrencies(baseCurrency || 'usd'));
  }, [dispatch]);

  return (
    <div className="convertir__currency">
      <h2 className="convertir__currency-title">World Currencies</h2>
      <Filter />
      <div className="convertir__currency-grid_container">
        {loading
          ? 'Loading...'
          : worldCurrencies.map((currency, i) => (
            <Link className="link dim" key={uuidv4()} to={`${baseCurrency}/${currency.currency}`}>
              <Card currency={currency} index={i} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Currency;

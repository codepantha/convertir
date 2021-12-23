import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Card, Filter, Loader } from '../../components';
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
      <h2 className="section__title">World Currencies</h2>
      <Filter />
      {loading ? (
        <Loader height="100px" width="100px" mt="100px" mb="100px" />
      ) : (
        <div className="convertir__currency-grid_container">
          {worldCurrencies.map((currency, i) => (
            <Link
              className="link dim"
              key={uuidv4()}
              to={`${baseCurrency}/${currency.currency}`}
            >
              <Card currency={currency} index={i} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Currency;

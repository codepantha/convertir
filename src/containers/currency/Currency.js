import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Currency.css';

const Currencies = () => {
  const [worldCurrencies, setWorldCurrencies] = useState({
    baseCurrency: 'eur',
    currencies: [],
  });

  useEffect(() => {
    const getCurrencies = async () => {
      const res = await fetch(
        'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json',
      );
      const data = await res.json();
      const baseCurrency = Object.keys(data)[1];
      const currencyKeys = Object.keys(data[baseCurrency]);
      const currencies = currencyKeys.map((currencyKey) => ({
        currency: currencyKey,
        rate: data[baseCurrency][currencyKey],
      }));

      setWorldCurrencies({ ...worldCurrencies, baseCurrency, currencies });
    };

    getCurrencies();
  }, []);

  return (
    <div className="convertir__currency">
      <h2>World Currencies</h2>
      <div className="convertir__currency-grid_container">
        {worldCurrencies.currencies.length === 0
          ? 'Loading...'
          : worldCurrencies.currencies.map((currency) => (
            <div key={uuidv4()} className="convertir__currency-card">
              <h2>{currency.currency}</h2>
              <p>{currency.rate}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Currencies;

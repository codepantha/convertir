import React, { useState } from 'react';
import './Navigation.css';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getCurrencies } from '../../redux/currency/currency';

const Navigation = () => {
  const [baseCurrency, setBaseCurrency] = useState('usd');
  const dispatch = useDispatch();

  const currencies = useSelector(
    (state) => state.currenciesReducer.worldCurrencies,
  );
  const currencyKeys = currencies.map((currencyKey) => currencyKey.currency);

  const onChangeHandler = (e) => {
    setBaseCurrency(e.target.value);
    dispatch(getCurrencies(e.target.value));
  };

  return (
    <nav className="convertir__nav">
      <div className="convertir__nav-back_button">
        <IoIosArrowBack />
        <span>Back</span>
      </div>

      <div className="convertir__nav-base-currency">
        <select value={baseCurrency} onChange={onChangeHandler}>
          {currencyKeys.map((currency) => (
            <option key={uuidv4()} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span>Base Currency</span>
      </div>
      <FaMicrophone />
      <IoIosSettings />
    </nav>
  );
};

export default Navigation;

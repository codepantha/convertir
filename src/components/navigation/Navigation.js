import React, { useState } from 'react';
import './Navigation.css';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { getCurrencies } from '../../redux/currency/currency';

const Navigation = () => {
  const [baseCurrency, setBaseCurrency] = useState('usd');
  const dispatch = useDispatch();

  const { currencyKeys } = useSelector(
    (state) => state.currenciesReducer,
  );

  const onChangeHandler = (e) => {
    setBaseCurrency(e.target.value);
    dispatch(getCurrencies(e.target.value));
  };

  return (
    <nav data-testid="nav" className="convertir__nav">
      <div className="convertir__nav-back_button">
        <Link to="/" className="convertir__nav-back_button-link dim">
          <IoIosArrowBack size={24} />
        </Link>
      </div>

      <div className="convertir__nav-base-currency grow">
        <select className="pointer shadow-3 select" data-testid="selectTestId" name="select" value={baseCurrency} onChange={onChangeHandler}>
          {currencyKeys.map((currency) => (
            <option data-testid="option" key={uuidv4()} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="convertir__nav-icons">
        <FaMicrophone className="dim pointer" />
        <IoIosSettings className="dim pointer" />
      </div>
    </nav>
  );
};

export default Navigation;

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

  const { currencyKeys } = useSelector(
    (state) => state.currenciesReducer,
  );

  const onChangeHandler = (e) => {
    setBaseCurrency(e.target.value);
    dispatch(getCurrencies(e.target.value));
  };

  return (
    <nav className="convertir__nav">
      <div className="convertir__nav-back_button">
        <IoIosArrowBack size={20} />
      </div>

      <div className="convertir__nav-base-currency grow">
        <select className="shadow-3" value={baseCurrency} onChange={onChangeHandler}>
          {currencyKeys.map((currency) => (
            <option key={uuidv4()} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="convertir__nav-icons">
        <FaMicrophone />
        <IoIosSettings />
      </div>
    </nav>
  );
};

export default Navigation;

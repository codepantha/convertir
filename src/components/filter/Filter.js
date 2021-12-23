import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiFilterAlt } from 'react-icons/bi';
import { filterByCurrency, getCurrencies } from '../../redux/currency/currency';
import './Filter.css';

const Filter = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const onFilterCurrencies = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input === '') dispatch(getCurrencies('usd'));
    dispatch(filterByCurrency(input));
  }, [input]);

  return (
    <div className="convertir__filter">
      <input type="text" name="search" value={input} placeholder="filter by currency" autoComplete="off" onChange={onFilterCurrencies} />
      <BiFilterAlt color="#727472" />
    </div>
  );
};

export default Filter;

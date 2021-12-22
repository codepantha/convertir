import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CgArrowRightO } from 'react-icons/cg';
import './Converter.css';
import { getConversionRate } from '../../redux/converter/converter';

const Converter = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChangeHandler = (e) => setInputValue(e.target.value);
  const { from, to } = useParams();

  const { rate } = useSelector((state) => state.ratesReducer);
  const { baseCurrency } = useSelector((state) => state.currenciesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversionRate(from, to));
  }, []);

  useEffect(() => {
    dispatch(getConversionRate(baseCurrency, to));
  }, [dispatch, baseCurrency]);

  return (
    <div className="convertir__converter">
      <h2>Use our free converter</h2>
      <div className="convertir__converter-from flex">
        <p>{baseCurrency !== from ? baseCurrency : from}</p>
        <input type="text" value={inputValue} placeholder="1" onChange={onChangeHandler} />
        <CgArrowRightO />
      </div>
      <div className="convertir__converter-to flex">
        <p>{to}</p>
        <p>{String(rate[to] * inputValue)}</p>
        <CgArrowRightO />
      </div>
    </div>
  );
};

export default Converter;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CgArrowRightO } from 'react-icons/cg';
import './Converter.css';
import { getConversionRate } from '../../redux/converter/converter';
import { Loader } from '../../components';

const Converter = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChangeHandler = (e) => setInputValue(e.target.value);
  const { from, to } = useParams();

  const { loading, rate } = useSelector((state) => state.ratesReducer);
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
      <h2 className="section__title">Use our free converter</h2>
      <div className="convertir__converter-from flex items-center">
        <p className="f4">{baseCurrency !== from ? baseCurrency : from}</p>
        <input
          type="text"
          className="pa1 br3 ba outline-0 b--black-0125"
          value={inputValue}
          placeholder="1"
          onChange={onChangeHandler}
        />
        <CgArrowRightO />
      </div>
      <div className="convertir__converter-to flex shadow-5 items-center">
        <p className="f4">{to}</p>
        {loading ? (
          <Loader height="1.8rem" width="1.8rem" />
        ) : (
          <p className="f3">
            {String(
              Math.round((rate[to] * inputValue + Number.EPSILON) * 100) / 100,
            )}
          </p>
        )}

        <CgArrowRightO />
      </div>
    </div>
  );
};

export default Converter;

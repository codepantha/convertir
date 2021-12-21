import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ currency }) => (
  <div className="convertir__currency-card">
    <h2>{currency.currency}</h2>
    <p>{currency.rate}</p>
  </div>
);

Card.propTypes = {
  currency: PropTypes.instanceOf(Object).isRequired,
};

export default Card;

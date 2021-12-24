import React from 'react';
import PropTypes from 'prop-types';
import { CgArrowRightO } from 'react-icons/cg';
import './Card.css';

const Card = ({ currency }) => (
  <div data-testid="card" className="convertir__currency-card shadow-5 rotate-vert-center">
    <CgArrowRightO />
    <div className="convertir__currency-card_info grow">
      <h2>{currency.currency}</h2>
      <p>{currency.rate}</p>
    </div>
  </div>
);

Card.propTypes = {
  currency: PropTypes.instanceOf(Object).isRequired,
};

export default Card;

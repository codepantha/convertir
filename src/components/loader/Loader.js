import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const Loader = ({
  width, height, mt, mb,
}) => (
  <div
    className="loader"
    style={{
      width,
      height,
      marginTop: mt,
      marginBotton: mb,
    }}
  />
);

export default Loader;

Loader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
};

Loader.defaultProps = {
  width: '',
  height: '',
  mt: '',
  mb: '',
};

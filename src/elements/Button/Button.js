import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = props => {
  const { children, variant, className, ...rest } = props;
  return (
    <button
      {...rest}
      type="button"
      className={`${styles.button} ${styles[`button-${variant}`]} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'contained',
  className: '',
};

export default Button;

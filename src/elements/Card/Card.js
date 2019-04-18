import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ className, children, active, stack, ...props }) => (
  <div
    className={`${styles.card} ${active ? styles.active : ''}
    ${stack ? styles.stack : ''} ${className}`}
    {...props}
  >
    {children}
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  active: PropTypes.bool,
  stack: PropTypes.bool,
};

Card.defaultProps = {
  className: '',
  children: '',
  active: false,
  stack: false,
};

export default Card;

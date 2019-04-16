import React from 'react';
import PropTypes from 'prop-types';

import styles from './Toggle.module.css';

const Toggle = ({ classNameRoot, classNameInput, ...props }) => (
  <label
    className={`${styles.switch} ${classNameRoot}`}
    htmlFor={`${styles.toggle}`}
  >
    <input
      className={`${styles.checkbox} ${classNameInput}`}
      {...props}
      id={`${styles.toggle}`}
      type="checkbox"
    />
    <span className={`${styles.slider} ${styles.round}`} />
  </label>
);

Toggle.propTypes = {
  classNameRoot: PropTypes.string,
  classNameInput: PropTypes.string,
};

Toggle.defaultProps = {
  classNameRoot: '',
  classNameInput: '',
};

export default Toggle;

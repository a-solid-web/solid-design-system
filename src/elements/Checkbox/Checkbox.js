import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

const Checkbox = ({ classNameRoot, classNameInput, ...props }) => (
  <label className={`${styles.container} ${classNameRoot}`} htmlFor="checkbox">
    <input
      className={`${styles.input} ${classNameInput}`}
      type="checkbox"
      id="checkbox"
      {...props}
    />
    <span className={styles.checkmark} />
  </label>
);

Checkbox.propTypes = {
  classNameRoot: PropTypes.string,
  classNameInput: PropTypes.string,
};

Checkbox.defaultProps = {
  classNameRoot: '',
  classNameInput: '',
};

export default Checkbox;

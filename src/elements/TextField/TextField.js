import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.css';

const TextField = props => {
  const { description, title, classNameInput, classNameRoot, ...rest } = props;
  return (
    <label className={`${styles.container} ${classNameRoot}`} htmlFor="inp">
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      <input
        {...rest}
        id="inp"
        className={`${styles.input} ${classNameInput}`}
      />
    </label>
  );
};

TextField.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameRoot: PropTypes.string,
};

TextField.defaultProps = {
  description: '',
  title: '',
  classNameInput: '',
  classNameRoot: '',
};

export default TextField;

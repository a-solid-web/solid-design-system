import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.css';

const TextField = props => {
  const { description, title, ...rest } = props;
  return (
    <label className={styles.container} htmlFor="inp">
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      <input {...rest} id="inp" className={styles.input} />
    </label>
  );
};

TextField.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

TextField.defaultProps = {
  description: '',
  title: '',
};

export default TextField;

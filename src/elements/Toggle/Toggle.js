import React from 'react';

import styles from './Toggle.module.css';

const Toggle = props => {
  return (
    <label className={styles.switch} htmlFor="toggle">
      <input
        {...props}
        id="toggle"
        type="checkbox"
        className={styles.checkbox}
      />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  );
};

export default Toggle;

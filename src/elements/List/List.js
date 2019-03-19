import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';

import ListItem from '../ListItem';

const List = props => {
  const { children, className, ...rest } = props;
  return (
    <ul {...rest} className={`${styles.list} ${className}`}>
      {children}
    </ul>
  );
};

List.propTypes = {
  children: PropTypes.arrayOf(ListItem).isRequired,
  className: PropTypes.string,
};

List.defaultProps = {
  className: '',
};

export default List;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.css';

const ListItem = props => {
  const { className, head, children, selected, ...rest } = props;

  const li = 'list-item';
  const headClass = head ? styles[`${li}-head`] : '';
  const selectedClass = selected ? styles[`${li}-selected`] : '';
  const classNames = `${styles[li]} ${headClass} ${selectedClass} ${className}`;

  return (
    <li {...rest} className={classNames}>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  head: PropTypes.bool,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  selected: PropTypes.bool,
};

ListItem.defaultProps = {
  head: false,
  className: '',
  selected: false,
};

export default ListItem;

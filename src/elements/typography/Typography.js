import React from 'react';
import PropTypes from 'prop-types';
import styles from './Typography.module.css';

const defaultVariantMapping = {
  title: 'h1',
  subtitle: 'h5',
  header1: 'h2',
  header2: 'h3',
  paragraph: 'p',
  description1: 'span',
  description2: 'span',
};

const Typography = props => {
  const { variant, children, className, ...rest } = props;
  const Component = defaultVariantMapping[variant] || 'span';
  return (
    <Component {...rest} className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    'title',
    'subtitle',
    'header1',
    'header2',
    'paragraph',
    'description1',
    'description2',
  ]).isRequired,
  className: PropTypes.string,
};

Typography.defaultProps = {
  className: '',
};

export default Typography;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Title = ({ type, className, text }) => {
  const Heading = type;
  return <Heading className={clsx('title', className)}>{text}</Heading>;
};

Title.propTypes = {
  type: PropTypes.string.isRequired,
  classNameTitle: PropTypes.string,
  text: PropTypes.string,
};

export default Title;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Input.module.css';

const Input = ({
  id,
  placeholder = '',
  classNameInput = '',
  label = '',
  classNameLabel,
  classNameWrapper,
  error = '',
  ...attrs
}) => {
  const classess = clsx('input', classNameInput, { error });
  const labelClasses = clsx('label', classNameLabel);
  const wrapperClasses = clsx(classNameWrapper);
  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
          {attrs.requiredSymbol ? (
            <span className={styles.required}> *</span>
          ) : (
            ''
          )}
        </label>
      )}
      <input
        id={id}
        name={id}
        className={classess}
        placeholder={placeholder}
        {...attrs}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  classNameInput: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  classNameLabel: PropTypes.string,
  classNameWrapper: PropTypes.string,
};

export default Input;

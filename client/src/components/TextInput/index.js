import React from 'react'

import classNames from 'classnames/bind';
import styles from './TextInput.module.scss';
const cx = classNames.bind(styles);

interface TextInputProps {
  placeholder: String;
  message: String;
}

function TextInput (placeholder, message) {
  return (
    <div className={cx('container')}>
        <input className={cx('textInput')}
        placeholder={placeholder}
        />
        <label className={cx('errorMessage')}>
        {message}
        </label>
    </div>
  )
}

export default TextInput;

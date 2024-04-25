import React from 'react'

import classNames from 'classnames/bind';
import styles from './TextInput.module.scss';
const cx = classNames.bind(styles);


function TextInput (props) {
  return (
    <div className={cx('container')}>
        <input className={cx('textInput')}
        placeholder={props.placeholder}
        />
        <label className={cx('errorMessage')}>
        {props.message}
        </label>
    </div>
  )
}

export default TextInput;

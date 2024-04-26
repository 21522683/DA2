import React, { useState } from 'react'
import classNames from 'classnames/bind';
import styles from './UserTextInput.module.scss';
const cx = classNames.bind(styles);

interface UserTextInputProp {
    label: String;
    type: String;
    value: String;
    isError: String;
    message: String;
    handleOnBlur: () => void;
}

interface Colors {
    [key: string]: String;
}

function UserTextInput ({label, type, value, isError, message, handleOnBlur}) {
    const borderColors: Colors = {
        normal: '#ADADAD',
        focus: '#008DB5',
        error: '#FF0000',
    };
    
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

  return (
    <div className={cx('container')}>
        <p className={cx('label')}>
            {label}
        </p>

        <input className={cx('input')}
            type={type}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            style={{
                borderColor: isFocused ? borderColors['focus'] :
                    isError ? borderColors['error'] 
                    : borderColors['normal'],
            }}
        />

        {
            isError && (
                <p className={cx('errorMessage')}>
                    {message}
                </p>    
            )
        }
    </div>
  )
}

export default UserTextInput;

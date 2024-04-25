import React from 'react'

import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
const cx = classNames.bind(styles);


function LoginScreen() {
  return (
    <body className={cx('container')}>
      <Header title="Đăng nhập"/>

      <div className={cx('mainContainer')}>
        <TextInput className={cx('txtUsername')}
          message="Vui long nhap"
          placeholder="Vui long nhap vao username"
        />
      </div>
    </body>
  )
}

export default LoginScreen;

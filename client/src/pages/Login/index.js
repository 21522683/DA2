import React from 'react'

import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Header from '../../components/Header';
import UserTextInput from '../../components/UserTextInput';
const cx = classNames.bind(styles);


function LoginScreen() {
  return (
    <div className={cx('container')}>
      <Header title="Đăng nhập"/>

      <div className={cx('mainContainer')}>
        <p className={cx('mainTitle')}>
          Thông tin đăng nhập
        </p>

        <UserTextInput label='Email'/>
        <div className={cx('mt')}/>
        <UserTextInput label='Mật khẩu:'/>
        <p className={cx('forgotPassword')}>
          Quên mật khẩu
        </p>

        <div className={cx('mt')}/>

        <button className={cx('btnLoginIn')}>
        Đăng nhập
        </button>
      </div>
    </div>
  )
}

export default LoginScreen;

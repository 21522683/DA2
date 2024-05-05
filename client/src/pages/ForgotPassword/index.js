import React from 'react'

import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import Header from '../../components/Header';
import UserTextInput from '../../components/UserTextInput';
const cx = classNames.bind(styles);


function ForgotPassword() {
  return (
    <div className={cx('container')}>
      <Header title="Quên mật khẩu"/>

      <div className={cx('mainContainer')}>
        <p className={cx('mainTitle')}>
          Quên mật khẩu
        </p>

        <UserTextInput label='Email'/>
        <div className={cx('mt')}/>

        <div className={cx('mt')}/>

        <button className={cx('btnLoginIn')}>
        Xác thực
        </button>

        <div className={cx('signUpContainer', 'mt')}>
          <p className={cx('textSignUp')}>
            Đã có tài khoản
          </p>
          <p className={cx('textSignUp', 'ml')}>
            Đăng nhập
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;

import React from 'react'
import Header from '../../components/Header';
import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import UserTextInput from '../../components/UserTextInput';
const cx = classNames.bind(styles);

function SignUpScreen() {
  return (
    <div className={cx('container')}>
      <Header title="Đăng ký"/>

      <>
        <div className={cx('mainContainer')}>
            <p className={cx('mainTitle')}>
            THÔNG TIN DOANH NGHIỆP
            </p>
             
            <>
            <UserTextInput
                label='Mã doanh nghiệp: '
                />

            <UserTextInput
                label='Tên doanh nghiệp: '
                />

            <UserTextInput
                label='Địa chỉ:'
                />

            <UserTextInput
                label='Số tài khoản:'
                />

            <UserTextInput
                label='Tên ngân hàng:'
                />

            <UserTextInput
                label='Số FAX:'
                />
            </>

            <p className={cx('mainTitle')}>
            THÔNG TIN NGƯỜI ĐẠI DIỆN
            </p>

            <>
            <UserTextInput
                label='Họ và tên:'
                />

            <UserTextInput
                label='Số điện thoại:'
                />

            <UserTextInput
                label='Địa chỉ email:'
                />

            <UserTextInput
                label='Mật khẩu: '
                />

            <UserTextInput
                label='Xác nhận mật khẩu'
                />

            <div style={{marginBottom: 20}}/>
            </>

            <button className={cx('btnLoginIn')}>
            Đăng ký
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
      </>

    </div>
  )
}

export default SignUpScreen;

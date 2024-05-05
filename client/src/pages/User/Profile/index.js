import React from 'react'
import UserTextInput from '../../../components/UserTextInput';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {    
  return (
    <div className={cx('container')}>
        <h1 className={cx('title')}>
        THÔNG TIN NGƯỜI SỬ DỤNG DỊCH VỤ
        </h1>

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

            <div className={cx('pagination')}/>

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

            <div style={{marginBottom: 20}}/>
            </>
        </div>
        </>

        <>
        <div className={cx('buttonContainer')}>
            <button className={cx('btnDelete')}>
            Khóa tài khoản
            </button>

            <button className={cx('btnEdit')}>
            Chỉnh sửa
            </button>

        </div>
        </>
    </div>
  )
}

export default Profile;

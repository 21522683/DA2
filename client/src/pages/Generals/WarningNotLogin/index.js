import React from 'react'
import classNames from "classnames/bind";
import styles from './WarningNotLogin.module.scss';

const cx = classNames.bind(styles);

function WarningNotLogin() {
    return (
        <div className={cx('container_main')}>
            <div className={cx('container_first')}>
                <span className={cx('text_not_found')}>Yêu cầu đăng nhập vào hệ thống</span>
            </div>

            <a href='/login'>
                <span className={cx('btn_back_home')}>Đi đến đăng nhập</span>
            </a>
        </div>
    )
}

export default WarningNotLogin

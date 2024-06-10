import React from 'react'
import classNames from "classnames/bind";
import styles from './WarningVerify.module.scss';

const cx = classNames.bind(styles);

function WarningVerify() {
    return (
        <div className={cx('container_main')}>
            <div className={cx('container_first')}>
                <span className={cx('text_not_found')}>Yêu cầu xác minh thông tin người dùng</span>
            </div>

            <a href='/user/info'>
                <span className={cx('btn_back_home')}>Đi đến xác minh thông tin</span>
            </a>
        </div>
    )
}

export default WarningVerify

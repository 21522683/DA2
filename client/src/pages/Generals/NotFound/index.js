import React from 'react';
import classNames from "classnames/bind";
import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);


function NotFound() {
    return (
        <div className={cx('container_main')}>
            <div className={cx('container_first')}>
                <span className={cx('text_404')}>404</span>
                <span className={cx('text_not_found')}>Not Found</span>
            </div>

            <a href='/'>
                <span className={cx('btn_back_home')}>Quay lại trang chủ</span>
            </a>
        </div>
    )
}

export default NotFound;

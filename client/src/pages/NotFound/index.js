import React from 'react'

import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';
import Header from '../../components/Header';
const cx = classNames.bind(styles);


function NotFound() {
  return (
    <body className={cx('container')}>
      <Header title="Thông báo"/>

      <div className={cx('mainContainer')}>
        <h1 className={cx('contentText')}>404</h1>

        <h1 className={cx('contentText')}>Not Found</h1>

        <button className={cx('btnBack')}>
          Quay lại trang chủ
        </button>

      </div>
    </body>
  )
}

export default NotFound;

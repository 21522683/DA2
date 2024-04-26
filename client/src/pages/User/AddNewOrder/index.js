import React, { useState } from 'react'
import images from '../../../assets/images';
import classNames from 'classnames/bind';
import styles from './AddNewOrder.module.scss';
import UserTextInput from '../../../components/UserTextInput';
const cx = classNames.bind(styles);

function AddNewOrder() {

  return (
    <div className={cx('container')}>
      <h1 className={cx('header')}>
      TẠO ĐƠN HÀNG CỦA BẠN
      </h1>

      <div className={cx('childContainer')}>
        <UserTextInput
          label='Ngày đi dự kiến'
        />

        <UserTextInput
          label='Ngày đến dự kiến'
        />
        
      </div>

    </div>
  )
}

export default AddNewOrder;

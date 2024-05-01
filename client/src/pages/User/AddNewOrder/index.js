import React, { useState } from 'react'
import classNames from 'classnames/bind';
import styles from './AddNewOrder.module.scss';
import UserTextInput from '../../../components/UserTextInput';
import { listServices } from './data';
import images from '../../../assets/images';
import ProductCard from '../../../components/ProductCard';
const cx = classNames.bind(styles);

function AddNewOrder() {
  const itemService = listServices.map(listServices => 
    <option 
      key={listServices.id}
      value={listServices.id} 
      className={cx('itemService')}
      >
      {listServices.name}
    </option>
  )

  return (
    <div className={cx('container')}>
      <h1 className={cx('header')}>
      TẠO ĐƠN HÀNG CỦA BẠN
      </h1>

      <div className={cx('childContainer')}>
        <UserTextInput
          label='Ngày đi dự kiến'
        />

        <div className={cx('spaceView')}/>

        <UserTextInput
          label='Ngày đến dự kiến'
        />
        
        <div className={cx('spaceView')}/>

        <div className={cx('serviceContainer')}>
          <p className={cx('label')}>
            Lựa chọn dịch vụ:
          </p>

          <select className={cx('comboService')}
            >
            {itemService}
          </select>
        </div>

      </div>
      
      <div className={cx('childContainer')}>
        <UserTextInput
          label='Thông tin cảng đi:'
        />
      </div>

      <div className={cx('childContainer')}>
        <UserTextInput
          label='Thông tin cảng đến:'
        />
      </div>

      <div className={cx('childContainer')}>
      <h1 className={cx('title')}>
        Thêm thông tin hàng hóa
      </h1>
      
      <button className={cx('btnAddProduct')}>
        Thêm hàng hóa
      </button>
      </div>

      <ProductCard
      srcimage={images.bgHome}
      />

      <button className={cx('btnAddOrder')}>
        Thêm hàng hóa
      </button>

    </div>
  )
}

export default AddNewOrder;

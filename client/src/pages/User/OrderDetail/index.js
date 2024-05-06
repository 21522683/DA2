import React, { useState } from 'react'
import classNames from 'classnames/bind';
import styles from './OrderDetail.module.scss';
import UserTextInput from '../../../components/UserTextInput';
import { listServices } from '../AddNewOrder/data';
import ProductCard from '../../../components/ProductCard';
import images from '../../../assets/images';
const cx = classNames.bind(styles);

function OrderDetail() {
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
        <div className={cx('headerContainer')}>
            <h1 className={cx('header')}>
            CHI TIẾT ĐƠN HÀNG
            </h1>

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                <p style={{fontSize: 15}}>Trạng thái</p>
                <p style={{fontSize: 15, color: 'red'}}>Trạng thái</p>
            </div>
        </div>

        <h1 className={cx('title')}>
        THÔNG TIN NGƯỜI TẠO ĐƠN HÀNG
        </h1>

        <>
        <div className={cx('childContainer')}>
            <UserTextInput
            label='Tên người đại diện:'
            />
            
            <div className={cx('spaceView')}/>

            <UserTextInput
            label='Địa chỉ email:'
            />
        </div>

        <div className={cx('childContainer')}>
            <div style={{flex: 2}}>
                <UserTextInput
                    label='Tên doanh nghiệp:'
                />
            </div>

            <div className={cx('spaceView')}/>
            
            <div style={{flex: 2, display: 'flex', flexDirection: 'row'}}>
                <UserTextInput
                    label='Số điện thoại:'
                />
                
                <div className={cx('spaceView')}/>

                <UserTextInput
                    label='Số FAX:'
                />
            </div>
        </div>

        </>

        <div className={cx('pagination')}/>

        <h1 className={cx('title')}>
        THÔNG TIN VẬN CHUYỂN
        </h1>

        <>
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

        </>

        <div className={cx('pagination')}/>

        <h1 className={cx('title')}>
        DANH MỤC HÀNG HÓA
        </h1>

        <>
        <ProductCard
        type='canView'
      srcimage={images.bgHome}
      />

        </>

        <button className={cx('btnCancel')}>HỦY ĐƠN HÀNG NÀY</button>
    </div>
  )
}

export default OrderDetail;

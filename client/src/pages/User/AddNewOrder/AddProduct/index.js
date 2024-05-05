import React, { useState } from 'react'
import classNames from 'classnames/bind';
import styles from './AddProduct.module.scss';
import UserTextInput from '../../../../components/UserTextInput';
import { listField, listUnit } from '../data';

const cx = classNames.bind(styles);

function AddProduct() {
    const itemField = listField.map(listField => 
        <option 
          key={listField.id}
          value={listField.id} 
          className={cx('itemField')}
          >
          {listField.field}
        </option>
      )
    
      const itemUnit = listUnit.map(listUnit => 
        <option 
          key={listUnit.id}
          value={listUnit.id} 
          className={cx('itemField')}
          >
          {listUnit.unit}
        </option>
      )

  return (
    <div className={cx('container')}>
        {/* <button className={cx('btnClose')}>
            Close
        </button> */}

        <h1 className={cx('header')}>
            THÊM HÀNG HÓA
        </h1>

        <>
        <div className={cx('childContainer')}>
            <div className={cx('fieldContainer')}>
                <p className={cx('label')}>
                    Lĩnh vực hàng hóa:
                </p>

                <select className={cx('comboField')}>
                    {itemField}
                </select>
            </div>
        </div>

        <h1 className={cx('title')}>
            Thông tin hàng hóa
        </h1>

        <div className={cx('childContainer')}>
            <UserTextInput
            label='Tên hàng hóa:'
            />
        </div>

        <div className={cx('childContainer')}>
            <UserTextInput
                label="Nhà cung cấp"
            />
        </div>

        <div className={cx('childContainer')}>
            <UserTextInput
                label="Ngày sản xuất"
            />

            <div className={cx('spaceView')}/>

            <UserTextInput
                label="Hạn sử dụng"
            />
        </div>

        <div className={cx('childContainer')}>
            <div className={cx('fieldContainer')}>
                <p className={cx('label')}>
                Mô tả
                </p>

                <input className={cx('input')}/>
            </div>
        </div>
        </>

        <>
        <h1 className={cx('title')}>
            Quy cách đóng hàng
        </h1>

        <div className={cx('childContainer')}>
            <UserTextInput
                label="Số lượng"
            />

            <div className={cx('spaceView')}/>

            <div className={cx('fieldContainer')}>
                <p className={cx('label')}>
                Đơn vị tính:
                </p>

                <select className={cx('comboField')}>
                    {itemUnit}
                </select>
            </div>

            <div className={cx('spaceView')}/>

            <UserTextInput
                label="Khối lượng (kg)"
            />
        </div>

        <div className={cx('childContainer')}>
            <UserTextInput
                label="Chiều dài (m)"
            />
            <div className={cx('spaceView')}/>
            <UserTextInput
                label="Chiều rộng (m)"
            />
            <div className={cx('spaceView')}/>
            <UserTextInput
                label="Chiều cao (m)"
            />

        </div>

        <div className={cx('childContainer')}>
            <div className={cx('fieldContainer')}>
                <p className={cx('label')}>
                    Hình ảnh đóng hàng
                </p>

                <p>
                    danh sach hinh anh
                </p>
            </div>
        </div>

        <div className={cx('childContainer')}>
            <div className={cx('fieldContainer')}>
                <p className={cx('label')}>
                    Ghi chú
                </p>

                <input className={cx('input')}/>
            </div>
        </div>
        </>

        <button className={cx('btnAdd')}>Lưu thông tin</button>
    </div>
  )
}

export default AddProduct;

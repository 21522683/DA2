import React, { useState } from 'react'
import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';
import UserTextInput from '../UserTextInput';
import images from '../../assets/images';

const cx = classNames.bind(styles);

interface ProductCardProps {
    srcImage: String;
}

const ProductCard = ({srcImage}) => {

  return (
    <div className={cx('container')}>
        <>
        <div className={cx('headerContainer')}>
            {/* <img src={srcImage} className={cx('image')}/> */}
            <img src={images.bgHome} className={cx('image')}/>

            <div className={cx('textContainer')}>
                <p className={cx('textTitle')}>ten hang hoa</p>
                <p className={cx('textField')}>linh vuc</p>
                <p className={cx('textDcription')}>mo ta</p>
            </div>

            <button>Close</button>
        </div>
        </>

        <div style={{width: '100%', background: 'black', height: 1}}/>
        <>
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
                    {/* {itemUnit} */}
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

        <div className={cx('buttonContainer')}>
            <button className={cx('btnDelete')}>Xóa</button>
            <div className={cx('spaceView')}/>
            <button className={cx('btnEdit')}>Cập nhật</button>
        </div>
    </div>
  )
}

export default ProductCard;

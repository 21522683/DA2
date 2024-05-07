import React from 'react'
import classNames from "classnames/bind";
import styles from './ItemDetailGoods.module.scss';
import images from '../../../../../assets/images/index'
const cx = classNames.bind(styles);


function ItemDetailGoods() {

  return (
    <div className={cx('detail_goods')}>
      <div className={cx('container_hh')}>
        <span className={cx('title')}>Tên hàng hóa:</span>
        <span className={cx('content')}>Thuốc abc</span>
      </div>
      <div className={cx('container_hh')}>
        <span className={cx('title')}>Nhà cung cấp:</span>
        <span className={cx('content')}>Công ty dược phẩm</span>
      </div>

      <div className={cx('container_mutilple')}>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Lĩnh vực:</span>
          <span className={cx('content')}>Y tế</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Số lượng:</span>
          <span className={cx('content')}>1233</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Khối lượng:</span>
          <span className={cx('content')}>1.81</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Đơn vị tính:</span>
          <span className={cx('content')}>kg</span>
        </div>
      </div>

      <div className={cx('container_mutilple')}>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Ngày SX:</span>
          <span className={cx('content')}>11/01/2024</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>HSD:</span>
          <span className={cx('content')}>11/02/2024</span>
        </div>
      </div>

      <div className={cx('container_mutilple')}>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Chiều dài (m):</span>
          <span className={cx('content')}>1.21</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Chiều rộng (m):</span>
          <span className={cx('content')}>0.88</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Chiều cao (m):</span>
          <span className={cx('content')}>0.32</span>
        </div>
      </div>

      <div className={cx('container_mutilple')}>

        <div className={cx('container_hh')}>
          <span className={cx('title')}>Hình ảnh:</span>
          {
            [1, 2, 3, 4].map((item, index) => {
              return (
                <img key={index} className={cx('image_hh')} src={images.hanghoa} alt='hh' />
              )
            })
          }
        </div>
      </div>
      <div className={cx('container_hh')}>
        <span className={cx('title')}>Mô tả:</span>
        <span className={cx('content-script')}>Mo ta san pham nha</span>
      </div>
    </div>
  )
}

export default ItemDetailGoods;
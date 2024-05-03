import React from 'react'
import classNames from "classnames/bind";
import styles from './ItemDetailGoods.module.scss';

const cx = classNames.bind(styles);


function ItemDetailGoods() {
  return (
    <div className={cx('detail_goods')}>
      <div className={cx('container_hh')}>
        <span className={cx('title')}>Tên hàng hóa:</span>
        <span className={cx('content')}>Thuốc chống cảm của bộ y tế</span>
      </div>
      <div className={cx('container_hh')}>
        <span className={cx('title')}>Nhà cung cấp:</span>
        <span className={cx('content')}>Công ty cổ phần Medical ABNC</span>
      </div>

      <div className={cx('container_mutilple')}>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Lĩnh vực:</span>
          <span className={cx('content')}>Y tế</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Số lượng:</span>
          <span className={cx('content')}>1200</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Khối lượng:</span>
          <span className={cx('content')}>1.42</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Đơn vị tính:</span>
          <span className={cx('content')}>kg</span>
        </div>
      </div>

      <div className={cx('container_mutilple')}>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Ngày SX:</span>
          <span className={cx('content')}>11/02/2023</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>HSD:</span>
          <span className={cx('content')}>11/02/2026</span>
        </div>
      </div>

      <div className={cx('container_mutilple')}>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Chiều dài (m):</span>
          <span className={cx('content')}>0.12</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Chiều rộng (m):</span>
          <span className={cx('content')}>0.04</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Chiều cao (m):</span>
          <span className={cx('content')}>0.02</span>
        </div>
      </div>

      <div className={cx('container_mutilple')}>

        <div className={cx('container_hh')}>
          <span className={cx('title')}>Hình ảnh:</span>
          {
            [1, 2, 3, 4].map((item, index) => {
              return (
                <img key={index} className={cx('image_hh')} src='https://chothuekholanh.vn/uploads/images/dong-goi-hang-hoa.jpg' alt='hh' />
              )
            })
          }
        </div>
      </div>
      <div className={cx('container_hh')}>
        <span className={cx('title')}>Mô tả:</span>
        <span className={cx('content-script')}>Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)</span>
      </div>

    </div>
  )
}

export default ItemDetailGoods;
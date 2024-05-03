import React from 'react'
import classNames from "classnames/bind";
import styles from './DetailGoodsDeclaration.module.scss';
import ItemDetailGoods from './ItemDetailGoods';

const cx = classNames.bind(styles);


function DetailGoodsDeclaration() {


  const handleClose = () => {

  }

  const handleAccept = () => {

  }

  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>

        <div className={cx('container-header')}>
          <span className={cx('title_modal')}>BẢN KÊ KHAI HÀNG HÓA</span>
          <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('container_first')}>
          <div className={cx('container-status')}>
            <span className={cx('title')}>Trạng thái: </span>
            {/* <span className={cx('accept')}>Đã tạo hóa đơn</span> */}
            <span className={cx('status')}>Chưa tạo hóa đơn</span>
          </div>

          <div className={cx('container-status')}>
            <span className={cx('title')}>Mã đơn hàng: </span>
            <span className={cx('content')}>DH0927226372</span>
          </div>

          <div className={cx('container-status')}>
            <span className={cx('title')}>Ngày tạo đơn: </span>
            <span className={cx('content')}>11/01/2024</span>
          </div>
        </div>

        <div className={cx('info-order')}>
          <span className={cx('title-order')}>THÔNG TIN NGƯỜI TẠO ĐƠN HÀNG</span>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Tên người đại diện: </span>
              <span className={cx('content')}>Phạm Nguyễn Trường An</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Địa chỉ email: </span>
              <span className={cx('content')}>phantrongtinh15082003@gmail.com</span>
            </div>
          </div>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Tên doanh nghiệp: </span>
              <span className={cx('content')}>Công ty cổ phần tiêu dùng Macdison</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Số điện thoại: </span>
              <span className={cx('content')}>0379361210</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Số FAX: </span>
              <span className={cx('content')}>124379361210</span>
            </div>
          </div>

        </div>

        <div className={cx('info-order')}>
          <span className={cx('title-order')}>THÔNG TIN ĐƠN HÀNG</span>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Ngày đi dự kiến: </span>
              <span className={cx('content')}>11/04/2024</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Ngày đến dự kiến: </span>
              <span className={cx('content')}>11/04/2024</span>
            </div>

            <div className={cx('container-type')}>
              <span className={cx('title')}>Loại hình: </span>
              <span className={cx('content')}>Xuất khẩu</span>
            </div>
          </div>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Thông tin cảng đi: </span>
              <span className={cx('content')}>Cảng Đông Anh, Sài Gòn</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Thông tin cảng đến: </span>
              <span className={cx('content')}>Cảng Cam Ranh Khánh Hòa</span>
            </div>
          </div>


        </div>

        <div className={cx('info-goods')}>
          <span className={cx('title-order')}>DANH MỤC HÀNG HÓA</span>
          <div className={cx('container_list')}>

            {
              [1, 2, 3, 4 , 5].map((item, index) => {
                return (
                  <ItemDetailGoods key={index} />
                )
              })
            }

          </div>
        </div>

        <div className={cx('container-btn')}>
          <div className={cx('btn-accept')} onClick={handleAccept}>
            Tạo hóa đơn
          </div>
        </div>

      </div >
    </div >
  )
}

export default DetailGoodsDeclaration;

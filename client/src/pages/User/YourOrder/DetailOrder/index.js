import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from './DetailOrder.module.scss';
import ItemDetailOrder from './ItemDetailOrder';
import MessageBox from './ItemDetailOrder/MessageBox';

const cx = classNames.bind(styles);


function DetailOrder() {

  const handleClose = () => {

  }

  const handleRejected = () => {

  }

  const handleAccept = () => {
    // dispatch hành động trong này
  }

  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>

        <div className={cx('container-header')}>
          <span className={cx('title_modal')}>CHI TIẾT ĐƠN HÀNG CỦA BẠN</span>
          <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('container_first')}>
          <div className={cx('container-status')}>
            <span className={cx('title')}>Trạng thái đơn hàng: </span>
            <span className={cx('accept')}>Đã xét duyệt</span>
            {/* {
              itemSelected.trangThaiXetDuyet ? () : (<span className={cx('status')}>Chờ xét duyệt</span>)
            } */}
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
          <span className={cx('title-order')}>THÔNG TIN ĐƠN HÀNG</span>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Ngày đi dự kiến: </span>
              <span className={cx('content')}>12/11/2022</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Ngày đến dự kiến: </span>
              <span className={cx('content')}>12/11/2022</span>
            </div>

            <div className={cx('container-type')}>
              <span className={cx('title')}>Loại hình: </span>
              <span className={cx('content')}>Xuất khẩu</span>
            </div>
          </div>

          <div className={cx('container_2')}>
            <span className={cx('title')}>Thông tin cảng đi: </span>
            <span className={cx('content')}>Cảng ABC</span>
          </div>

          <div className={cx('container_2')}>
            <span className={cx('title')}>Thông tin cảng đến: </span>
            <span className={cx('content')}>Cảng ABC</span>
          </div>
        </div>

        <div className={cx('info-goods')}>
          <span className={cx('title-order')}>THÔNG TIN HÀNG HÓA</span>
          <div className={cx('container_list')}>

            {
              [1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                  <ItemDetailOrder key={index} />
                )
              })
            }

          </div>
        </div>

        <div className={cx('container-btn')}>
          <div className={cx('btn-rejected')} onClick={handleRejected}>
            Hủy đơn hàng
          </div>
        </div>

      </div >
    </div >
  )
}

export default DetailOrder;

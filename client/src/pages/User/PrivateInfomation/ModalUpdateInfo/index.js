import React from 'react'
import classNames from "classnames/bind";
import styles from './ModalUpdateInfo.module.scss';

const cx = classNames.bind(styles);

function ModalUpdateInfo() {

  const handleClose = () => {

  }


  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>

        <div className={cx('container-header')}>
          <span className={cx('title_modal')}>CHỈNH SỬA THÔNG TIN</span>
          <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('body_modal')}>
          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Mã số doanh nghiệp:</span>
            <input type="text" className={cx('content_input')} placeholder='Nhập mã số doanh nghiệp' />
          </div>

          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Tên doanh nghiệp:</span>
            <input type="text" className={cx('content_input')} placeholder='Nhập tên doanh nghiệp' />
          </div>

          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Địa chỉ doanh nghiệp:</span>
            <input type="text" className={cx('content_input')} placeholder='Nhập địa chỉ doanh nghiệp' />
          </div>

          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Số tài khoản:</span>
            <input type="text" className={cx('content_input')} placeholder='Nhập số tài khoản' />
          </div>
          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Ngân hàng:</span>
            <input type="text" className={cx('content_input')} placeholder='Nhập tên ngân hàng' />
          </div>
          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Số FAX:</span>
            <input type="text" className={cx('content_input')} placeholder='Nhập số FAX' />
          </div>

          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Họ và tên:</span>
            <input type="text" className={cx('content_input')} placeholder='Nhập họ và tên' />
          </div>
          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Số điện thoại:</span>
            <input type="text" className={cx('content_input')} placeholder='Nhập số điện thoại' />
          </div>
          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Địa chỉ email:</span>
            <input type="text" className={cx('content_input')} placeholder='Nhập địa chỉ email' />
          </div>
        </div>

        <div className={cx('container_btn')}>
          <div className={cx('btn_save')}>Lưu</div>
        </div>
      </div>
    </div>
  )
}

export default ModalUpdateInfo;

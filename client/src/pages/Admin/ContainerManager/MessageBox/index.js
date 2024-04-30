import React from 'react'
import classNames from "classnames/bind";
import styles from './MessageBox.module.scss';


const cx = classNames.bind(styles);

function MessageBox() {

  const handleSend = () => {

  }
  const handleClose = () => {

  }
  return (
    <div className={cx('wrapper')} onClick={handleClose}>
        <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
          <div className={cx('container-1')}>
            <span className={cx('title-modal')}>THÔNG BÁO</span>
            <span className={cx('close-modal')} onClick={handleClose}>&times;</span>
          </div>

          <div className={cx('container-2')}>
            <span className={cx('text_content')}>Bạn có chắc chắn muốn xóa container này ? Dữ liệu sẽ không thể phục hồi sau khi xóa !</span>
          </div>


          <div className={cx('container-button')}>
            <div className={cx('button-cancel')} onClick={handleClose}>
              Đóng
            </div>
            <div className={cx('button-confirm')} onClick={handleSend}>
              Xác nhận
            </div>
          </div>
        </div>
      </div>
  )
}

export default MessageBox;

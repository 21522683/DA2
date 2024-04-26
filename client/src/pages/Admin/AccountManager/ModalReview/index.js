import React from 'react'
import classNames from "classnames/bind";
import styles from './ModalReview.module.scss'
import MessageBox from './MessageBox'
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenMessageBox, setIsOpenModalReview } from '../../../../redux/sliceAdmin/userSlice';


const cx = classNames.bind(styles)

function ModalReview() {

  const dispatch = useDispatch();
  const listUsers = useSelector(state => state.userManagement.usersList);
  const indexSelected = useSelector(state => state.userManagement.indexSelected);
  const isOpenMessagebox = useSelector(state => state.userManagement.isOpenMessagebox);
  const itemSelected = listUsers[indexSelected];


  const handleClose = () => {
    dispatch(setIsOpenModalReview(false));
  }
  const handleRejected = () => {
    // dispatch hành động trong này
    dispatch(setIsOpenMessageBox(true));
  }
  const handleAccept = () => {
    // dispatch hành động trong này
  }

  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      {
        isOpenMessagebox && <MessageBox />
      }
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
        <div className={cx('container-header')}>
          <span className={cx('title_modal')}>CHI TIẾT THÔNG TIN NGƯỜI DÙNG</span>
          <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('container_body_modal')}>
          <div className={cx('body_1')}>
            <span className={cx('title_body_1')}>THÔNG TIN DOANH NGHIỆP</span>
            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Mã số doanh nghiệp:</span>
              <span className={cx('content_body_1')}>DNMT0961022#</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Tên doanh nghiệp:</span>
              <span className={cx('content_body_1')}>{itemSelected.tenDoanhNghiep}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Địa chỉ doanh nghiệp:</span>
              <span className={cx('content_body_1')}>{itemSelected.diaChi}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Số tài khoản (AC/No):</span>
              <span className={cx('content_body_1')}>{itemSelected.stk}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Ngân hàng:</span>
              <span className={cx('content_body_1')}>{itemSelected.nganHang}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Số FAX:</span>
              <span className={cx('content_body_1')}>{itemSelected.soFAX}</span>
            </div>
          </div>

          <div className={cx('body_1')}>
            <span className={cx('title_body_1')}>THÔNG TIN NGƯỜI ĐẠI DIỆN</span>
            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Họ và tên:</span>
              <span className={cx('content_body_1')}>{itemSelected.representative.hoten}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Địa chỉ email:</span>
              <span className={cx('content_body_1')}>{itemSelected.representative.email}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Số điện thoại:</span>
              <span className={cx('content_body_1')}>{itemSelected.representative.soDienThoai}</span>
            </div>
          </div>
        </div>

        <div className={cx('container_btn')}>
          <div className={cx('btn_rejected')} onClick={handleRejected}>
            <span className={cx('title_btn')}>Từ chối</span>
          </div>

          <div className={cx('btn_accept')} onClick={handleAccept}>
            <span className={cx('title_btn')}>Chấp nhận</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalReview;

import React, { useEffect } from 'react'
import classNames from "classnames/bind";
import styles from './ModalReview.module.scss'
import MessageBox from './MessageBox'
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenMessageBox, setIsOpenModalReview, setLoading } from '../../../../redux/slices/userSlice';
import baseUrl from '../../../../utils';
import customAxios from '../../../../utils/customAxios';
import { toast } from 'react-toastify';

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
  const handleAccept = async () => {
    const url = `${baseUrl}/user/verifyInfomationUser/${itemSelected._id}`;
    dispatch(setLoading(true));
    try {
      const response = await customAxios.patch(url);
      dispatch(setLoading(false));
      toast.success(response.data.message, {
        position: "top-right"
      }
      );
      window.location.reload(`${baseUrl}/admin/account`);
    } catch (error) {
      dispatch(setLoading(false));
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log();
        toast.error(error.response.data.error, {
          position: "top-right"
        }
        );
      }
    }
  }
  const handleLockAccount = async () => {
    const url = `${baseUrl}/user/updateStatusAccount/${itemSelected._id}`;
    dispatch(setLoading(true));
    try {
      const response = await customAxios.patch(url);
      dispatch(setLoading(false));
      toast.success(response.data.message, {
        position: "top-right"
      }
      );
      window.location.reload(`${baseUrl}/admin/account`);
    } catch (error) {
      dispatch(setLoading(false));
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log();
        toast.error(error.response.data.error, {
          position: "top-right"
        }
        );
      }
    }
  }

  const handleRejected = () => {
    dispatch(setIsOpenMessageBox(true));
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
            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Trạng thái hoạt động:</span>
              <span className={cx('content_body_1')}>{itemSelected.status ? "Đang hoạt động" : "Đã bị khóa"}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Trạng thái xác minh:</span>
              <span className={cx('content_body_1')}>{itemSelected.isVerify ? "Đã xác minh" : (itemSelected.infoVerify ? "Chờ xác minh" : "Chưa xác minh")}</span>
            </div>
          </div>

          <div className={cx('body_1')}>
            <span className={cx('title_body_1')}>THÔNG TIN DOANH NGHIỆP</span>
            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Mã số doanh nghiệp:</span>
              <span className={cx('content_body_1')}>{itemSelected.infoVerify.maSoDN}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Tên doanh nghiệp:</span>
              <span className={cx('content_body_1')}>{itemSelected.infoVerify.tenDoanhNghiep}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Địa chỉ doanh nghiệp:</span>
              <span className={cx('content_body_1')}>{itemSelected.infoVerify.diaChi}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Số tài khoản (AC/No):</span>
              <span className={cx('content_body_1')}>{itemSelected.infoVerify.STK}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Ngân hàng:</span>
              <span className={cx('content_body_1')}>{itemSelected.infoVerify.nganHang}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Số FAX:</span>
              <span className={cx('content_body_1')}>{itemSelected.infoVerify.soFAX}</span>
            </div>
          </div>

          <div className={cx('body_1')}>
            <span className={cx('title_body_1')}>THÔNG TIN NGƯỜI ĐẠI DIỆN</span>
            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Họ và tên:</span>
              <span className={cx('content_body_1')}>{itemSelected.hoten}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Địa chỉ email:</span>
              <span className={cx('content_body_1')}>{itemSelected.email}</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Số điện thoại:</span>
              <span className={cx('content_body_1')}>{itemSelected.infoVerify.soDienThoai}</span>
            </div>
          </div>
        </div>

        {
          (itemSelected.isVerify === false && itemSelected.infoVerify) ? (
            <div className={cx('container_btn')}>

              <div className={cx('btn_rejected')} onClick={handleLockAccount}>
                <span className={cx('title_btn')}>Khóa tài khoản</span>
              </div>

              <div className={cx('btn_rejected')} onClick={handleRejected}>
                <span className={cx('title_btn')}>Từ chối</span>
              </div>

              <div className={cx('btn_accept')} onClick={handleAccept}>
                <span className={cx('title_btn')}>Xác minh</span>
              </div>
            </div>

          ) : (
            <div className={cx('container_btn')}>
              <div className={cx('btn_rejected')} onClick={handleLockAccount}>
                <span className={cx('title_btn')}>Khóa tài khoản</span>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ModalReview;

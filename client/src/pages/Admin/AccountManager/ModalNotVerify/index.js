import React from 'react'
import classNames from "classnames/bind";
import styles from './ModalNotVerify.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModalNotVerify , setLoading} from '../../../../redux/slices/userSlice';
import baseUrl from '../../../../utils';
import customAxios from '../../../../utils/customAxios';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles)

function ModalNotVerify({getAllUsers}) {

  const dispatch = useDispatch();
  const listUsers = useSelector(state => state.userManagement.usersList);
  const indexSelected = useSelector(state => state.userManagement.indexSelected);
  const itemSelected = listUsers[indexSelected];

  const handleClose = () => {
    dispatch(setIsOpenModalNotVerify(false));
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
      getAllUsers();
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


  return (
    <div className={cx('wrapper')} onClick={handleClose}>
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
              <span className={cx('content_body_1')}>Thông tin chưa được người dùng cung cấp</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Tên doanh nghiệp:</span>
              <span className={cx('content_body_1')}>Thông tin chưa được người dùng cung cấp</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Địa chỉ doanh nghiệp:</span>
              <span className={cx('content_body_1')}>Thông tin chưa được người dùng cung cấp</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Số tài khoản (AC/No):</span>
              <span className={cx('content_body_1')}>Thông tin chưa được người dùng cung cấp</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Ngân hàng:</span>
              <span className={cx('content_body_1')}>Thông tin chưa được người dùng cung cấp</span>
            </div>

            <div className={cx('container_body_1')}>
              <span className={cx('title_content')}>Số FAX:</span>
              <span className={cx('content_body_1')}>Thông tin chưa được người dùng cung cấp</span>
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
              <span className={cx('content_body_1')}>Thông tin chưa được người dùng cung cấp</span>
            </div>
          </div>
        </div>

        <div className={cx('container_btn')}>
          <div className={cx('btn_rejected')} onClick={handleLockAccount}>
            <span className={cx('title_btn')}>Khóa tài khoản</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalNotVerify;

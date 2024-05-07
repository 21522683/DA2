import React from 'react'
import classNames from "classnames/bind";
import styles from './PrivateInfomation.module.scss';
import ModalUpdateInfo from './ModalUpdateInfo';

const cx = classNames.bind(styles);

function PrivateInfomation() {
    return (
        <div className={cx('container_main')}>
            <div className={cx('container_body')}>
                <span className={cx('title_body')}>TRẠNG THÁI XÁC MINH</span>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Thông tin xác minh:</span>
                    <div className={cx('content')}>Đã xác minh</div>
                </div>
                <span className={cx('title_body')}>THÔNG TIN DOANH NGHIỆP</span>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Mã số doanh nghiệp:</span>
                    <div className={cx('content')}>DN001# TCLV</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Tên doanh nghiệp:</span>
                    <div className={cx('content')}>Công ty sản xuất hàng tiêu dùng Phước Long Châu</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Địa chỉ doanh nghiệp:</span>
                    <div className={cx('content')}>Số 7A, Tân Phú, Thới Bình, Cà mau</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Số tài khoản:</span>
                    <div className={cx('content')}>102063757044</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Ngân hàng:</span>
                    <div className={cx('content')}>VIETCOMBANK</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Số FAX:</span>
                    <div className={cx('content')}>124.2288397850</div>
                </div>
                <span className={cx('title_body')}>THÔNG TIN ĐẠI DIỆN</span>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Họ và tên:</span>
                    <div className={cx('content')}>Phan Trọng Tính</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Số điện thoại:</span>
                    <div className={cx('content')}>0379361211</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Địa chỉ email:</span>
                    <div className={cx('content')}>phantrongtinh@gmail.com</div>
                </div>
            </div>

            <div className={cx('container_btn')}>
                <div className={cx('btn_red')}>Đăng xuất</div>
                <div className={cx('btn_main')}>Gửi yêu cầu xác minh</div>
                <div className={cx('btn_main')}>Chỉnh sửa thông tin</div>
            </div>
        </div>
    )
}

export default PrivateInfomation

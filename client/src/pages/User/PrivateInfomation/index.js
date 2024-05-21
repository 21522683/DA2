import React, { useEffect } from 'react'
import classNames from "classnames/bind";
import styles from './PrivateInfomation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import ModalUpdateInfo from './ModalUpdateInfo/index';
import { fetchDataGetCurrentUser, setIsOpenModalSendRequireVerify, setIsOpenModalUpdateInfo } from '../../../redux/slices/userSlice';
import ModalSendRequireVerify from './ModaSendRequireVerify';
import HashLoader from "react-spinners/HashLoader";


const cx = classNames.bind(styles);

function PrivateInfomation() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.userManagement.isLoading);
    const currentUser = useSelector(state => state.userManagement.currentUser);
    const isOpenModalUpdateInfo = useSelector(state => state.userManagement.isOpenModalUpdateInfo);
    const isOpenModalSendRequireVerify = useSelector(state => state.userManagement.isOpenModalSendRequireVerify);

    const handleClickLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/'
    }
    useEffect(() => {
        dispatch(fetchDataGetCurrentUser());
    }, []);

    const hanldClickVerify = () => {
        dispatch(setIsOpenModalSendRequireVerify(true));
    }

    const hanldleClickUpdate = () => {
        dispatch(setIsOpenModalUpdateInfo(true));
    }

    return (
        <div className={cx('container_main')}>
            {
                loading && (
                    <div className={cx("container-loader")}>
                        <HashLoader
                            color="#0088af"
                            loading={loading}
                            size={80}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            className={cx("loader-feedback")}
                        />
                    </div>
                )
            }
            {
                isOpenModalSendRequireVerify && <ModalSendRequireVerify />
            }
            {
                isOpenModalUpdateInfo && <ModalUpdateInfo />
            }
            <div className={cx('container_body')}>
                <span className={cx('title_body')}>TRẠNG THÁI XÁC MINH</span>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Trạng thái hoạt động:</span>
                    <div className={cx('content')}>{currentUser.status ? "Đang hoạt động" : "Đang bị khóa"}</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Trạng thái xác minh:</span>
                    <div className={cx('content')}>{currentUser.isVerify ? "Đã xác minh" : (currentUser.infoVerify ? "Chờ xác minh" : "Chưa xác minh")}</div>
                </div>
                <span className={cx('title_body')}>THÔNG TIN DOANH NGHIỆP</span>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Mã số doanh nghiệp:</span>
                    <div className={cx('content')}>{currentUser.infoVerify ? currentUser.infoVerify.maSoDN : "Thông tin chưa được xác minh"}</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Tên doanh nghiệp:</span>
                    <div className={cx('content')}>{currentUser.infoVerify ? currentUser.infoVerify.tenDoanhNghiep : "Thông tin chưa được xác minh"}</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Địa chỉ doanh nghiệp:</span>
                    <div className={cx('content')}>{currentUser.infoVerify ? currentUser.infoVerify.diaChi : "Thông tin chưa được xác minh"}</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Số tài khoản:</span>
                    <div className={cx('content')}>{currentUser.infoVerify ? currentUser.infoVerify.STK : "Thông tin chưa được xác minh"}</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Ngân hàng:</span>
                    <div className={cx('content')}>{currentUser.infoVerify ? currentUser.infoVerify.nganHang : "Thông tin chưa được xác minh"}</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Số FAX:</span>
                    <div className={cx('content')}>{currentUser.infoVerify ? currentUser.infoVerify.soFAX : "Thông tin chưa được xác minh"}</div>
                </div>
                <span className={cx('title_body')}>THÔNG TIN ĐẠI DIỆN</span>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Họ và tên:</span>
                    <div className={cx('content')}>{currentUser.hoten}</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Số điện thoại:</span>
                    <div className={cx('content')}>{currentUser.infoVerify ? currentUser.infoVerify.soDienThoai : "Thông tin chưa được xác minh"}</div>
                </div>
                <div className={cx('container_info')}>
                    <span className={cx('title')}>Địa chỉ email:</span>
                    <div className={cx('content')}>{currentUser.email}</div>
                </div>
            </div>

            {
                currentUser.status === false ? (
                    <div className={cx('container_btn')}>
                        <div className={cx('btn_red')} onClick={handleClickLogout}>Đăng xuất</div>
                    </div>

                ) : (
                    currentUser.isVerify ? (
                        <div className={cx('container_btn')}>
                            <div className={cx('btn_red')} onClick={handleClickLogout}>Đăng xuất</div>
                            <div className={cx('btn_main')} onClick={hanldleClickUpdate}>Chỉnh sửa thông tin</div>
                        </div>
                    ) : (
                        currentUser.infoVerify ? (
                            <div className={cx('container_btn')}>
                                <div className={cx('btn_red')} onClick={handleClickLogout}>Đăng xuất</div>
                                <div className={cx('btn_main')} onClick={hanldClickVerify}>Xác minh lại thông tin</div>
                            </div>
                        ) : (
                            <div className={cx('container_btn')}>
                                <div className={cx('btn_red')} onClick={handleClickLogout}>Đăng xuất</div>
                                <div className={cx('btn_main')} onClick={hanldClickVerify}>Xác minh thông tin</div>
                            </div>
                        )
                    )
                )
            }
        </div>
    )
}

export default PrivateInfomation;

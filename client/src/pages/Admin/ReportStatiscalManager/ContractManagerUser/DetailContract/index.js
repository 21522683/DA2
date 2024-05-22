import React from 'react'
import classNames from "classnames/bind";
import styles from './DetailContract.module.scss';
import formatMoney from '../../../../../utils/formatMoney.js';
import IMAGES from '../../../../../assets/images/index.js';
import { useDispatch, useSelector } from 'react-redux';
import convertDate from '../../../../../utils/convertDate';
import { setIsOpenModalDetail } from '../../../../../redux/slices/contractSlice.js';
const cx = classNames.bind(styles);

function DetailContract() {
    const dispatch = useDispatch();
    const contractsList = useSelector(state => state.contractManagement.contractsList);
    const indexSelected = useSelector(state => state.contractManagement.indexSelected);
    const itemSelected = contractsList[indexSelected];
    const admin = useSelector(state => state.userManagement.infoAdmin);


    const handleClose = () => {
        dispatch(setIsOpenModalDetail(false));
    }
    function getLastName(fullName) {
        fullName = fullName.trim();
        const parts = fullName.split(' ');
        const lastName = parts[parts.length - 1];
        return lastName;
    }

    return (
        <div className={cx('wrapper')} onClick={handleClose}>
            <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>

                <div className={cx('container-header')}>
                    <span className={cx('title_modal')}>HỢP ĐỒNG</span>
                    <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
                </div>

                <div className={cx('scroll_body')}>
                    <div className={cx('container_first')}>
                        <div className={cx('container-status')}>
                            <span className={cx('title')}>Trạng thái: </span>
                            {
                                itemSelected.trangThai ? (<span className={cx('accept')}>Đã ký kết</span>) : (<span className={cx('status')}>Chưa ký kết</span>)
                            }

                        </div>

                        <div className={cx('container-status')}>
                            <span className={cx('title')}>Mã số hợp đồng: </span>
                            <span className={cx('content')}>{itemSelected._id}</span>
                        </div>

                        <div className={cx('container-status')}>
                            <span className={cx('title')}>Ngày tạo hợp đồng: </span>
                            <span className={cx('content')}>{convertDate(itemSelected.ngayTao)}</span>
                        </div>

                    </div>

                    <div className={cx('info-order')}>
                        <span className={cx('title-order')}>THÔNG TIN NGƯỜI SỬ DỤNG DỊCH VỤ</span>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Tên đại diện: </span>
                                <span className={cx('content')}>{itemSelected.hoaDon.keKhaiHH.donHang.user.hoten}</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số tài khoản:</span>
                                <span className={cx('content')}>{itemSelected.hoaDon.keKhaiHH.donHang.user.infoVerify.STK} - {itemSelected.hoaDon.keKhaiHH.donHang.user.infoVerify.nganHang}</span>
                            </div>
                        </div>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số điện thoại: </span>
                                <span className={cx('content')}>{itemSelected.hoaDon.keKhaiHH.donHang.user.infoVerify.soDienThoai}</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Địa chỉ email: </span>
                                <span className={cx('content')}>{itemSelected.hoaDon.keKhaiHH.donHang.user.email}</span>
                            </div>
                        </div>

                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Tên doanh nghiệp:</span>
                                <span className={cx('content')}>{itemSelected.hoaDon.keKhaiHH.donHang.user.infoVerify.tenDoanhNghiep}</span>
                            </div>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số FAX:</span>
                                <span className={cx('content')}>{itemSelected.hoaDon.keKhaiHH.donHang.user.infoVerify.soFAX}</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('info-order')}>
                        <span className={cx('title-order')}>THÔNG TIN NGƯỜI CUNG CẤP DỊCH VỤ</span>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Tên đại diện: </span>
                                <span className={cx('content')}>{admin.hoten}</span>
                            </div>



                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số tài khoản:</span>
                                <span className={cx('content')}>{admin.infoVerify.STK} - {admin.infoVerify.nganHang}</span>
                            </div>

                        </div>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số điện thoại: </span>
                                <span className={cx('content')}>{admin.infoVerify.soDienThoai}</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Địa chỉ email: </span>
                                <span className={cx('content')}>{admin.email}</span>
                            </div>
                        </div>

                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Tên doanh nghiệp:</span>
                                <span className={cx('content')}>{admin.infoVerify.tenDoanhNghiep}</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số FAX:</span>
                                <span className={cx('content')}>{admin.infoVerify.soFAX}</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('info-order')}>
                        <span className={cx('title-order')}>THÔNG TIN TÀU SỬ DỤNG</span>
                        {
                            itemSelected.hoaDon.dsVessel.map((item, index) => {
                                return (
                                    <div className={cx('container_1')} key={item._id}>
                                        <div className={cx('container-date')}>
                                            <span className={cx('title')}>Số hiệu tàu: </span>
                                            <span className={cx('content')}>{item.soHieu}</span>
                                        </div>

                                        <div className={cx('container-date')}>
                                            <span className={cx('title')}>Tên tàu: </span>
                                            <span className={cx('content')}>{item.tenTau}</span>
                                        </div>

                                        <div className={cx('container-date')}>
                                            <span className={cx('title')}>Tải trọng (tấn): </span>
                                            <span className={cx('content')}>{item.taiTrong}</span>
                                        </div>

                                        <div className={cx('container-date')}>
                                            <span className={cx('title')}>Giá thuê: </span>
                                            <span className={cx('content')}>{formatMoney(item.giaThue)}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={cx('info-order')}>
                        <span className={cx('title-order')}>THÔNG TIN CONTAINER SỬ DỤNG</span>
                        {
                            itemSelected.hoaDon.dsContainer.map((item, index) => {
                                return (
                                    <div className={cx('container_1')} key={item._id}>
                                        <div className={cx('container-date')}>
                                            <span className={cx('title')}>Số hiệu: </span>
                                            <span className={cx('content')}>{item.soHieu}</span>
                                        </div>

                                        <div className={cx('container-date')}>
                                            <span className={cx('title')}>Loại: </span>
                                            <span className={cx('content')}>{item.loaiContainer.tenLoai}</span>
                                        </div>

                                        <div className={cx('container-type')}>
                                            <span className={cx('title')}>Thể tích (m3): </span>
                                            <span className={cx('content')}>{item.loaiContainer.theTichChua}</span>
                                        </div>

                                        <div className={cx('container-type')}>
                                            <span className={cx('title')}>Trọng lượng (tấn): </span>
                                            <span className={cx('content')}>{item.loaiContainer.trongLuong}</span>
                                        </div>

                                        <div className={cx('container-type')}>
                                            <span className={cx('title')}>Giá thuê: </span>
                                            <span className={cx('content')}>{formatMoney(item.loaiContainer.giaThue)}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={cx('info-order')}>
                        <span className={cx('title-order')}>THÔNG TIN ĐƠN HÀNG</span>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Ngày đi dự kiến: </span>
                                <span className={cx('content')}>{convertDate(itemSelected.hoaDon.keKhaiHH.donHang.ngayDiDuKien)}</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Ngày đến dự kiến: </span>
                                <span className={cx('content')}>{convertDate(itemSelected.hoaDon.keKhaiHH.donHang.ngayDenDuKien)}</span>
                            </div>

                            <div className={cx('container-type')}>
                                <span className={cx('title')}>Loại hình: </span>
                                <span className={cx('content')}>{itemSelected.hoaDon.keKhaiHH.donHang.loaiHinh}</span>
                            </div>
                        </div>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Thông tin cảng đi: </span>
                                <span className={cx('content')}>{itemSelected.hoaDon.keKhaiHH.donHang.cangDi}</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Thông tin cảng đến: </span>
                                <span className={cx('content')}>{itemSelected.hoaDon.keKhaiHH.donHang.cangDen}</span>
                            </div>
                        </div>

                    </div>

                    <div className={cx('spacer')}></div>

                    <div className={cx('info-pay')}>
                        <span className={cx('title_info')}>CÁC ĐIỀU KHOẢN KÝ KẾT</span>
                        <div className={cx('container_term')}>
                            <span className={cx('title')}>Điều 1:  Về dịch vụ </span>
                            <span className={cx('content')}>Đảm bảo mọi thông tin về tàu thuyền, container, hàng hóa, và trị giá hợp đồng được đảm bảo chính
                                xác theo như hóa đơn đã cung cấp.</span>
                        </div>

                        <div className={cx('container_term')}>
                            <span className={cx('title')}>Điều 2:  Điều khoản thanh toán </span>
                            <span className={cx('content')}>Thanh toán thông qua ngân hàng VIETCOMBANK của ông Phan Trọng Tính, đại diện bên cung cấp dịch vụ.</span>
                        </div>

                        <div className={cx('container_term')}>
                            <span className={cx('title')}>Điều 3:  Điều khoản vận chuyển </span>
                            <span className={cx('content')}>Đảm bảo vận chuyển đúng thời gian dự kiến đi và đến trong hợp động, không được quá thời gian dự kiến. </span>
                            <span className={cx('content')}>Đảm bảo vận chuyển đúng địa điểm cảng đi và đến theo như bản kê khai hàng hóa và đơn hàng. </span>
                        </div>

                        <div className={cx('container_term')}>
                            <span className={cx('title')}>Điều 1:  Về dịch vụ </span>
                            <span className={cx('content')}>Đảm bảo mọi thông tin về tàu thuyền, container, hàng hóa, và trị giá hợp đồng được đảm bảo chính
                                xác theo như hóa đơn đã cung cấp.</span>
                        </div>

                        <div className={cx('container_term')}>
                            <span className={cx('title')}>Điều 4:  Tài liệu của dịch vụ </span>
                            <span className={cx('content')}>Đảm bảo đầy đủ các loại tài liệu bao gồm: Bản kê khai hàng hóa, Hóa đơn, Hợp đồng, Hóa đơn thuê tàu và container</span>
                        </div>

                        <div className={cx('container_term')}>
                            <span className={cx('title')}>Điều 5:  Thỏa thuận </span>
                            <span className={cx('content')}>Trong quá trình thực hiện hợp đồng, mọi tranh chấp không đạt được thỏa thuận hòa giải sẽ do Trung tâm quốc tế thuộc Phòng Thương mại và Công nghiệp Việt Nam giải quyết. Phán quyết của Trung tâm này là cuối cùng và ràng buộc cả hai bên. Nguồn cấp dữ liệu cho trọng tài và các khoản phí khác sẽ do bên thua kiện chịu.</span>
                        </div>
                    </div>

                    <div className={cx('container_sign_contract')}>
                        <div className={cx('container_sign')}>
                            <span className={cx('title_sign')}>BÊN SỬ DỤNG DỊCH VỤ</span>
                            <span className={cx('content_sign')}>{getLastName(admin.hoten)}</span>
                            <span className={cx('name_sign')}>{admin.hoten}</span>
                        </div>
                        {
                            itemSelected.trangThai && (<img className={cx('moc_do')} src={IMAGES.moc_do} alt='mộc đỏ' />)
                        }

                        <div className={cx('container_sign')}>
                            <span className={cx('title_sign')}>BÊN CUNG CẤP DỊCH VỤ</span>
                            <span className={cx('content_sign')}>{getLastName(itemSelected.hoaDon.keKhaiHH.donHang.user.hoten)}</span>
                            <span className={cx('name_sign')}>{itemSelected.hoaDon.keKhaiHH.donHang.user.hoten}</span>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default DetailContract;

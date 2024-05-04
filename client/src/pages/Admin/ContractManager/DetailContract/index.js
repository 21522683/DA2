import React from 'react'
import classNames from "classnames/bind";
import styles from './DetailContract.module.scss';
import formatMoney from '../../../../utils/formatMoney.js';
import IMAGES from '../../../../assets/images/index.js';

const cx = classNames.bind(styles);

function DetailContract() {
    const handleClose = () => {

    }

    const handleAccept = () => {

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
                            <span className={cx('accept')}>Chưa ký kết</span>
                        </div>

                        <div className={cx('container-status')}>
                            <span className={cx('title')}>Mã số hợp đồng: </span>
                            <span className={cx('content')}>TPV03/EX</span>
                        </div>

                        <div className={cx('container-status')}>
                            <span className={cx('title')}>Ngày tạo hợp đồng: </span>
                            <span className={cx('content')}>11/01/2024</span>
                        </div>

                    </div>

                    <div className={cx('info-order')}>
                        <span className={cx('title-order')}>THÔNG TIN NGƯỜI SỬ DỤNG DỊCH VỤ</span>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Tên đại diện: </span>
                                <span className={cx('content')}>Phạm Nguyễn Trường An</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Tên doanh nghiệp:</span>
                                <span className={cx('content')}>Công ty cổ phần tiêu dùng Macdison</span>
                            </div>

                        </div>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số điện thoại: </span>
                                <span className={cx('content')}>0379362122</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Địa chỉ email: </span>
                                <span className={cx('content')}>phantrongtinh15082003@gmail.com</span>
                            </div>
                        </div>

                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số FAX:</span>
                                <span className={cx('content')}>4441020637570</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số tài khoản:</span>
                                <span className={cx('content')}>1020637570 - VIETCOMBANK</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('info-order')}>
                        <span className={cx('title-order')}>THÔNG TIN NGƯỜI CUNG CẤP DỊCH VỤ</span>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Tên đại diện: </span>
                                <span className={cx('content')}>Phan Trọng tính</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Tên doanh nghiệp:</span>
                                <span className={cx('content')}>Công ty TNHH dịch vụ xuất nhập khẩu SeaPort</span>
                            </div>

                        </div>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số điện thoại: </span>
                                <span className={cx('content')}>0379362122</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Địa chỉ email: </span>
                                <span className={cx('content')}>phantrongtinh15082003@gmail.com</span>
                            </div>
                        </div>

                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số FAX:</span>
                                <span className={cx('content')}>4441020637570</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số tài khoản:</span>
                                <span className={cx('content')}>1020637570 - VIETCOMBANK</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('info-order')}>
                        <span className={cx('title-order')}>THÔNG TIN TÀU SỬ DỤNG</span>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Số hiệu tàu: </span>
                                <span className={cx('content')}>QNg90999TS</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Tên tàu: </span>
                                <span className={cx('content')}>COSCO-SHIPPING-101</span>
                            </div>
                        </div>
                        <div className={cx('container_1')}>
                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Trọng lượng (tấn): </span>
                                <span className={cx('content')}>1204.3</span>
                            </div>

                            <div className={cx('container-date')}>
                                <span className={cx('title')}>Tải trọng (tấn): </span>
                                <span className={cx('content')}>2002.4</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('info-order')}>
                        <span className={cx('title-order')}>THÔNG TIN CONTAINER SỬ DỤNG</span>
                        {
                            [1, 2].map(() => {
                                return (
                                    <div className={cx('container_1')}>
                                        <div className={cx('container-date')}>
                                            <span className={cx('title')}>Số hiệu: </span>
                                            <span className={cx('content')}>QNg90999TS</span>
                                        </div>

                                        <div className={cx('container-date')}>
                                            <span className={cx('title')}>Trọng lượng (tấn): </span>
                                            <span className={cx('content')}>2002.4</span>
                                        </div>

                                        <div className={cx('container-type')}>
                                            <span className={cx('title')}>Thể tích (m3): </span>
                                            <span className={cx('content')}>1204.3</span>
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
                            <span className={cx('content_sign')}>An</span>
                            <span className={cx('name_sign')}>Phạm Nguyễn TRường An</span>
                        </div>

                        <img className={cx('moc_do')} src={IMAGES.moc_do} alt='mộc đỏ' />

                        <div className={cx('container_sign')}>
                            <span className={cx('title_sign')}>BÊN CUNG CẤP DỊCH VỤ</span>
                            <span className={cx('content_sign')}>Tính</span>
                            <span className={cx('name_sign')}>Phan Trọng Tính</span>
                        </div>
                    </div>

                    <div className={cx('container-btn')}>
                        <div className={cx('btn_accpet')}>
                            XUẤT FILE
                        </div>
                    </div>

                    {/* <div className={cx('container-btn')}>
                        <div className={cx('btn_accpet')}>
                            GỬI ĐẾN NGƯỜI DÙNG XÁC NHẬN KÝ KẾT
                        </div>
                    </div> */}
                </div>



            </div >
        </div >
    )
}

export default DetailContract;

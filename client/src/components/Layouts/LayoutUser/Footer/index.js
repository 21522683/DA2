import React from 'react'
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('container-footer')}>
            <div className={cx('container-start')}>
                <div className={cx('container-img')}>
                    <img className={cx('img-logo')} src={images.logo} alt='logo' />
                </div>

                <div className={cx('container-text')}>
                    <span className={cx('text-title')}>KHÁM PHÁ</span>
                    <div className={cx('container-content')}>
                        <span className={cx('text-content')}>Chúng ta cần làm những gì?</span>
                        <span className={cx('text-content')}>Sử dụng dịch vụ hiệu quả</span>
                        <span className={cx('text-content')}>Đóng góp ý kiến</span>
                    </div>
                </div>

                <div className={cx('container-text')}>
                    <span className={cx('text-title')}>VỀ CHÚNG TÔI</span>
                    <div className={cx('container-content')}>
                        <span className={cx('text-content')}>Thông tin chung</span>
                        <span className={cx('text-content')}>Tin cậy & An toàn</span>
                        <span className={cx('text-content')}>Hỗ trợ & Giúp đỡ</span>
                        <span className={cx('text-content')}>Thông tin liên hệ</span>
                        <span className={cx('text-content')}>Chính sách</span>
                    </div>
                </div>

                <div className={cx('container-text')}>
                    <span className={cx('text-title')}>DOANH NGHIỆP</span>
                    <div className={cx('container-content')}>
                        <span className={cx('text-content')}>Hoạt động như thế nào?</span>
                        <span className={cx('text-content')}>Những khoản phí</span>
                        <span className={cx('text-content')}>Những đối tác</span>
                        <span className={cx('text-content')}>Chiến lược</span>
                    </div>
                </div>

                <div className={cx('container-text')}>
                    <span className={cx('text-title')}>LIÊN HỆ</span>
                    <div className={cx('container-content')}>
                        <span className={cx('text-content')}>Hotline: 1900 1886</span>
                        <span className={cx('text-content')}>Email: seaportvn@gmail.com</span>
                        <span className={cx('text-content')}>Facebook</span>
                        <span className={cx('text-content')}>Youtube</span>
                        <span className={cx('text-content')}>Cộng đồng của chúng tôi</span>
                    </div>
                </div>


            </div>

            <div className={cx('container-middle')}></div>

            <div className={cx('container-end')}>
                <span className={cx('text-end')}>Điều khoản sử dụng</span>
                <span className={cx('text-end')}>Chính sách cá nhân</span>
                <span className={cx('text-end')}>Khả năng tiếp cận</span>
                <span className={cx('text-end')}>Chính sách Cookie</span>
                <span className={cx('text-end')}>Dịch vụ cung cấp</span>
                <span className={cx('text-end')}>2024 @ Copyright, Seaport Inc</span>
            </div>
        </div>
    )
}

export default Footer
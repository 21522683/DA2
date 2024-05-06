import React from 'react';
import classNames from "classnames/bind";
import styles from './Home.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Images from '../../../assets/images/index'
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('container')}>
      <div className={cx('slider')}>
        <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showIndicators={true} showThumbs={false} width='100%'>
          <img src={Images.slide1} alt='slider' />
          <img src={Images.slide3} alt='slider' />
          <img src={Images.slide4} alt='slider' />
        </Carousel>
      </div>

      <div className={cx('container_first')}>
        <div className={cx('item_first')}>
          <div className={cx('header')}>
            <img src={Images.guide1} alt='icon1' className={cx('icon')} />
            <span className={cx('title')}>Sử dụng dịch vụ</span>
          </div>
          <span className={cx('content')}>Bạn cần đăng ký tài khoản và đăng nhập vào hệ thống để sử dụng dịch vụ của chúng tôi. Bạn có thể đăng ký yêu cầu xuất nhập khẩu hàng hóa xủa bạn</span>
          <div className={cx('btn_see')}>Bắt đầu</div>
        </div>

        <div className={cx('item_first')}>
          <div className={cx('header')}>
            <img src={Images.guide1} alt='icon1' className={cx('icon')} />
            <span className={cx('title')}>Sử dụng dịch vụ</span>
          </div>
          <span className={cx('content')}>Bạn cần đăng ký tài khoản và đăng nhập vào hệ thống để sử dụng dịch vụ của chúng tôi. Bạn có thể đăng ký yêu cầu xuất nhập khẩu hàng hóa xủa bạn</span>
          <div className={cx('btn_see')}>Bắt đầu</div>
        </div>
      </div>

      <div className={cx('container_second')}>
        <span className={cx('title')}>GIẢI PHÁP CỦA CHÚNG TÔI</span>
        <span className={cx('content')}>Chúng tôi cung cấp dịch vụ xuất nhập khẩu hàng hóa tại cảng biển, tích hợp RPA (Robotic Process Automatic) để hỗ trợ tự động xét duyệt và triển khai đơn hàng của bạn, giúp cho việc quản lý toàn bộ hệ thống trở nên dễ dàng hơn và tiết kiệm tài nguyên, chi phí, nhân lực. Việc triển khai hệ thống với RPA là một ý tưởng mang tính đột phá của chúng tôi dành cho khách hàng, góp phần mang lại nhiều tiện lợi và lợi ích to lớn cho người sử dụng. Sứ mệnh của chúng tôi là mạng lại chất lượng dịch vụ tốt nhất đến với khách hàng trên nền tảng website mà chúng tôi cung cấp, cam kết hỗ trợ tận tình, là nơi uy tín và đáng tin cậy để khách hàng trao gửi niềm tin.</span>
      </div>

      <div className={cx('container_second')}>
        <span className={cx('title')}>NHỮNG LĨNH VỰC MÀ CHÚNG TÔI CUNG CẤP DỊCH VỤ</span>
        <div className={cx('slider_ngang')}>
          {/* carousel ngang chỗ này */}
        </div>
      </div>

    </div>
  )
}

export default Home;

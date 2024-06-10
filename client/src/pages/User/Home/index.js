import React from 'react';
import classNames from "classnames/bind";
import styles from './Home.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Images from '../../../assets/images/index';
import CarouselMulti from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const cx = classNames.bind(styles);

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

function Home() {
  return (
    <div className={cx('container')}>
      <div className={cx('slider')}>
        <span className={cx('text_banner')}>SEAPORT</span>
        <span className={cx('text_banner2')}>Sự lựa chọn tốt nhất cho bạn về xuất nhập khẩu tại cảng biển</span>
        <img className={cx('img_banner')} src={Images.slide3} alt='slider' />
      </div>

      <div className={cx('container_first')}>
        <div className={cx('item_first')}>
          <div className={cx('header')}>
            <img src={Images.guide1} alt='icon1' className={cx('icon')} />
            <span className={cx('title')}>Sử dụng dịch vụ</span>
          </div>
          <span className={cx('content')}>Bạn cần đăng ký tài khoản và đăng nhập vào hệ thống để sử dụng dịch vụ của chúng tôi. Bạn có thể đăng ký yêu cầu xuất nhập khẩu hàng hóa của bạn.</span>
          <div className={cx('btn_see')}>Bắt đầu</div>
        </div>

        <div className={cx('item_first')}>
          <div className={cx('header')}>
            <img src={Images.guide2} alt='icon1' className={cx('icon')} />
            <span className={cx('title')}>Hướng dẫn dành cho bạn</span>
          </div>
          <span className={cx('content')}>Nếu bạn đang thắc mắc về quy trình sử dụng dịch vụ của chúng tôi, bạn có thể xem chi tiết hướng dẫn từng bước. Bấm vào xem ngay !</span>
          <div className={cx('btn_see')}>Xem chi tiết</div>
        </div>
      </div>

      <div className={cx('container_second')}>
        <span className={cx('title')}>GIẢI PHÁP CỦA CHÚNG TÔI</span>
        <span className={cx('content')}>Chúng tôi cung cấp dịch vụ xuất nhập khẩu hàng hóa tại cảng biển, tích hợp RPA (Robotic Process Automatic) để hỗ trợ tự động xét duyệt và triển khai đơn hàng của bạn, giúp cho việc quản lý toàn bộ hệ thống trở nên dễ dàng hơn và tiết kiệm tài nguyên, chi phí, nhân lực. Việc triển khai hệ thống với RPA là một ý tưởng mang tính đột phá của chúng tôi dành cho khách hàng, góp phần mang lại nhiều tiện lợi và lợi ích to lớn cho người sử dụng. Sứ mệnh của chúng tôi là mạng lại chất lượng dịch vụ tốt nhất đến với khách hàng trên nền tảng website mà chúng tôi cung cấp, cam kết hỗ trợ tận tình, là nơi uy tín và đáng tin cậy để khách hàng trao gửi niềm tin.</span>
      </div>

      <div className={cx('container_second')}>
        <span className={cx('title')}>NHỮNG LĨNH VỰC MÀ CHÚNG TÔI CUNG CẤP DỊCH VỤ</span>
        <div className={cx('slider_ngang')}>
          <CarouselMulti
            itemClass={cx('carousel')}
            responsive={responsive}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            showDots={true}
          >
            <div className={cx('item_carousel')}>
              <img className={cx('image_item')} src={Images.congnghe} alt='item' />
              <span className={cx('text_item')}>Công nghệ</span>
            </div>
            <div className={cx('item_carousel')}>
              <img className={cx('image_item')} src={Images.thoitrang} alt='item' />
              <span className={cx('text_item')}>Thời trang</span>
            </div>
            <div className={cx('item_carousel')}>
              <img className={cx('image_item')} src={Images.hoachat} alt='item' />
              <span className={cx('text_item')}>Hóa chất</span>
            </div>
            <div className={cx('item_carousel')}>
              <img className={cx('image_item')} src={Images.maymoc} alt='item' />
              <span className={cx('text_item')}>Máy móc</span>
            </div>
            <div className={cx('item_carousel')}>
              <img className={cx('image_item')} src={Images.yte} alt='item' />
              <span className={cx('text_item')}>Y tế</span>
            </div>
            <div className={cx('item_carousel')}>
              <img className={cx('image_item')} src={Images.hangtieudung} alt='item' />
              <span className={cx('text_item')}>Hàng tiêu dùng</span>
            </div>
          </CarouselMulti>
        </div>
      </div>

      <div className={cx('slider2')}>
        <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showIndicators={true} showThumbs={false}>
          <img src={Images.slide1} alt='slider' />
          <img src={Images.slide3} alt='slider' />
          <img src={Images.slide4} alt='slider' />
        </Carousel>
      </div>
    </div>
  )
}

export default Home;

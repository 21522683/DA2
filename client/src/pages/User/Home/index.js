import React, { useState } from 'react'
import GuideCard from '../../../components/GuideCard';
import images from '../../../assets/images';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import FieldCard from '../../../components/FieldCard';
import { fieldProduct } from './data';
const cx = classNames.bind(styles);

function Home() {
  const [guideCard1, setGuideCard1] = useState ({icon: images.guide1, title: "Sử dụng dịch vụ", description: "Bạn cần đăng ký tài khoản và đăng nhập vào hệ thống để sử dụng dịch vụ của chúng tôi. Bạn có thể đăng ký yêu cầu xuất nhập khẩu hàng hóa của bạn", button: "Bắt đầu"})
  const [guideCard2, setGuideCard2] = useState ({icon: images.guide2, title: "Hướng dẫn dành cho bạn", description: "Nếu bạn đang thắc mắc về quy trình sử dụng dịch vụ của chúng tôi, bạn có thể xem chi tiết hướng dẫn từng bước. Bấm vào xem ngay !", button: "Xem chi tiết"})
  const itemFieldProduct = fieldProduct.map(fieldProduct => 
    <li key={fieldProduct.id}>
      <FieldCard image={fieldProduct.image}
        field={fieldProduct.field}
      />
    </li>
  )

  return (
    <div className={cx('container')}>
      <img src={images.bgHome} style={{width: '100%'}}/>
      
      <>
      <div className={cx('guideContainer')}>
        <GuideCard 
          icon={guideCard1.icon}
          title={guideCard1.title}
          description={guideCard1.description}
          button={guideCard1.button}
        />

        <GuideCard 
          icon={guideCard2.icon}
          title={guideCard2.title}
          description={guideCard2.description}
          button={guideCard2.button}
        />
      </div>
      </>

      <>
      <h1 className={cx('title')}>
        GIẢI PHÁP CỦA CHÚNG TÔI
      </h1>

      <p className={cx('content')}>
        Chúng tôi cung cấp dịch vụ xuất nhập khẩu hàng hóa tại cảng biển, tích hợp RPA (Robotic Process Automatic) để hỗ trợ bạn tự động cập nhật hồ sơ, tạo hồ sơ cho bạn một cách nhanh chóng và xuất báo cáo chi thiết về những giao dịch, giấy tờ hồ sơ và hợp đồng có liên quan đến đơn hàng của bạn.
      </p>
      </>

      <>
      <h1 className={cx('title')}>
        Lĩnh vực hàng hóa mà chúng tôi hỗ trợ
      </h1>

      <div className={cx('listContainer')}>
        <ul className={cx('listFieldProduct')}>
            {itemFieldProduct}
        </ul>
      </div>
      </>

    </div>
  )
}

export default Home;

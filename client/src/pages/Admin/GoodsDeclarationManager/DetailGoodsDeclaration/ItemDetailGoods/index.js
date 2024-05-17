import React from 'react'
import classNames from "classnames/bind";
import styles from './ItemDetailGoods.module.scss';
import convertDate from '../../../../../utils/convertDate';

const cx = classNames.bind(styles);


function ItemDetailGoods({ itemHangHoa }) {

  return (
    <div className={cx('detail_goods')}>
      <div className={cx('container_hh')}>
        <span className={cx('title')}>Tên hàng hóa:</span>
        <span className={cx('content')}>{itemHangHoa.tenHH}</span>
      </div>
      <div className={cx('container_hh')}>
        <span className={cx('title')}>Nhà cung cấp:</span>
        <span className={cx('content')}>{itemHangHoa.nhaCungCap}</span>
      </div>
      <div className={cx('container_hh')}>
        <span className={cx('title')}>Lĩnh vực:</span>
        <span className={cx('content')}>{itemHangHoa.linhVuc}</span>
      </div>

      <div className={cx('container_mutilple')}>

        <div className={cx('container_hh')}>
          <span className={cx('title')}>Số lượng:</span>
          <span className={cx('content')}>{itemHangHoa.soluong}</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Khối lượng:</span>
          <span className={cx('content')}>{itemHangHoa.khoiLuong}</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Đơn vị tính:</span>
          <span className={cx('content')}>{itemHangHoa.donViTinh}</span>
        </div>
      </div>

      <div className={cx('container_mutilple')}>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Ngày SX:</span>
          <span className={cx('content')}>{convertDate(itemHangHoa.ngaySX)}</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>HSD:</span>
          <span className={cx('content')}>{convertDate(itemHangHoa.HSD)}</span>
        </div>
      </div>

      <div className={cx('container_mutilple')}>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Chiều dài (m):</span>
          <span className={cx('content')}>{itemHangHoa.chieuDai}</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Chiều rộng (m):</span>
          <span className={cx('content')}>{itemHangHoa.chieuRong}</span>
        </div>
        <div className={cx('container_hh')}>
          <span className={cx('title')}>Chiều cao (m):</span>
          <span className={cx('content')}>{itemHangHoa.chieuCao}</span>
        </div>
      </div>

      <div className={cx('container_mutilple')}>

        <div className={cx('container_hh')}>
          <span className={cx('title')}>Hình ảnh:</span>
          {
            itemHangHoa.hinhAnh.map((item, index) => {
              return (
                <img key={index} className={cx('image_hh')} src={item.url} alt='hh' />
              )
            })
          }
        </div>
      </div>
      <div className={cx('container_hh')}>
        <span className={cx('title')}>Mô tả:</span>
        <span className={cx('content-script')}>{itemHangHoa.moTa}</span>
      </div>
    </div>
  )
}

export default ItemDetailGoods;
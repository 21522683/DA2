import React from 'react'
import classNames from "classnames/bind";
import styles from './DetailGoodsDeclaration.module.scss';
import ItemDetailGoods from './ItemDetailGoods';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModalDetail } from '../../../../redux/sliceAdmin/goodsDeclarationSlice';

const cx = classNames.bind(styles);


function DetailGoodsDeclaration() {

  const dispatch = useDispatch();
  const listGoodsDeclaration = useSelector(state => state.goodsDeclarationManagement.goodsDeclarationsList);
  const indexSelected = useSelector(state => state.goodsDeclarationManagement.indexSelected);
  const itemSelected = listGoodsDeclaration[indexSelected];


  const handleClose = () => {
    dispatch(setIsOpenModalDetail(false));
  }

  const handleAccept = () => {

  }

  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>

        <div className={cx('container-header')}>
          <span className={cx('title_modal')}>BẢN KÊ KHAI HÀNG HÓA</span>
          <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('container_first')}>
          <div className={cx('container-status')}>
            <span className={cx('title')}>Trạng thái: </span>
            {
              itemSelected.trangThai ? (<span className={cx('accept')}>Đã tạo hóa đơn</span>) : (<span className={cx('status')}>Chưa tạo hóa đơn</span>)
            }
          </div>

          <div className={cx('container-status')}>
            <span className={cx('title')}>Mã đơn hàng: </span>
            <span className={cx('content')}>DH0927226372</span>
          </div>

          <div className={cx('container-status')}>
            <span className={cx('title')}>Ngày tạo đơn hàng: </span>
            <span className={cx('content')}>{itemSelected.donHang.ngayTaoDon}</span>
          </div>
        </div>

        <div className={cx('info-order')}>
          <span className={cx('title-order')}>THÔNG TIN NGƯỜI TẠO ĐƠN HÀNG</span>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Tên người đại diện: </span>
              <span className={cx('content')}>{itemSelected.donHang.user.representative.hoten}</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Địa chỉ email: </span>
              <span className={cx('content')}>{itemSelected.donHang.user.representative.email}</span>
            </div>
          </div>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Tên doanh nghiệp: </span>
              <span className={cx('content')}>{itemSelected.donHang.user.tenDoanhNghiep}</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Số điện thoại: </span>
              <span className={cx('content')}>{itemSelected.donHang.user.representative.soDienThoai}</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Số FAX: </span>
              <span className={cx('content')}>{itemSelected.donHang.user.soFAX}</span>
            </div>
          </div>

        </div>

        <div className={cx('info-order')}>
          <span className={cx('title-order')}>THÔNG TIN ĐƠN HÀNG</span>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Ngày đi dự kiến: </span>
              <span className={cx('content')}>{itemSelected.donHang.ngayDiDuKien}</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Ngày đến dự kiến: </span>
              <span className={cx('content')}>{itemSelected.donHang.ngayDenDuKien}</span>
            </div>

            <div className={cx('container-type')}>
              <span className={cx('title')}>Loại hình: </span>
              <span className={cx('content')}>{itemSelected.donHang.loaiHinh}</span>
            </div>
          </div>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Thông tin cảng đi: </span>
              <span className={cx('content')}>{itemSelected.donHang.cangDi}</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Thông tin cảng đến: </span>
              <span className={cx('content')}>{itemSelected.donHang.cangDen}</span>
            </div>
          </div>
        </div>

        <div className={cx('info-goods')}>
          <span className={cx('title-order')}>DANH MỤC HÀNG HÓA</span>
          <div className={cx('container_list')}>

            {
              itemSelected.donHang.hangHoa.map((item, index) => {
                return (
                  <ItemDetailGoods itemHangHoa={item} key={index} />
                )
              })
            }

          </div>
        </div>

        <div className={cx('container-btn')}>
          {
            itemSelected.trangThai ?
              (
                <span className={cx('text_message')}>Hóa đơn đã được tạo và gửi đến người dùng</span>
              ) : (
                <div className={cx('btn-accept')} onClick={handleAccept}>
                  Tạo hóa đơn
                </div>
              )
          }
        </div>

      </div >
    </div >
  )
}

export default DetailGoodsDeclaration;

import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from './DetailOrder.module.scss';
import ItemDetailOrder from './ItemDetailOrder';
import MessageBox from './ItemDetailOrder/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenMessageBox, setIsOpenModalDetail } from '../../../../redux/sliceAdmin/orderSlice';

const cx = classNames.bind(styles);


function DetailOrder() {

  const dispatch = useDispatch();
  const listOrders = useSelector(state => state.orderManagement.ordersList);
  const indexSelected = useSelector(state => state.orderManagement.indexSelected);
  const itemSelected = listOrders[indexSelected];
  const isOpenMessagebox = useSelector(state => state.orderManagement.isOpenMessagebox);

  const handleClose = () => {
    dispatch(setIsOpenModalDetail(false));
  }

  const handleRejected = () => {
    dispatch(setIsOpenMessageBox(true));
  }

  const handleAccept = () => {
    // dispatch hành động trong này
  }

  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      {isOpenMessagebox && <MessageBox/>}
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>

        <div className={cx('container-header')}>
          <span className={cx('title_modal')}>CHI TIẾT ĐƠN HÀNG TỪ NGƯỜI DÙNG</span>
          <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('container_first')}>
          <div className={cx('container-status')}>
            <span className={cx('title')}>Trạng thái đơn hàng: </span>
            {
              itemSelected.trangThaiXetDuyet ? (<span className={cx('accept')}>Đã xét duyệt</span>) : (<span className={cx('status')}>Chờ xét duyệt</span>)
            }
          </div>

          <div className={cx('container-status')}>
            <span className={cx('title')}>Mã đơn hàng: </span>
            <span className={cx('content')}>DH0927226372</span>
          </div>

          <div className={cx('container-status')}>
            <span className={cx('title')}>Ngày tạo đơn: </span>
            <span className={cx('content')}>{itemSelected.ngayTaoDon}</span>
          </div>
        </div>

        <div className={cx('info-order')}>
          <span className={cx('title-order')}>THÔNG TIN ĐƠN HÀNG</span>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Ngày đi dự kiến: </span>
              <span className={cx('content')}>{itemSelected.ngayDiDuKien}</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Ngày đến dự kiến: </span>
              <span className={cx('content')}>{itemSelected.ngayDenDuKien}</span>
            </div>

            <div className={cx('container-type')}>
              <span className={cx('title')}>Loại hình: </span>
              <span className={cx('content')}>{itemSelected.loaiHinh}</span>
            </div>
          </div>

          <div className={cx('container_2')}>
            <span className={cx('title')}>Thông tin cảng đi: </span>
            <span className={cx('content')}>{itemSelected.cangDi}</span>
          </div>

          <div className={cx('container_2')}>
            <span className={cx('title')}>Thông tin cảng đến: </span>
            <span className={cx('content')}>{itemSelected.cangDen}</span>
          </div>
        </div>

        <div className={cx('info-goods')}>
          <span className={cx('title-order')}>THÔNG TIN HÀNG HÓA</span>
          <div className={cx('container_list')}>

            {
              itemSelected.hangHoa.map((item, index) => {
                return (
                  <ItemDetailOrder itemHH={item} key={index} />
                )
              })
            }

          </div>
        </div>

        {
          itemSelected.trangThaiXetDuyet ? (
            <div className={cx('container-btn')}>
              <div className={cx('btn-rejected')} onClick={handleClose}>
                Đóng
              </div>
            </div>
          ) : (
            <div className={cx('container-btn')}>
              <div className={cx('btn-accept')} onClick={handleAccept}>
                Duyệt và tạo bản sao kê hàng hóa
              </div>

              <div className={cx('btn-rejected')} onClick={handleRejected}>
                Chưa thể xét duyệt
              </div>
            </div>
          )
        }

      </div >
    </div >
  )
}

export default DetailOrder;

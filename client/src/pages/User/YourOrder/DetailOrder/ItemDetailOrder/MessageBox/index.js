import React from 'react'
import classNames from "classnames/bind";
import styles from './MessageBox.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenMessageBox, setIsOpenModalDetail, setLoading } from '../../../../../../redux/slices/orderSlice';
import baseUrl from '../../../../../../utils/index';
import customAxios from '../../../../../../utils/customAxios'
import { toast } from 'react-toastify';
import axios from 'axios';

const cx = classNames.bind(styles);

function MessageBox({getAllOrders}) {

  const dispatch = useDispatch();
  const listOrders = useSelector(state => state.orderManagement.listOrdersUser);
  const indexSelected = useSelector(state => state.orderManagement.indexSelectedOrderUser);
  const itemSelected = listOrders[indexSelected];

  const handleSend = async () => {
    const url = `${baseUrl}/order/cancelOrder/${itemSelected._id}`;
    dispatch(setLoading(true));
    try {
      const response = await axios.patch(url);
      dispatch(setLoading(false));
      toast.success("Hủy đơn thành công", {
        position: "top-right"
      }
      );
      getAllOrders();
      dispatch(setIsOpenMessageBox(false));
      dispatch(setIsOpenModalDetail(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setIsOpenMessageBox(false));
      dispatch(setIsOpenModalDetail(false));
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log();
        toast.error("Hủy đơn thất bại", {
          position: "top-right"
        }
        );
      }
    }
  }
  const handleClose = () => {
    dispatch(setIsOpenMessageBox(false));
  }
  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
        <div className={cx('container-1')}>
          <span className={cx('title-modal')}>Xác nhận hủy đơn</span>
          <span className={cx('close-modal')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('container-2')}>
          <span>Bạn có chắc chắn muốn hủy đơn hàng này?</span>
        </div>


        <div className={cx('container-button')}>
          <div className={cx('button-cancel')} onClick={handleClose}>
            Đóng
          </div>
          <div className={cx('button-confirm')} onClick={handleSend}>
            Xác nhận
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageBox;

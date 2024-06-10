import React from 'react'
import classNames from "classnames/bind";
import styles from './MessageBox.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGoods, setIsOpenMessageBox } from '../../../../redux/slices/orderSlice';
import { toast } from 'react-toastify';


const cx = classNames.bind(styles);

function MessageBox() {

  const dispatch = useDispatch();
  const indexGoodsSelected = useSelector(state => state.orderManagement.indexGoodsSelected);

  const handleSend = () => {
    dispatch(deleteGoods(indexGoodsSelected));
    toast.success("Xóa hàng hóa thành công", {
      position: "top-right"
    });
    dispatch(setIsOpenMessageBox(false));
  }
  const handleClose = () => {
    dispatch(setIsOpenMessageBox(false));
  }

  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
        <div className={cx('container-1')}>
          <span className={cx('title-modal')}>Thông báo</span>
          <span className={cx('close-modal')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('container-2')}>
          <span className={cx('content')}>Bạn có chắc chắn xóa hàng hóa này ? Dữ liệu sẽ không thể phục hồi sau khi xóa !</span>
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

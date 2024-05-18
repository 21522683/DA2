import React from 'react'
import classNames from "classnames/bind";
import styles from './MessageBox.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenMessageBox, setLoading } from '../../../../redux/slices/containerSlice';
import { toast } from 'react-toastify'
import baseUrl from '../../../../utils/index.js';
import axios from 'axios';

const cx = classNames.bind(styles);

function MessageBox() {

  const dispatch = useDispatch();
  const listContainers = useSelector(state => state.containerManagement.containersList);
  const indexSelected = useSelector(state => state.containerManagement.indexSelected);
  const itemSelected = listContainers[indexSelected];

  const handleSend = async () => {
    try {
      const url = `${baseUrl}/container/deleteContainer/${itemSelected._id}`;
      const res = await axios.delete(url);
      if (res.data.container) {
        toast.success('Xóa container thành công', {
          position: "top-right"
        });
      }
      dispatch(setLoading(false));
      dispatch(setIsOpenMessageBox(false));
      window.location.reload("http://localhost:3000/admin/container");
    } catch (error) {
      toast.error(error.message, {
        position: "top-right"
      });
      dispatch(setLoading(false));
      dispatch(setIsOpenMessageBox(false));
      console.log(error.message);
    }
  }
  const handleClose = () => {
    dispatch(setIsOpenMessageBox(false));
  }
  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
        <div className={cx('container-1')}>
          <span className={cx('title-modal')}>THÔNG BÁO</span>
          <span className={cx('close-modal')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('container-2')}>
          <span className={cx('text_content')}>Bạn có chắc chắn muốn xóa container này ? Dữ liệu sẽ không thể phục hồi sau khi xóa !</span>
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

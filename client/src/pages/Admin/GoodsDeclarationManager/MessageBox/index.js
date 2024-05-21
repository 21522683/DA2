import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from './MessageBox.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenMessageBox, setLoading } from '../../../../redux/slices/goodsDeclarationSlice';
import baseUrl from '../../../../utils';
import customAxios from '../../../../utils/customAxios'
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function MessageBox({getAllGoodsDeclaration}) {

  const dispatch = useDispatch();
  const listGoodsDeclaration = useSelector(state => state.goodsDeclarationManagement.goodsDeclarationsList);
  const indexSelected = useSelector(state => state.goodsDeclarationManagement.indexSelected);
  const itemSelected = listGoodsDeclaration[indexSelected];
  const [reason, setReason] = useState('');

  const handleSend = async () => {
    const url = `${baseUrl}/user/sendEmailNotifyToUser`;
    dispatch(setLoading(true));
    try {
      const data = {
        email: itemSelected.donHang.user.email,
        reason: reason
      }
      const response = await customAxios.post(url, data);
      dispatch(setLoading(false));
      toast.success("Đã gửi email thông báo đến người dùng thành công", {
        position: "top-right"
      }
      );
      getAllGoodsDeclaration();
    } catch (error) {
      dispatch(setLoading(false));
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log();
        toast.error("Gửi thất bại", {
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
          <span className={cx('title-modal')}>Thông báo đến người dùng</span>
          <span className={cx('close-modal')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('container-2')}>
          <TextareaAutosize className={cx('input_reason')} value={reason} onChange={(e) => setReason(e.target.value)} minRows={1} maxRows={3} placeholder='Nhập lý do để thông báo đến người dùng' />
        </div>


        <div className={cx('container-button')}>
          <div className={cx('button-cancel')} onClick={handleClose}>
            Đóng
          </div>
          <div className={cx('button-confirm')} onClick={handleSend}>
            Gửi qua email
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageBox;

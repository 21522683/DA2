import React from 'react'
import classNames from "classnames/bind";
import styles from './MessageBox.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenMessageBox } from '../../../../../redux/slices/userSlice';


const cx = classNames.bind(styles);

function MessageBox() {

  const dispatch = useDispatch();
  const listUsers = useSelector(state => state.userManagement.usersList);
  const indexSelected = useSelector(state => state.userManagement.indexSelected);
  const itemSelected = listUsers[indexSelected];


  const handleSend = () => {

  }
  const handleClose = () => {
    dispatch(setIsOpenMessageBox(false));
  }
  return (
    <div className={cx('wrapper')} onClick={handleClose}>
        <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
          <div className={cx('container-1')}>
            <span className={cx('title-modal')}>TỪ CHỐI XÉT DUYỆT</span>
            <span className={cx('close-modal')} onClick={handleClose}>&times;</span>
          </div>

          <div className={cx('container-2')}>
            <TextareaAutosize className={cx('input_reason')} minRows={1} maxRows={3}  placeholder='Nhập lý do từ chối xét duyệt'/>
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

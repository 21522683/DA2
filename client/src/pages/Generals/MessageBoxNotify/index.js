import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from './MessageBoxNotify.module.scss'
import { useDispatch } from 'react-redux';
import { setIsOpenMessageBoxNotify } from '../../../redux/slices/userSlice';
import baseUrl from '../../../utils';

const cx = classNames.bind(styles)

function MessageBoxNotify({ title, content, close, confirm }) {

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setIsOpenMessageBoxNotify(false));
    window.location.reload(`${baseUrl}/user/info`);
  }

  return (
    <>
      <div className={cx('wrapper')} onClick={handleClose}>
        <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
          <div className={cx('container-1')}>
            <span className={cx('title-modal')}>{title}</span>
            <span className={cx('close-modal')} onClick={handleClose}>&times;</span>
          </div>

          <div className={cx('container-2')}>
            <span className={cx('text-modal')}>{content}</span>
          </div>


          <div className={cx('container-button')}>
            {
              close && (

                <div className={cx('button-cancel')} onClick={handleClose}>
                  Đóng
                </div>
              )
            }
            {
              confirm && (
                <div className={cx('button-confirm')}>
                  Xác nhận
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default MessageBoxNotify;

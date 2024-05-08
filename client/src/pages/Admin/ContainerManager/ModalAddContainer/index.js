import React from 'react'
import classNames from 'classnames/bind';
import styles from './ModalAddContainer.module.scss';
import { useDispatch } from 'react-redux';
import { setIsOpenModalAdd } from '../../../../redux/slices/containerSlice';

const cx = classNames.bind(styles);


function ModalAddContainer() {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setIsOpenModalAdd(false));
    }
    const handleAdd = () => {
        // dispatch hành động xử lý
    }

    return (
        <div className={cx('wrapper')} onClick={handleClose}>
            <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('container-header')}>
                    <span className={cx('title_modal')}>THÊM CONTAINER</span>
                    <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
                </div>

                <div className={cx('container_body_modal')}>
                    <div className={cx('container_input_1')}>
                        <span className={cx('title_input')}>Số hiệu container</span>
                        <input type="text" className={cx('input_number')} placeholder='Nhập số hiệu container'/>
                    </div>

                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Thể tích (m3)</span>
                            <input type="text" className={cx('input_number')} placeholder='Nhập thể tích'/>
                        </div>

                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Trọng lượng (tấn)</span>
                            <input type="text" className={cx('input_number')} placeholder='Nhập trọng lượng'/>
                        </div>
                    </div>

                    <div className={cx('container_btn')}>
                        <div className={cx('btn_accept')} onClick={handleAdd}>
                            Thêm container
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAddContainer;

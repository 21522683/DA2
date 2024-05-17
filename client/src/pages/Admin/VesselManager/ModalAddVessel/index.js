import React from 'react'
import classNames from 'classnames/bind';
import styles from './ModalAddVessel.module.scss';
import { useDispatch } from 'react-redux';
import { setIsOpenModalAdd } from '../../../../redux/slices/vesselSlice';

const cx = classNames.bind(styles);


function ModalAddVessel() {

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
                    <span className={cx('title_modal')}>THÊM TÀU MỚI</span>
                    <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
                </div>

                <div className={cx('container_body_modal')}>
                    <div className={cx('container_input_1')}>
                        <span className={cx('title_input')}>Số hiệu tàu</span>
                        <input type="text" className={cx('input_number')} placeholder='Nhập số hiệu tàu' />
                        <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>Vui lòng nhập thông tin</span>
                    </div>

                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Tên tàu</span>
                            <input type="text" className={cx('input_number')} placeholder='Nhập tên tàu' />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>Vui lòng nhập thông tin</span>
                        </div>

                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Giá thuê</span>
                            <input type="text" className={cx('input_number')} placeholder='Nhập giá thuê' />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>Vui lòng nhập thông tin</span>
                        </div>
                    </div>

                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Tải trọng (tấn)</span>
                            <input type="text" className={cx('input_number')} placeholder='Nhập tải trọng' />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>Vui lòng nhập thông tin</span>
                        </div>

                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Trọng lượng (tấn)</span>
                            <input type="text" className={cx('input_number')} placeholder='Nhập trọng lượng' />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>Vui lòng nhập thông tin</span>
                        </div>
                    </div>

                    <div className={cx('container_btn')}>
                        <div className={cx('btn_accept')} onClick={handleAdd}>
                            Thêm tàu
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAddVessel;

import React from 'react'
import classNames from 'classnames/bind';
import styles from './ModalAddContainer.module.scss';
import { useDispatch } from 'react-redux';
import { setIsOpenModalAdd } from '../../../../redux/slices/containerSlice';
import DropDown from './DropDown';


const cx = classNames.bind(styles);


function ModalAddContainer() {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setIsOpenModalAdd(false));
    }
    const handleAdd = () => {
        // dispatch hành động xử lý
    }

    const handleSelectFilter = (value) => {

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
                        <span className={cx('title_input')}>Loại container</span>
                        <DropDown handleSelectOption={handleSelectFilter} />
                    </div>

                    <div className={cx('container_input_1')} style={{ marginTop: '20px' }}>
                        <span className={cx('title_input')}>Số hiệu container</span>
                        <input type="text" className={cx('input_number')} placeholder='Nhập số hiệu container' />
                    </div>
                    <span style={{color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px'}}>Vui lòng nhập thông tin</span>
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

import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import styles from './ModalAddContainer.module.scss';
import { useDispatch } from 'react-redux';
import { setIsOpenModalAdd, setLoading } from '../../../../redux/slices/containerSlice';
import DropDown from './DropDown';
import { toast } from 'react-toastify'
import customAxios from '../../../../utils//customAxios';
import baseUrl from '../../../../utils/index.js';

const cx = classNames.bind(styles);


function ModalAddContainer({getAllContainers}) {

    const dispatch = useDispatch();

    const [loaiContainer, setLoaiContainer] = useState('TC (20 feet)');
    const [soHieu, setSoHieu] = useState('');
    const [textValidate, setTextValidate] = useState('');

    const validation = (value) => {
        if (value.trim() === '' || value.trim().length === 0) {
            setTextValidate('Vui lòng nhập số hiệu container');
            return false;
        } else {
            setTextValidate('');
            return true;
        }
    }
    const handleChangeSoHieu = (value) => {
        setSoHieu(value)
        validation(soHieu);
    }

    const handleClose = () => {
        dispatch(setIsOpenModalAdd(false));
    }
    const handleAdd = async () => {
        
        if (validation(soHieu)) {
            dispatch(setLoading(true));
            const data = {
                soHieu: soHieu,
                loaiContainer: loaiContainer,
            }
            try {
                const url = `${baseUrl}/container/createContainer`;
                const res = await customAxios.post(url, data);
                if (res.data.container) {
                    toast.success('Thêm container thành công', {
                        position: "top-right"
                    });
                }
                dispatch(setLoading(false));
                dispatch(setIsOpenModalAdd(false));
                getAllContainers();
            } catch (error) {
                toast.error(error.message, {
                    position: "top-right"
                });
                dispatch(setLoading(false));
                dispatch(setIsOpenModalAdd(false));
                console.log(error.message);
            }
        }
    }

    const handleSelectFilter = (value) => {
        setLoaiContainer(value);
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
                        <input type="text" className={cx('input_number')} placeholder='Nhập số hiệu container' value={soHieu} onChange={(e) => handleChangeSoHieu(e.target.value)} />
                    </div>
                    <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidate}</span>
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

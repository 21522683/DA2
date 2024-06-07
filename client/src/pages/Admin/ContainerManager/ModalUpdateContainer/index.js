import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './ModalUpdateContainer.module.scss';
import DropDownStatus from './DropDownStatus';
import DropdownType from './DropDownType';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModalUpdate, setLoading } from '../../../../redux/slices/containerSlice';
import { toast } from 'react-toastify'
import customAxios from '../../../../utils//customAxios';
import baseUrl from '../../../../utils/index.js';

const cx = classNames.bind(styles);

function ModalUpdateContainer({getAllContainers}) {

    const dispatch = useDispatch();
    const listContainers = useSelector(state => state.containerManagement.containersList);
    const indexSelected = useSelector(state => state.containerManagement.indexSelected);
    const itemSelected = listContainers[indexSelected];

    const [soHieu, setSoHieu] = useState(itemSelected.soHieu);
    const [trangThai, setTrangThai] = useState(itemSelected.trangThai === true ? "Đang sử dụng" : "Đang trống");
    const [type, setType] = useState(itemSelected.loaiContainer.tenLoai);
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

    const handleChangeFilterType = (value) => {
        setType(value);
    };

    const handleChangeFilterStatus = (value) => {
        setTrangThai(value);
    };

    const handleClose = () => {
        dispatch(setIsOpenModalUpdate(false));
    }
    const handleSave = async () => {
        if (validation(soHieu)) {
            dispatch(setLoading(true));
            const data = { 
                loaiContainer: type,
                trangThai: trangThai,
                soHieu: soHieu,
            }
            try {
                const url = `${baseUrl}/container/updateContainer/${itemSelected._id}`;
                const res = await customAxios.put(url, data);
                if (res.data.container) {
                    toast.success('Thêm container thành công', {
                        position: "top-right"
                    });
                }
                dispatch(setLoading(false));
                dispatch(setIsOpenModalUpdate(false));
                getAllContainers();
            } catch (error) {
                toast.error(error.message, {
                    position: "top-right"
                });
                dispatch(setLoading(false));
                dispatch(setIsOpenModalUpdate(false));
                console.log(error.message);
            }
        }
    }


    return (
        <div className={cx('wrapper')} onClick={handleClose}>
            <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('container-header')}>
                    <span className={cx('title_modal')}>CẬP NHẬT CONTAINER</span>
                    <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
                </div>

                <div className={cx('container_body_modal')}>
                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Loại container</span>
                            <DropdownType handleSelectOptionType={handleChangeFilterType} />
                        </div>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Trạng thái hoạt động</span>
                            <DropDownStatus handleSelectOptionStatus={handleChangeFilterStatus} />
                        </div>
                    </div>

                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_b')}>
                            <span className={cx('title_input')}>Số hiệu container</span>
                            <input
                                type="text"
                                className={cx('input_number')}
                                placeholder='Nhập số hiệu container'
                                value={soHieu}
                                onChange={(e) => handleChangeSoHieu(e.target.value)} />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidate}</span>
                        </div>
                    </div>

                    <div className={cx('container_btn')}>
                        <div className={cx('btn_rejected')} onClick={handleClose}>
                            Đóng
                        </div>
                        <div className={cx('btn_accept')} onClick={handleSave}>
                            Lưu
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUpdateContainer;

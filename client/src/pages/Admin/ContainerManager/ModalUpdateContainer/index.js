import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './ModalUpdateContainer.module.scss';
import DropDownStatus from './DropDownStatus';
import DropdownType from './DropDownType';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModalUpdate } from '../../../../redux/slices/containerSlice';

const cx = classNames.bind(styles);

function ModalUpdateContainer() {

    const dispatch = useDispatch();
    const listContainers = useSelector(state => state.containerManagement.containersList);
    const indexSelected = useSelector(state => state.containerManagement.indexSelected);
    const itemSelected = listContainers[indexSelected];

    const [soHieu, setSoHieu] = useState(itemSelected.soHieu);
    const [trangThai, setTrangThai] = useState(itemSelected.trangThai);


    const handleChangeSoHieu = (value) => {
        setSoHieu(value);
    };
    const handleChangeFilterType = (value) => {

    };

    const handleChangeFilterStatus = (value) => {

    };

    const handleClose = () => {
        dispatch(setIsOpenModalUpdate(false));
    }
    const handleSave = () => {
        const itemUpdate = {
            soHieu: soHieu,
            trangThai: trangThai,
        }
        console.log(itemUpdate);
        // dispatch hành động xử lý
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
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>Vui lòng nhập thông tin</span>
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

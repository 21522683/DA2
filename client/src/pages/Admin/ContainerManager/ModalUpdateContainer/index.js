import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './ModalUpdateContainer.module.scss';
import Dropdown from './DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModalUpdate } from '../../../../redux/sliceAdmin/containerSlice';

const cx = classNames.bind(styles);
function chuyenChuoiSangSoThuc(value) {
    let chuoi = value.toString();
    let parts = chuoi.split('.');
    let soKyTuTruocDauCham = parts[0].length;
    let soThuc = parseFloat(chuoi);
    if (soKyTuTruocDauCham > 0) {
        let soKhong = Math.pow(1, soKyTuTruocDauCham - 1);
        soThuc /= soKhong;
    }
    return soThuc;
}

function ModalUpdateContainer() {

    const dispatch = useDispatch();
    const listContainers = useSelector(state => state.containerManagement.containersList);
    const indexSelected = useSelector(state => state.containerManagement.indexSelected);
    const itemSelected = listContainers[indexSelected];

    const [soHieu, setSoHieu] = useState(itemSelected.soHieu);
    const [trangThai, setTrangThai] = useState(itemSelected.trangThai);
    const [theTichChua, setTheTichChua] = useState(itemSelected.theTichChua);
    const [trongLuong, setTrongLuong] = useState(itemSelected.trongLuong);

    
    const handleChangeSoHieu = (value) => {
        setSoHieu(value);
    };
    const handleChangeFilter = (value) => {
        setTrangThai(value === 'Đang trống' ? false : true);
    };
    
    const handleChangeTheTichChua = (value) => {
        setTheTichChua(value);
    };
    
    const handleChangeTrongLuong = (value) => {
        setTrongLuong(value);
    };
    

    const handleClose = () => {
        dispatch(setIsOpenModalUpdate(false));
    }
    const handleSave = () => {
        const itemUpdate = {
            soHieu: soHieu,
            trangThai: trangThai,
            theTichChua: chuyenChuoiSangSoThuc(theTichChua),
            trongLuong: chuyenChuoiSangSoThuc(trongLuong)
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
                            <span className={cx('title_input')}>Số hiệu container</span>
                            <input
                                type="text"
                                className={cx('input_number')}
                                placeholder='Nhập số hiệu container'
                                value={soHieu}
                                onChange={(e) => handleChangeSoHieu(e.target.value)} />
                        </div>

                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Trạng thái hoạt động</span>
                            <Dropdown handleSelectOption={handleChangeFilter} />
                        </div>
                    </div>

                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Thể tích (m3)</span>
                            <input 
                                type="number" 
                                className={cx('input_number')} 
                                placeholder='Nhập thể tích' 
                                value={theTichChua}
                                onChange={(e) => handleChangeTheTichChua(e.target.value)}/>
                        </div>

                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Trọng lượng (tấn)</span>
                            <input 
                                type="number" 
                                className={cx('input_number')} 
                                placeholder='Nhập trọng lượng' 
                                value={trongLuong}
                                onChange={(e) => handleChangeTrongLuong(e.target.value)}/>
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

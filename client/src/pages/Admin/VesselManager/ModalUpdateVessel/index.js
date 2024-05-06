import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './ModalUpdateVessel.module.scss';
import Dropdown from './DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModalUpdate } from '../../../../redux/sliceAdmin/vesselSlice';

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
    const listVissels = useSelector(state => state.vesselManagement.vesselsList);
    const indexSelected = useSelector(state => state.vesselManagement.indexSelected);
    const itemSelected = listVissels[indexSelected];

    const [tenTau, setTenTau] = useState(itemSelected.tenTau);
    const [soHieu, setSoHieu] = useState(itemSelected.soHieu);
    const [trangThai, setTrangThai] = useState(itemSelected.trangThai);
    const [taiTrong, setTaiTrong] = useState(itemSelected.taiTrong);
    const [trongLuong, setTrongLuong] = useState(itemSelected.trongLuong);

    const handleChangeTenTau = (value) => {
        setTenTau(value);
    };
    const handleChangeSoHieu = (value) => {
        setSoHieu(value);
    };
    const handleChangeFilter = (value) => {
        setTrangThai(value === 'Đang trống' ? false : true);
    };
    
    const handleChangeTaiTrong = (value) => {
        setTaiTrong(value);
    };
    
    const handleChangeTrongLuong = (value) => {
        setTrongLuong(value);
    };
    

    const handleClose = () => {
        dispatch(setIsOpenModalUpdate(false));
    }
    const handleSave = () => {
        const itemUpdate = {
            tenTau: tenTau,
            soHieu: soHieu,
            trangThai: trangThai,
            taiTrong: chuyenChuoiSangSoThuc(taiTrong),
            trongLuong: chuyenChuoiSangSoThuc(trongLuong)
        }
        console.log(itemUpdate);
        // dispatch hành động xử lý
    }
    

    return (
        <div className={cx('wrapper')} onClick={handleClose}>
            <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('container-header')}>
                    <span className={cx('title_modal')}>CẬP NHẬT THÔNG TIN TÀU</span>
                    <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
                </div>

                <div className={cx('container_body_modal')}>
                <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_ten')}>
                            <span className={cx('title_input')}>Tên tàu</span>
                            <input
                                type="text"
                                className={cx('input_number')}
                                placeholder='Nhập tên tàu'
                                value={tenTau}
                                onChange={(e) => handleChangeTenTau(e.target.value)} />
                        </div>
                    </div>
                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Số hiệu tàu</span>
                            <input
                                type="text"
                                className={cx('input_number')}
                                placeholder='Nhập số hiệu tàu'
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
                            <span className={cx('title_input')}>Tải trọng (tấn)</span>
                            <input 
                                type="number" 
                                className={cx('input_number')} 
                                placeholder='Nhập thể tích' 
                                value={taiTrong}
                                onChange={(e) => handleChangeTaiTrong(e.target.value)}/>
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

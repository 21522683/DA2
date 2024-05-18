import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './ModalUpdateVessel.module.scss';
import Dropdown from './DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModalUpdate, setLoading } from '../../../../redux/slices/vesselSlice';
import { toast } from 'react-toastify'
import customAxios from '../../../../utils//customAxios';
import baseUrl from '../../../../utils/index.js';

const cx = classNames.bind(styles);

function ModalUpdateContainer() {

    const dispatch = useDispatch();
    const listVissels = useSelector(state => state.vesselManagement.vesselsList);
    const indexSelected = useSelector(state => state.vesselManagement.indexSelected);
    const itemSelected = listVissels[indexSelected];

    const [tenTau, setTenTau] = useState(itemSelected.tenTau);
    const [textValidateTenTau, setTextValidateTenTau] = useState('');
    const validationTenTau = (value) => {
        if (value.trim() === '' || value.trim().length === 0) {
            setTextValidateTenTau('Vui lòng nhập tên tàu');
            return false;
        } else {
            setTextValidateTenTau('');
            return true;
        }
    }
    useEffect(() => {
        let temp = validationTenTau(tenTau);
    }, [tenTau]);

    const [soHieu, setSoHieu] = useState(itemSelected.soHieu);
    const [textValidateSoHieu, setTextValidateSoHieu] = useState('');
    const validationSoHieu = (value) => {
        if (value.trim() === '' || value.trim().length === 0) {
            setTextValidateSoHieu('Vui lòng nhập số hiệu tàu');
            return false;
        } else {
            setTextValidateSoHieu('');
            return true;
        }
    }
    useEffect(() => {
        let temp = validationSoHieu(soHieu);
    }, [soHieu]);

    const [trangThai, setTrangThai] = useState(itemSelected.trangThai ? "Đang sử dụng" : "Đang trống");
    const [taiTrong, setTaiTrong] = useState(itemSelected.taiTrong);
    const [textValidateTaiTrong, setTextValidateTaiTrong] = useState('');
    const validationTaiTrong = (value) => {
        if (value.toString().trim() === '' || value.toString().trim().length === 0) {
            setTextValidateTaiTrong('Vui lòng nhập tải trọng tàu');
            return false;
        } else {
            if (value < 20000) {
                setTextValidateTaiTrong('Tải trọng tàu không nhỏ hơn 20000 tấn');
                return false;
            }
            else {
                setTextValidateTaiTrong('');
                return true;
            }
        }
    }
    useEffect(() => {
        let temp = validationTaiTrong(taiTrong);
    }, [taiTrong]);

    const [giaThue, setGiaThue] = useState(itemSelected.giaThue);
    const [textValidateGiaThue, setTextValidateGiaThue] = useState('');
    const validationGiaThue = (value) => {
        if (value.toString().trim() === '' || value.toString().trim().length === 0) {
            setTextValidateGiaThue('Vui lòng nhập giá thuê tàu');
            return false;
        } else {
            if (value <= 0) {
                setTextValidateGiaThue('Vui lòng nhập giá thuê tàu lớn hơn 0');
                return false;
            }
            else {
                setTextValidateGiaThue('');
                return true;
            }
        }
    }
    useEffect(() => {
        let temp = validationGiaThue(giaThue);
    }, [giaThue]);

    const handleChangeFilter = (value) => {
        setTrangThai(value);
    };


    const handleClose = () => {
        dispatch(setIsOpenModalUpdate(false));
    }
    const handleSave = async () => {
        const flagSoHieu = validationSoHieu(soHieu);
        const flagTenTau = validationTenTau(tenTau);
        const flagGiaThue = validationGiaThue(giaThue);
        const flagTaiTrong = validationTaiTrong(taiTrong);
        if (flagSoHieu && flagTenTau && flagGiaThue && flagTaiTrong) {
            const data = {
                tenTau,
                soHieu,
                trangThai,
                taiTrong,
                giaThue
            }
            try {
                const url = `${baseUrl}/vessel/updateVessel/${itemSelected._id}`;
                const res = await customAxios.put(url, data);
                if (res.data.vessel) {
                    toast.success('Cập nhật thành công', {
                        position: "top-right"
                    });
                }
                dispatch(setLoading(false));
                dispatch(setIsOpenModalUpdate(false));
                window.location.reload("http://localhost:3000/admin/vessel");
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
                    <span className={cx('title_modal')}>CẬP NHẬT THÔNG TIN TÀU</span>
                    <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
                </div>

                <div className={cx('container_body_modal')}>

                    <div className={cx('container_input_1')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Số hiệu tàu</span>
                            <input
                                type="text"
                                className={cx('input_number')}
                                placeholder='Nhập số hiệu tàu'
                                value={soHieu}
                                onChange={(e) => setSoHieu(e.target.value)} />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidateSoHieu}</span>
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
                                onChange={(e) => setTaiTrong(e.target.value)} />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidateTaiTrong}</span>
                        </div>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Trạng thái hoạt động</span>
                            <Dropdown handleSelectOption={handleChangeFilter} />
                        </div>
                    </div>

                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Tên tàu</span>
                            <input
                                type="text"
                                className={cx('input_number')}
                                placeholder='Nhập tên tàu'
                                value={tenTau}
                                onChange={(e) => setTenTau(e.target.value)} />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidateTenTau}</span>
                        </div>

                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Giá thuê tàu</span>
                            <input
                                type="text"
                                className={cx('input_number')}
                                placeholder='Nhập giá thuê tàu'
                                value={giaThue}
                                onChange={(e) => setGiaThue(e.target.value)} />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidateGiaThue}</span>
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

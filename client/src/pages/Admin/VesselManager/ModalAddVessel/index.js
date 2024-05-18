import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './ModalAddVessel.module.scss';
import { useDispatch } from 'react-redux';
import { setIsOpenModalAdd, setLoading } from '../../../../redux/slices/vesselSlice';
import { toast } from 'react-toastify'
import customAxios from '../../../../utils//customAxios';
import baseUrl from '../../../../utils/index.js';

const cx = classNames.bind(styles);


function ModalAddVessel() {

    const dispatch = useDispatch();

    const [soHieu, setSoHieu] = useState('');
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

    const [tenTau, setTenTau] = useState('');
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

    const [giaThue, setGiaThue] = useState(0);
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

    const [taiTrong, setTaiTrong] = useState(0);
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

    const handleClose = () => {
        dispatch(setIsOpenModalAdd(false));
    }
    const handleAdd = async () => {
        const flagSoHieu = validationSoHieu(soHieu);
        const flagTenTau = validationTenTau(tenTau);
        const flagGiaThue = validationGiaThue(giaThue);
        const flagTaiTrong = validationTaiTrong(taiTrong);
        if (flagSoHieu && flagTenTau && flagGiaThue && flagTaiTrong) {
            dispatch(setLoading(true));
            const data = {
                soHieu,
                tenTau,
                taiTrong,
                giaThue,
            }
            try {
                const url = `${baseUrl}/vessel/createVessel`;
                const res = await customAxios.post(url, data);
                if (res.data.vessel) {
                    toast.success('Thêm tàu thành công', {
                        position: "top-right"
                    });
                }
                dispatch(setLoading(false));
                dispatch(setIsOpenModalAdd(false));
                window.location.reload("http://localhost:3000/admin/vessel");
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

    return (
        <div className={cx('wrapper')} onClick={handleClose}>
            <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('container-header')}>
                    <span className={cx('title_modal')}>THÊM TÀU MỚI</span>
                    <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
                </div>

                <div className={cx('container_body_modal')}>

                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Số hiệu tàu</span>
                            <input value={soHieu} onChange={(e) => setSoHieu(e.target.value)} type="text" className={cx('input_number')} placeholder='Nhập số hiệu tàu' />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidateSoHieu}</span>
                        </div>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Tải trọng (tấn)</span>
                            <input value={taiTrong} onChange={(e) => setTaiTrong(e.target.value)} type="number" className={cx('input_number')} placeholder='Nhập tải trọng' />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidateTaiTrong}</span>
                        </div>
                    </div>

                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Tên tàu</span>
                            <input value={tenTau} onChange={(e) => setTenTau(e.target.value)} type="text" className={cx('input_number')} placeholder='Nhập tên tàu' />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidateTenTau}</span>
                        </div>

                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Giá thuê</span>
                            <input value={giaThue} onChange={(e) => setGiaThue(e.target.value)} type="number" className={cx('input_number')} placeholder='Nhập giá thuê' />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidateGiaThue}</span>
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

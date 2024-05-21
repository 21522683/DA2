import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './ModalCreateBill.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenMessageBox, setIsOpenModalCreateBill, setIsOpenModalDetail, setLoading } from '../../../../redux/slices/goodsDeclarationSlice.js';
import { toast } from 'react-toastify'
import customAxios from '../../../../utils/customAxios.js';
import baseUrl from '../../../../utils/index.js';

const cx = classNames.bind(styles);


function ModalCreateBill({getAllGoodsDeclaration}) {

    const dispatch = useDispatch();
    const listGoodsDeclaration = useSelector(state => state.goodsDeclarationManagement.goodsDeclarationsList);
    const indexSelected = useSelector(state => state.goodsDeclarationManagement.indexSelected);
    const itemSelected = listGoodsDeclaration[indexSelected];


    const [thue, setThue] = useState(0);
    const [textValidateThue, setTextValidateThue] = useState('');
    const validationThue = (value) => {
        if (value.toString().trim() === '' || value.toString().trim().length === 0) {
            setTextValidateThue('Vui lòng nhập thuế cho đơn hàng này');
            return false;
        } else {
            if (value < 0 || value > 100) {
                setTextValidateThue('Vui lòng nhập thuế trong khoản từ 0 đến 100');
                return false;
            }
            else {
                setTextValidateThue('');
                return true;
            }
        }
    }
    useEffect(() => {
        let temp = validationThue(thue);
    }, [thue]);

    const [phiVC, setPhiVC] = useState(0);
    const [textValidatePhiVC, setTextValidatePhiVC] = useState('');
    const validationPhiVC = (value) => {
        if (value.toString().trim() === '' || value.toString().trim().length === 0) {
            setTextValidatePhiVC('Vui lòng nhập phí vận chuyển cho đơn hàng này');
            return false;
        } else {
            if (value < 0) {
                setTextValidatePhiVC('Phí vận chuyển là một số dương lớn hơn hoặc bằng 0');
                return false;
            }
            else {
                setTextValidatePhiVC('');
                return true;
            }
        }
    }
    useEffect(() => {
        let temp = validationPhiVC(phiVC);
    }, [phiVC]);

    const [triGia, setTriGia] = useState(0);
    const [textValidateTriGia, setTextValidateTriGia] = useState('');
    const validationTriGia = (value) => {
        if (value.toString().trim() === '' || value.toString().trim().length === 0) {
            setTextValidateTriGia('Vui lòng nhập trị giá của đơn hàng này');
            return false;
        } else {
            if (value < 0) {
                setTextValidateTriGia('Trị giá là một số dương lớn hơn hoặc bằng 0');
                return false;
            }
            else {
                setTextValidateTriGia('');
                return true;
            }
        }
    }
    useEffect(() => {
        let temp = validationTriGia(triGia);
    }, [triGia]);


    const handleClose = () => {
        dispatch(setIsOpenModalCreateBill(false));
    }
    const handleCreateBill = async () => {
        const flagThue = validationThue(thue);
        const flagPhiVC = validationPhiVC(phiVC);
        const flagTriGia = validationTriGia(triGia);
        if (flagThue && flagPhiVC && flagTriGia) {
            dispatch(setLoading(true));
            const data = {
                thue,
                phiVC,
                triGia,
            }
            try {
                const url = `${baseUrl}/goodsDeclaration/createBillUser/${itemSelected._id}`;
                const res = await customAxios.post(url, data);
                if (res.data.success) {
                    toast.success('Tạo hóa đơn thành công', {
                        position: "top-right"
                    });
                    dispatch(setLoading(false));
                    dispatch(setIsOpenModalCreateBill(false));
                    dispatch(setIsOpenModalDetail(false));
                    getAllGoodsDeclaration();
                }
                else {
                    toast.error(res.data.message, {
                        position: "top-right"
                    });
                    dispatch(setIsOpenMessageBox(true));
                }
            } catch (error) {
                toast.error(error.message, {
                    position: "top-right"
                });
                dispatch(setLoading(false));
                dispatch(setIsOpenModalCreateBill(false));
                dispatch(setIsOpenModalDetail(false));
                console.log(error.message);
            }
        }
    }

    return (
        <div className={cx('wrapper')} onClick={handleClose}>
            <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('container-header')}>
                    <span className={cx('title_modal')}>TẠO HÓA ĐƠN CHO NGƯỜI DÙNG</span>
                    <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
                </div>

                <div className={cx('container_body_modal')}>
                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Thuế tổng hàng hóa (%)</span>
                            <input value={thue} onChange={(e) => setThue(e.target.value)} type="number" className={cx('input_number')} placeholder='Nhập thuế cho tổng hàng hóa (0 đến 100)' />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidateThue}</span>
                        </div>
                    </div>

                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Phí vận chuyển</span>
                            <input value={phiVC} onChange={(e) => setPhiVC(e.target.value)} type="number" className={cx('input_number')} placeholder='Nhập tải trọng' />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidatePhiVC}</span>
                        </div>
                    </div>

                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Trị giá của đơn hàng</span>
                            <input value={triGia} onChange={(e) => setTriGia(e.target.value)} type="number" className={cx('input_number')} placeholder='Nhập trị giá của đơn hàng' />
                            <span style={{ color: 'red', fontSize: '10px', marginTop: '8px', marginLeft: '4px' }}>{textValidateTriGia}</span>
                        </div>
                    </div>

                    <div className={cx('container_btn')}>
                        <div className={cx('btn_accept')} onClick={handleCreateBill}>
                            Tạo hóa đơn
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCreateBill;

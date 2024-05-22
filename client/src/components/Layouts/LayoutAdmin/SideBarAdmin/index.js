import React, { useEffect, useState } from 'react'
import styles from "./SideBarAdmin.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import images from '../../../../assets/images/index.js'
import customAxios from '../../../../utils/customAxios.js';
import baseUrl from '../../../../utils/index.js';
import { useDispatch } from 'react-redux';
import { setInfoAdmin } from '../../../../redux/slices/userSlice.js';
const cx = classNames.bind(styles);

function SideBarAdmin() {
    const dispatch = useDispatch();

    const [activeItem, setActiveItem] = useState('account');
    const handleClickItem = (item) => {
        setActiveItem(item);
    }

    const handleClickLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/'
    }
    const getAdmin = async () => {
        try {
            const res = await customAxios.get(`${baseUrl}/user/getInfoAdmin`);
            dispatch(setInfoAdmin(res.data.user));
        } catch (error) {
            console.log("error");
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('accessToken') || false
        if (token) {
            getAdmin();
        }
    }, [])

    return (
        <div className={cx('container_sidebar')}>
            <div className={cx('header')}>
                <img className={cx('logo')} src={images.logo} />
                <div className={cx('spacer')}></div>
            </div>

            <div className={cx('container-navigate')}>
                <Link to={'/admin/account'} className={cx(activeItem === 'account' ? 'item-navigate-active' : 'item-navigate')} onClick={() => handleClickItem('account')}>
                    <span className={cx(activeItem === 'account' ? 'text-navigate-active' : 'text-navigate')}>QUẢN LÝ TÀI KHOẢN</span>
                </Link>
                <Link to={'/admin/order'} className={cx(activeItem === 'order' ? 'item-navigate-active' : 'item-navigate')} onClick={() => handleClickItem('order')}>
                    <span className={cx(activeItem === 'order' ? 'text-navigate-active' : 'text-navigate')}>QUẢN LÝ ĐƠN HÀNG</span>
                </Link>
                <Link to={'/admin/goods-declaration'} className={cx(activeItem === 'doc_goods' ? 'item-navigate-active' : 'item-navigate')} onClick={() => handleClickItem('doc_goods')}>
                    <span className={cx(activeItem === 'doc_goods' ? 'text-navigate-active' : 'text-navigate')}>KÊ KHAI HÀNG HÓA</span>
                </Link>
                <Link to={'/admin/container'} className={cx(activeItem === 'container' ? 'item-navigate-active' : 'item-navigate')} onClick={() => handleClickItem('container')}>
                    <span className={cx(activeItem === 'container' ? 'text-navigate-active' : 'text-navigate')}>QUẢN LÝ CONTAINER</span>
                </Link>
                <Link to={'/admin/vessel'} className={cx(activeItem === 'ship' ? 'item-navigate-active' : 'item-navigate')} onClick={() => handleClickItem('ship')}>
                    <span className={cx(activeItem === 'ship' ? 'text-navigate-active' : 'text-navigate')}>QUẢN LÝ TÀU</span>
                </Link>
                <Link to={'/admin/bill'} className={cx(activeItem === 'bill' ? 'item-navigate-active' : 'item-navigate')} onClick={() => handleClickItem('bill')}>
                    <span className={cx(activeItem === 'bill' ? 'text-navigate-active' : 'text-navigate')}>LỊCH SỬ GIAO DỊCH</span>
                </Link>
                <Link to={'/admin/contract'} className={cx(activeItem === 'contract' ? 'item-navigate-active' : 'item-navigate')} onClick={() => handleClickItem('contract')}>
                    <span className={cx(activeItem === 'contract' ? 'text-navigate-active' : 'text-navigate')}>QUẢN LÝ HỢP ĐỒNG</span>
                </Link>
                <Link to={'/admin/report'} className={cx(activeItem === 'report' ? 'item-navigate-active' : 'item-navigate')} onClick={() => handleClickItem('report')}>
                    <span className={cx(activeItem === 'report' ? 'text-navigate-active' : 'text-navigate')}>BÁO CÁO THỐNG KÊ</span>
                </Link>
            </div>

            <div className={cx('btn-logout')} onClick={handleClickLogout}>ĐĂNG XUẤT</div>
        </div>
    )
}

export default SideBarAdmin

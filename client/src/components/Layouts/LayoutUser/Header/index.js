import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from '../../../../assets/images';
import { Link } from 'react-router-dom';
import customAxios from '../../../../utils/customAxios.js';
import baseUrl from '../../../../utils/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser }  from '../../../../redux/slices/userSlice.js';

const cx = classNames.bind(styles);

function Header() {

  const [selectedNavigateHome, setSelectedNavigateHome] = useState(false);
  const [selectedNavigateFirst, setSelectedNavigateFirst] = useState(false);
  const [selectedNavigateSecond, setSelectedNavigateSecond] = useState(false);
  const [selectedNavigateThree, setSelectedNavigateThree] = useState(false);
  const [selectedNavigateLast, setSelectedNavigateLast] = useState(false);

  useEffect(() => {
    handleHomeLink();
  }, []);


  const handleHomeLink = () => {
    setSelectedNavigateHome(true);
    setSelectedNavigateFirst(false);
    setSelectedNavigateSecond(false);
    setSelectedNavigateThree(false);
    setSelectedNavigateLast(false);
  }

  const handleCreateOrderLink = () => {
    setSelectedNavigateHome(false);
    setSelectedNavigateFirst(true);
    setSelectedNavigateSecond(false);
    setSelectedNavigateThree(false);
    setSelectedNavigateLast(false);
  }
  const handleYourOrderLink = () => {
    setSelectedNavigateHome(false);
    setSelectedNavigateFirst(false);
    setSelectedNavigateSecond(true);
    setSelectedNavigateThree(false);
    setSelectedNavigateLast(false);
  }
  const handleContractLink = () => {
    setSelectedNavigateHome(false);
    setSelectedNavigateFirst(false);
    setSelectedNavigateSecond(false);
    setSelectedNavigateThree(true);
    setSelectedNavigateLast(false);
  }
  const handleBillLink = () => {
    setSelectedNavigateHome(false);
    setSelectedNavigateFirst(false);
    setSelectedNavigateSecond(false);
    setSelectedNavigateThree(false);
    setSelectedNavigateLast(true);
  }

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.userManagement.currentUser);
  const getUser = async () => {
    try {
      const res = await customAxios.get(`${baseUrl}/user/getInfoCurrentUser`)
      setFlat(true);
      dispatch(setCurrentUser(res.data.data));
    } catch (error) {

    }
  }
  const [flat, setFlat] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('accessToken') || false
    if (token) {
      getUser();
    }
    else setFlat(false)
  }, [])



  return (
    <div className={cx('container-header')}>
      <div className={cx('container-start')}>
        <Link to='/' onClick={handleHomeLink}>
          <img className={cx('logo-web')} src={images.logo} alt="logo" />
        </Link>
        <div className={cx('container-navigate')}>
          <Link className={cx('btn-link')} to='/' onClick={handleHomeLink}>
            <span className={cx('text-navigate-selected')}>Trang chủ</span>
            {
              selectedNavigateHome && <div className={cx('bar-selected')}></div>
            }
          </Link>

          <Link className={cx('btn-link')} to='/user/create-order' onClick={handleCreateOrderLink}>
            <span className={cx('text-navigate-selected')}>Tạo đơn hàng</span>
            {
              selectedNavigateFirst && <div className={cx('bar-selected')}></div>
            }
          </Link>

          <Link className={cx('btn-link')} to='/user/your-order' onClick={handleYourOrderLink}>
            <span className={cx('text-navigate')}>Đơn hàng của bạn</span>
            {
              selectedNavigateSecond && <div className={cx('bar-selected')}></div>
            }
          </Link>

          <Link className={cx('btn-link')} to='/user/your-contract' onClick={handleContractLink}>
            <span className={cx('text-navigate')}>Hợp đồng</span>
            {
              selectedNavigateThree && <div className={cx('bar-selected')}></div>
            }
          </Link>

          <Link className={cx('btn-link')} to='/user/you-history-bill' onClick={handleBillLink}>
            <span className={cx('text-navigate')}>Hóa đơn</span>
            {
              selectedNavigateLast && <div className={cx('bar-selected')}></div>
            }
          </Link>
        </div>
      </div>

      <div className={cx('container-end')}>
        {
          flat ? (
            <div className={cx('container-auth')}>
              <Link to={'/user/info'}>
                <span className={cx('text-btn')}>{currentUser.hoten}</span>
              </Link>
            </div>
          ) : (
            <div className={cx('container-auth')}>
              <a href='/sign-up'>
                <span className={cx('text-btn')}>Đăng ký</span>
              </a>
              <span className={cx('text-btn')}>/</span>
              <a href='/login'>
                <span className={cx('text-btn')}>Đăng nhập</span>
              </a>
            </div>
          )
        }
        <img className={cx('avt-auth')} src={images.icon_account} alt="avt" />
      </div>
    </div>
  )
}

export default Header

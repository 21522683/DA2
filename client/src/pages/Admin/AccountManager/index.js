import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './AccountManager.module.scss'
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { setIndexUserSelected, setIsOpenModalChangeStatus, setIsOpenModalReview, setListUser } from '../../../redux/slices/userSlice';
import ModalReview from './ModalReview/index.js';
import ModalChangeStatus from './ModalChangeStatus/index.js';

const cx = classNames.bind(styles)

function AccountManager() {

  const list = [
    {
      diaChi: 'Thành phố Hồ Chí Minh',
      tenDoanhNghiep: 'Công ty thương mại cổ phần A',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Đang hoạt động",
      representative: {
        hoten: 'Phan Trọng Tính',
        email: "phantrongtinh1508@gmail.com",
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Cà Mau',
      tenDoanhNghiep: 'Công ty thương mại cổ phần B',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Đang hoạt động",
      representative: {
        hoten: 'Trần Quang Duy',
        email: "duy@gmail.com",
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Bình Phước',
      tenDoanhNghiep: 'Công ty thương mại cổ phần C',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Chờ xét duyệt",
      representative: {
        hoten: 'Lê Thị Bích Loan',
        email: "loan@gmail.com",
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Bình Phước',
      tenDoanhNghiep: 'Công ty thương mại cổ phần D',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Đã bị khóa",
      representative: {
        hoten: 'Châu Dương Phát Tiến',
        email: "loan@gmail.com",
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Quãng ngãi',
      tenDoanhNghiep: 'Công ty thương mại cổ phần E',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Chờ xét duyệt",
      representative: {
        hoten: 'Huỳnh Ngọc Quí',
        email: "quichua@gmail.com",
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Quãng ngãi',
      tenDoanhNghiep: 'Công ty thương mại cổ phần F',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Đang hoạt động",
      representative: {
        hoten: 'Nguyễn Dăn Phát',
        email: 'phat@gmail.com',
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Quãng ngãi',
      tenDoanhNghiep: 'Công ty thương mại cổ phần G',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Đang hoạt động",
      representative: {
        hoten: 'Lê Quang Nhân',
        email: 'quangnhanle@gmail.com',
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Hồ Chí Minh',
      tenDoanhNghiep: 'Công ty thương mại cổ phần A',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Đang hoạt động",
      representative: {
        hoten: 'Phan Trọng Tính',
        email: "phantrongtinh1508@gmail.com",
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Cà Mau',
      tenDoanhNghiep: 'Công ty thương mại cổ phần B',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Đang hoạt động",
      representative: {
        hoten: 'Trần Quang Duy',
        email: "duy@gmail.com",
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Bình Phước',
      tenDoanhNghiep: 'Công ty thương mại cổ phần C',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Chờ xét duyệt",
      representative: {
        hoten: 'Lê Thị Bích Loan',
        email: "loan@gmail.com",
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Bình Phước',
      tenDoanhNghiep: 'Công ty thương mại cổ phần D',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Đã bị khóa",
      representative: {
        hoten: 'Châu Dương Phát Tiến',
        email: "loan@gmail.com",
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Quãng ngãi',
      tenDoanhNghiep: 'Công ty thương mại cổ phần E',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Chờ xét duyệt",
      representative: {
        hoten: 'Huỳnh Ngọc Quí',
        email: "quichua@gmail.com",
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Quãng ngãi',
      tenDoanhNghiep: 'Công ty thương mại cổ phần F',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Đang hoạt động",
      representative: {
        hoten: 'Nguyễn Dăn Phát',
        email: 'phat@gmail.com',
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    },
    {
      diaChi: 'Thành phố Quãng ngãi',
      tenDoanhNghiep: 'Công ty thương mại cổ phần G',
      stk: '1020637570',
      nganHang: 'VIETCOMBANK',
      soFAX: '024.98568476847',
      status: "Đang hoạt động",
      representative: {
        hoten: 'Lê Quang Nhân',
        email: 'quangnhanle@gmail.com',
        password: "phantrongtinh",
        soDienThoai: "0379361210",
      }
    }
  ];

  const dispatch = useDispatch();
  const listUsers = useSelector(state => state.userManagement.usersList);
  const isOpenModalReview = useSelector(state => state.userManagement.isOpenModalReview);
  const isOpenModalChangeStatus = useSelector(state => state.userManagement.isOpenModalChangeStatus);

  useEffect(() => {
    dispatch(setListUser(list));
  }, []);

  const handleChangeInputSearch = (value) => {

  }

  const handleChangeFilter = (value) => {
    console.log(value);
  }

  const handleClickSeeDetail = (index) => {
    const status = listUsers[index].status;
    if (status === "Chờ xét duyệt") {
      dispatch(setIndexUserSelected(index));
      dispatch(setIsOpenModalReview(true));
    }
    else {
      dispatch(setIndexUserSelected(index));
      dispatch(setIsOpenModalChangeStatus(true));
    }
  }

  return (
    <div className={cx('container_main')}>
      {
        isOpenModalReview && <ModalReview />
      }
      {
        isOpenModalChangeStatus && <ModalChangeStatus />
      }
      <div className={cx('header')}>
        <span className={cx('title_header')}>QUẢN LÝ TÀI KHOẢN NGƯỜI DÙNG</span>
        <div className={cx('container_filter')}>
          <div className={cx('container_search')}>
            <span className={cx('title_search')}>Tìm kiếm</span>
            <SearchBar handleChangeInput={handleChangeInputSearch} />
          </div>

          <div className={cx('container_dropdown')}>
            <span className={cx('title_search')}>Trạng thái hoạt động</span>
            <Dropdown handleSelectOption={handleChangeFilter}/>
          </div>
        </div>
      </div>

      <div className={cx('body_container')}>
        <table className={cx('table_main')}>
          <thead>
            <tr className={cx('header_table')}>
              <th className={cx('item_header_table')}>Họ tên</th>
              <th className={cx('item_header_table')}>Tên doanh nghiệp</th>
              <th className={cx('item_header_table')}>Trạng thái hoạt động</th>
              <th className={cx('item_header_table')}>Thao tác</th>
            </tr>
          </thead>

          <tbody className={cx('body_table')}>
            {
              listUsers.map((item, index) => {
                return (
                  <tr className={cx('row_table')} key={index}>
                    <td className={cx('item_row_table')}>{item.representative.hoten}</td>
                    <td className={cx('item_row_table')}>{item.tenDoanhNghiep}</td>
                    {
                      item.status === "Đang hoạt động" && <td className={cx(['item_row_table', 'active'])}>{item.status}</td>
                    }
                    {
                      item.status === "Chờ xét duyệt" && <td className={cx(['item_row_table', 'waiting'])}>{item.status}</td> 
                    }
                    {
                      item.status === "Đã bị khóa" && <td className={cx(['item_row_table', 'lock'])}>{item.status}</td>
                    }
                    <td className={cx('item_row_table')}>
                      <span className={cx('text_row')} onClick={() => handleClickSeeDetail(index)}>Xem chi tiết</span>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default AccountManager;

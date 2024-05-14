import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './AccountManager.module.scss'
import SearchBar from './SearchBar';
import DropdownStatus from './DropdownStatus';
import { useDispatch, useSelector } from 'react-redux';
import { setIndexUserSelected, setIsOpenModalChangeStatus, setIsOpenModalNotVerify, setIsOpenModalReview, setListUser } from '../../../redux/slices/userSlice';
import ModalReview from './ModalReview/index.js';
import ModalChangeStatus from './ModalChangeStatus/index.js';
import ModalNotVerify from './ModalNotVerify/index.js';
import DropdownVerify from './DropdownVerify/index.js';
import customAxios from '../../../utils/customAxios.js'
import baseURL from '../../../utils/index.js'
import HashLoader from "react-spinners/HashLoader";

const cx = classNames.bind(styles)

function AccountManager() {

  const dispatch = useDispatch();
  const isOpenModalReview = useSelector(state => state.userManagement.isOpenModalReview);
  const isOpenModalChangeStatus = useSelector(state => state.userManagement.isOpenModalChangeStatus);
  const isOpenModalNotVerify = useSelector(state => state.userManagement.isOpenModalNotVerify);
  const loading = useSelector(state => state.userManagement.isLoading);


  const [listUsers, setListUsers] = useState([]);
  const [pathWithQuery, setPathWithQuery] = useState('');
  const [filter, setFilter] = useState({
    textSearch: '',
    status: 'Tất cả',
    isVerify: 'Tất cả',
  });
  const handleChangeInputSearch = (value) => {
    setFilter((prev) => ({ ...prev, textSearch: value }));
  }
  const handleChangeFilterVerify = (value) => {
    setFilter((prev) => ({ ...prev, isVeriy: value }));
  };
  const handleChangeFilterStatus = (value) => {
    setFilter((prev) => ({ ...prev, status: value }));
  };
  const getAllUsers = async () => {
    try {
      const res = await customAxios.get(pathWithQuery);
      setListUsers(res.data.data.users);
      dispatch(setListUser(res.data.data.users));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    const queryParams = { searchString: filter.textSearch, status: filter.status, isVerify: filter.isVerify };
    const queryString = new URLSearchParams(queryParams).toString();
    const pathWithQuery = `${baseURL}/user/getAllUser?${queryString}`;
    setPathWithQuery(pathWithQuery);
  }, [filter]);

  useEffect(() => {
    if (pathWithQuery) {
      getAllUsers();
    }
  }, [pathWithQuery]);

  const handleClickSeeDetail = (index) => {
    const status = listUsers[index].status;
    const isVerify = listUsers[index].isVerify;
    const info = listUsers[index].infoVerify;

    if (status === true) {
      if (isVerify === true) {
        dispatch(setIndexUserSelected(index));
        dispatch(setIsOpenModalReview(true));
      }
      else {
        if (info) {
          dispatch(setIndexUserSelected(index));
          dispatch(setIsOpenModalReview(true));
        }
        else {
          dispatch(setIndexUserSelected(index));
          dispatch(setIsOpenModalNotVerify(true));
        }
      }
    }
    else {
      dispatch(setIndexUserSelected(index));
      dispatch(setIsOpenModalChangeStatus(true));
    }
  }

  return (
    <div className={cx('container_main')}>
      {
        loading && (
          <div className={cx("container-loader")}>
            <HashLoader
              color="#0088af"
              loading={loading}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
              className={cx("loader-feedback")}
            />
          </div>
        )
      }
      {
        isOpenModalReview && <ModalReview />
      }
      {
        isOpenModalChangeStatus && <ModalChangeStatus />
      }
      {
        isOpenModalNotVerify && <ModalNotVerify />
      }
      <div className={cx('header')}>
        <span className={cx('title_header')}>QUẢN LÝ TÀI KHOẢN NGƯỜI DÙNG</span>
        <div className={cx('container_filter')}>
          <div className={cx('container_search')}>
            <span className={cx('title_search')}>Tìm kiếm</span>
            <SearchBar handleChangeInput={handleChangeInputSearch} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={cx('container_dropdown')}>
              <span className={cx('title_search')}>Trạng thái hoạt động</span>
              <DropdownStatus handleSelectOptionStatus={handleChangeFilterStatus} />
            </div>

            <div className={cx('container_dropdown')}>
              <span className={cx('title_search')}>Trạng thái xác minh</span>
              <DropdownVerify handleSelectOptionVerify={handleChangeFilterVerify} />
            </div>
          </div>
        </div>
      </div>

      <div className={cx('body_container')}>
        <table className={cx('table_main')}>
          <thead>
            <tr className={cx('header_table')}>
              <th className={cx('item_header_table')}>Họ tên</th>
              <th className={cx('item_header_table')}>Địa chỉ email</th>
              <th className={cx('item_header_table')}>Trạng thái hoạt động</th>
              <th className={cx('item_header_table')}>Trạng thái xác minh</th>
              <th className={cx('item_header_table')}>Thao tác</th>
            </tr>
          </thead>

          <tbody className={cx('body_table')}>
            {
              listUsers.map((item, index) => {
                return (
                  item.isAdmin === false && (
                    <tr className={cx('row_table')} key={index}>
                      <td className={cx('item_row_table')}>{item.hoten}</td>
                      <td className={cx('item_row_table')}>{item.email}</td>
                      {
                        item.status === true ? (<td className={cx(['item_row_table', 'active'])}>Đang hoạt động</td>) : (<td className={cx(['item_row_table', 'lock'])}>Đang bị khóa</td>)
                      }
                      {
                        item.isVerify === true ? (<td className={cx(['item_row_table', 'active'])}>Đã xác minh</td>) : (item.isVerify === false && item.infoVerify ? (<td className={cx(['item_row_table', 'waiting'])}>Chờ xác minh</td>) : (<td className={cx(['item_row_table', 'lock'])}>Chưa xác minh</td>))
                      }
                      <td className={cx('item_row_table')}>
                        <span className={cx('text_row')} onClick={() => handleClickSeeDetail(index)}>Xem chi tiết</span>
                      </td>
                    </tr>
                  )
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

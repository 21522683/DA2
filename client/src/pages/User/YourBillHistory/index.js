import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './YourBillHistory.module.scss';
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import baseUrl from '../../../utils';
import { toast } from 'react-toastify';
import customAxios from '../../../utils//customAxios';
import convertDate from '../../../utils/convertDate';
import { setIndexBillOfUserSelected, setIsOpenModalDetailBillOfUser, setIsOpenModalInfoBillOfUser, setListBillsOfUser } from '../../../redux/slices/billSlice'
import DetailBill from './DetailBill'
import InfoBill from './InfoBill'
import HashLoader from "react-spinners/HashLoader";

const cx = classNames.bind(styles);

function YourBillHistory() {
  const dispatch = useDispatch();
  const billOfUserList = useSelector(state => state.billManagement.billOfUserList);
  const isOpenModalDetailBillOfUser = useSelector(state => state.billManagement.isOpenModalDetailBillOfUser);
  const isOpenModalInfoBillOfUser = useSelector(state => state.billManagement.isOpenModalInfoBillOfUser);
  const currentUser = useSelector(state => state.userManagement.currentUser);
  const loading = useSelector(state => state.billManagement.isLoading);

  const [filter, setFilter] = useState({
    textSearch: '',
    status: 'Tất cả',
    ngayTao: convertDate(new Date()).toString(),
  });
  const [startDateFilter, setStartDateFilter] = useState(new Date());
  const [pathWithQuery, setPathWithQuery] = useState('');

  const handleChangeInputSearch = (value) => {
    setFilter((prev) => ({ ...prev, textSearch: value.trim() }));
  };

  const handleChangeFilter = (value) => {
    setFilter((prev) => ({ ...prev, status: value }));
  };

  const handleChangeDate = (date) => {
    const formattedDate = convertDate(date);
    setStartDateFilter(date);
    setFilter((prev) => ({ ...prev, ngayTao: formattedDate }));
  };

  const getAllBillUser = async () => {
    try {
      const response = await customAxios.get(pathWithQuery);
      dispatch(setListBillsOfUser(response.data.bills));
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.message, {
          position: 'top-right',
        });
      }
    }
  };

  useEffect(() => {
    const queryParams = {
      searchString: filter.textSearch,
      status: filter.status,
      ngayTao: filter.ngayTao,
    };
    const queryString = new URLSearchParams(queryParams).toString();
    const pathWithQuery = `${baseUrl}/bill/getAllBillOfUser/${currentUser._id}/?${queryString}`;
    setPathWithQuery(pathWithQuery);
    console.log(filter);
  }, [filter]);

  useEffect(() => {
    if (pathWithQuery) {
      getAllBillUser();
    }
  }, [pathWithQuery]);

  const handleClickSeeDetail = (index) => {
    dispatch(setIndexBillOfUserSelected(index));
    if (billOfUserList[index].trangThai) {
      dispatch(setIsOpenModalDetailBillOfUser(true));
    } else {
      dispatch(setIsOpenModalInfoBillOfUser(true));
    }
  };

  return (
    <div className={cx('container_main')}>
      {loading && (
        <div className={cx('container-loader')}>
          <HashLoader
            color="#0088af"
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
            className={cx('loader-feedback')}
          />
        </div>
      )}
      {isOpenModalDetailBillOfUser && <DetailBill />}
      {isOpenModalInfoBillOfUser && <InfoBill />}
      <div className={cx('title_page')}>HÓA ĐƠN CỦA BẠN</div>
      <div className={cx('header')}>
        <div className={cx('container_filter')}>
          <div className={cx('container_search')}>
            <span className={cx('title_search')}>Tìm kiếm hóa đơn</span>
            <SearchBar handleChangeInput={handleChangeInputSearch} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className={cx('container_dropdown')} style={{ marginRight: '80px' }}>
              <span className={cx('title_search')}>Ngày tạo hóa đơn</span>
              <DatePicker dateFormat="dd/MM/YYYY" className={cx('date_picker')} selected={startDateFilter} onChange={(date) => handleChangeDate(date)} />
            </div>
            <div className={cx('container_dropdown')}>
              <span className={cx('title_search')}>Trạng thái hóa đơn</span>
              <Dropdown handleSelectOption={handleChangeFilter} />
            </div>
          </div>
        </div>
      </div>
      <div className={cx('body_container')}>
        <table className={cx('table_main')}>
          <thead>
            <tr className={cx('header_table')}>
              <th className={cx('item_header_table')}>Mã hóa đơn</th>
              <th className={cx('item_header_table')}>Mã đơn hàng</th>
              <th className={cx('item_header_table')}>Ngày tạo hóa đơn</th>
              <th className={cx('item_header_table')}>Trạng thái</th>
              <th className={cx('item_header_table')}>Thao tác</th>
            </tr>
          </thead>
          <tbody className={cx('body_table')}>
            {billOfUserList.length === 0 ? (
              <tr className={cx('row_table')}>
                <td colSpan={5} className={cx('item_row_table')} style={{ textAlign: 'center' }}>
                  Không có hóa đơn nào trong danh sách
                </td>
              </tr>
            ) : (
              billOfUserList.map((item, index) => (
                <tr className={cx('row_table')} key={item._id}>
                  <td className={cx('item_row_table')}>{item._id}</td>
                  <td className={cx('item_row_table')}>{item.keKhaiHH.donHang._id}</td>
                  <td className={cx('item_row_table')}>{convertDate(item.ngayTao)}</td>
                  {item.trangThai ? (
                    <td className={cx(['item_row_table', 'active'])}>Đã thanh toán</td>
                  ) : (
                    <td className={cx(['item_row_table', 'lock'])}>Chưa thanh toán</td>
                  )}
                  <td className={cx('item_row_table')} onClick={() => handleClickSeeDetail(index)}>
                    <span className={cx('text_row')}>Xem chi tiết</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default YourBillHistory;

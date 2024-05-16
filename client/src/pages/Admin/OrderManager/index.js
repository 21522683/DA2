import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './OrderManager.module.scss'
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DetailOrder from './DetailOrder'
import { useDispatch, useSelector } from 'react-redux';
import { setIndexOrderSelected, setIsOpenModalDetail, setListOrder } from '../../../redux/slices/orderSlice';
import HashLoader from "react-spinners/HashLoader";
import baseUrl from '../../../utils';
import { toast } from 'react-toastify';
import customAxios from '../../../utils//customAxios';
import convertDate from '../../../utils/convertDate';

const cx = classNames.bind(styles);

function OrderManager() {

  const dispatch = useDispatch();
  const listOrders = useSelector(state => state.orderManagement.ordersList);
  const isOpenModalDetail = useSelector(state => state.orderManagement.isOpenModalDetail);
  const loading = useSelector(state => state.orderManagement.isLoading);

  const handleClickSeeDetail = (index) => {
    dispatch(setIsOpenModalDetail(true));
    dispatch(setIndexOrderSelected(index));
  }

  const [filter, setFilter] = useState({
    textSearch: '',
    status: 'Tất cả',
    ngayTaoDon: convertDate(new Date()).toString(),
  });
  const [startDateFilter, setStartDateFilter] = useState(new Date());
  const [pathWithQuery, setPathWithQuery] = useState('');

  const handleChangeInputSearch = (value) => {
    setFilter((prev) => ({ ...prev, textSearch: value.trim() }));
  }
  const handleChangeFilter = (value) => {
    setFilter((prev) => ({ ...prev, status: value }));
  }
  const handleChangeDate = (date) => {
    const formattedDate = convertDate(date);
    setStartDateFilter(date);
    setFilter(prev => ({ ...prev, ngayTaoDon: formattedDate }));
  }

  const getAllOrders = async () => {
    try {
      const response = await customAxios.get(pathWithQuery);
      dispatch(setListOrder(response.data.orders));
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.message, {
          position: "top-right"
        }
        );
      }
    }
  }

  useEffect(() => {
    const queryParams = { searchString: filter.textSearch, status: filter.status, ngayTaoDon: filter.ngayTaoDon };
    const queryString = new URLSearchParams(queryParams).toString();
    const pathWithQuery = `${baseUrl}/order/getAllOrders?${queryString}`;
    setPathWithQuery(pathWithQuery);
    console.log(filter);
  }, [filter]);

  useEffect(() => {
    if (pathWithQuery) {
      getAllOrders();
    }
  }, [pathWithQuery]);



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
        isOpenModalDetail && <DetailOrder />
      }
      <div className={cx('header')}>
        <span className={cx('title_header')}>QUẢN LÝ ĐƠN HÀNG</span>
        <div className={cx('container_filter')}>
          <div className={cx('container_search')}>
            <span className={cx('title_search')}>Tìm kiếm</span>
            <SearchBar handleChangeInput={handleChangeInputSearch} />
          </div>

          <div className={cx('container_dropdown')}>
            <span className={cx('title_search')}>Ngày tạo đơn</span>
            <DatePicker className={cx('date_picker')} selected={startDateFilter} onChange={(date) => handleChangeDate(date)} />
          </div>

          <div className={cx('container_dropdown')}>
            <span className={cx('title_search')}>Trạng thái hoạt động</span>
            <Dropdown handleSelectOption={handleChangeFilter} />
          </div>
        </div>
      </div>

      <div className={cx('body_container')}>
        <table className={cx('table_main')}>
          <thead>
            <tr className={cx('header_table')}>
              <th className={cx('item_header_table')}>Mã đơn hàng</th>
              <th className={cx('item_header_table')}>Người tạo đơn</th>
              <th className={cx('item_header_table')}>Ngày tạo đơn</th>
              <th className={cx('item_header_table')}>Trạng thái</th>
              <th className={cx('item_header_table')}>Thao tác</th>
            </tr>
          </thead>

          <tbody className={cx('body_table')}>
            {
              listOrders.map((item, index) => {
                return (
                  <tr className={cx('row_table')} key={item._id}>
                    <td className={cx('item_row_table')}>{item._id}</td>
                    <td className={cx('item_row_table')}>{item.user.hoten}</td>
                    <td className={cx('item_row_table')}>{convertDate(item.ngayTaoDon)}</td>
                    {
                      item.trangThaiHuy ? (<td className={cx(['item_row_table', 'lock'])}>Đã bị hủy</td>) : (item.trangThaiXetDuyet ? (<td className={cx(['item_row_table', 'active'])}>Đã xét duyệt</td>) : (<td className={cx(['item_row_table', 'waiting'])}>Chờ xét duyệt</td>))
                    }
                    <td className={cx('item_row_table')} onClick={() => handleClickSeeDetail(index)}>
                      <span className={cx('text_row')}>Xem chi tiết</span>
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

export default OrderManager

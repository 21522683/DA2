import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from './YourOrder.module.scss';
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const cx = classNames.bind(styles);

function YourOrder() {

  const [startDateFilter, setStartDateFilter] = useState(new Date());

  const handleChangeInputSearch = (value) => {

  }
  const handleChangeFilter = (value) => {

  }
  const handleClickSeeDetail = (index) => {

  }

  return (
    <div className={cx('container_main')}>
      <div className={cx('title_page')}>ĐƠN HÀNG CỦA BẠN</div>
      <div className={cx('header')}>
        <div className={cx('container_filter')}>
          <div className={cx('container_search')}>
            <span className={cx('title_search')}>Tìm kiếm</span>
            <SearchBar handleChangeInput={handleChangeInputSearch} />
          </div>

          <div className={cx('container_dropdown')}>
            <span className={cx('title_search')}>Ngày tạo đơn</span>
            <DatePicker className={cx('date_picker')} selected={startDateFilter} onChange={(date) => setStartDateFilter(date)} />
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
              <th className={cx('item_header_table')}>Ngày tạo đơn</th>
              <th className={cx('item_header_table')}>Trạng thái</th>
              <th className={cx('item_header_table')}>Thao tác</th>
            </tr>
          </thead>

          <tbody className={cx('body_table')}>
            {
              [1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <tr className={cx('row_table')}>
                    <td className={cx('item_row_table')}>DH001</td>
                    <td className={cx('item_row_table')}>11/02/2025</td>
                    <td className={cx(['item_row_table', 'active'])}>Đã xét duyệt</td>
                    {/* {
                      item.trangThaiXetDuyet ? () : (<td className={cx(['item_row_table', 'lock'])}>Chờ xét duyệt</td>)
                    } */}
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

export default YourOrder;

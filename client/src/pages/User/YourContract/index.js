import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from './YourContract.module.scss';
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DetailContract from './DetailContract';


const cx = classNames.bind(styles);

function YourContract() {

  const [startDateFilter, setStartDateFilter] = useState(new Date());

  const handleChangeInputSearch = (value) => {

  }
  const handleChangeFilter = (value) => {

  }
  const handleClickSeeDetail = (index) => {

  }

  return (
    <div className={cx('container_main')}>
      <div className={cx('title_page')}>HỢP ĐỒNG CỦA BẠN</div>
      <div className={cx('header')}>
        <div className={cx('container_filter')}>
          <div className={cx('container_search')}>
            <span className={cx('title_search')}>Tìm kiếm hợp đồng</span>
            <SearchBar handleChangeInput={handleChangeInputSearch} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className={cx('container_dropdown')} style={{marginRight: '80px'}}>
              <span className={cx('title_search')}>Ngày tạo hợp đồng</span>
              <DatePicker dateFormat="dd/MM/YYYY" className={cx('date_picker')} selected={startDateFilter} onChange={(date) => setStartDateFilter(date)} />
            </div>

            <div className={cx('container_dropdown')}>
              <span className={cx('title_search')}>Trạng thái hợp đồng</span>
              <Dropdown handleSelectOption={handleChangeFilter} />
            </div>
          </div>

        </div>
      </div>

      <div className={cx('body_container')}>
        <table className={cx('table_main')}>
          <thead>
            <tr className={cx('header_table')}>
              <th className={cx('item_header_table')}>Mã số hợp đồng</th>
              <th className={cx('item_header_table')}>Ngày tạo hợp đồng</th>
              <th className={cx('item_header_table')}>Trạng thái hợp đồng</th>
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
                    <td className={cx(['item_row_table', 'active'])}>Đã ký kết</td>
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

export default YourContract;

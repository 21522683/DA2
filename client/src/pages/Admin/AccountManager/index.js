import React from 'react'
import classNames from "classnames/bind";
import styles from './AccountManager.module.scss'

import SearchBar from './SearchBar';
import Dropdown from './DropDown';

const cx = classNames.bind(styles)

function AccountManager() {

  const handleChangeInputSearch = (value) => {

  }


  return (
    <div className={cx('container_main')}>
      <div className={cx('header')}>
        <span className={cx('title_header')}>QUẢN LÝ TÀI KHOẢN NGƯỜI DÙNG</span>
        <div className={cx('container_filter')}>
          <div className={cx('container_search')}>
            <span className={cx('title_search')}>Tìm kiếm</span>
            <SearchBar handleChangeInput={handleChangeInputSearch} />
          </div>

          <div className={cx('container_dropdown')}>
            <span className={cx('title_search')}>Trạng thái hoạt động</span>
            <Dropdown />
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
              [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 20].map(() => {
                return (
                  <tr className={cx('row_table')}>
                    <td className={cx('item_row_table')}>Phan Văn Tường An</td>
                    <td className={cx('item_row_table')}>Công ty cổ phàn thương mại ABC</td>
                    <td className={cx('item_row_table')}>Đang hoạt động</td>
                    <td className={cx('item_row_table')}>
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

export default AccountManager;

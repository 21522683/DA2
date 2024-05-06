import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from './ContractManager.module.scss';
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const cx = classNames.bind(styles);


function ContractManager() {
    const [startDateFilter, setStartDateFilter] = useState(new Date());

    const handleChangeInputSearch = (value) => {

    }
    const handleChangeFilter = (value) => {

    }
    const handleClickSeeDetail = (index) => {

    }


    return (
        <div className={cx('container_main')}>
            {/* <DetailContract/> */}
            <div className={cx('header')}>
                <span className={cx('title_header')}>QUẢN LÝ HỢP ĐỒNG</span>
                <div className={cx('container_filter')}>
                    <div className={cx('container_search')}>
                        <span className={cx('title_search')}>Tìm kiếm</span>
                        <SearchBar handleChangeInput={handleChangeInputSearch} />
                    </div>

                    <div className={cx('container_dropdown')}>
                        <span className={cx('title_search')}>Ngày tạo hợp đồng</span>
                        <DatePicker className={cx('date_picker')} selected={startDateFilter} onChange={(date) => setStartDateFilter(date)} />
                    </div>

                    <div className={cx('container_dropdown')}>
                        <span className={cx('title_search')}>Trạng thái hợp đồng</span>
                        <Dropdown handleSelectOption={handleChangeFilter} />
                    </div>
                </div>
            </div>

            <div className={cx('body_container')}>
                <table className={cx('table_main')}>
                    <thead>
                        <tr className={cx('header_table')}>
                            <th className={cx('item_header_table')}>Mã hợp đồng</th>
                            <th className={cx('item_header_table')}>Ngày tạo hợp đồng</th>
                            <th className={cx('item_header_table')}>Trạng thái hợp đồng</th>
                            <th className={cx('item_header_table')}>Thao tác</th>
                        </tr>
                    </thead>

                    <tbody className={cx('body_table')}>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                                return (
                                    <tr className={cx('row_table')} key={index}>
                                        <td className={cx('item_row_table')}>HD001</td>
                                        <td className={cx('item_row_table')}>01/01/2024</td>
                                        <td className={cx(['item_row_table', 'active'])}>Đã ký kết</td>
                                        {/* {
                        item.trangThai ? (<td className={cx(['item_row_table', 'active'])}>Đã ký kết</td>) : (<td className={cx(['item_row_table', 'lock'])}>Chưa ký kết</td>)
                      } */
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

export default ContractManager;

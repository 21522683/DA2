import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from './CreateOrder.module.scss';
import Dropdown from './DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ItemDetailOrder from './ItemDetailOrder/index.js';
import ModalAddGoods from './ModalAddGoods/index.js';
import MessageBox from './MessageBox/index.js';

const cx = classNames.bind(styles);

function CreateOrder() {

  const [startDateFilter, setStartDateFilter] = useState(new Date());
  const [endDateFilter, setEndDateFilter] = useState(new Date());

  const handleChangeInputSearch = (value) => {

  }
  const handleChangeFilter = (value) => {

  }


  return (
    <div className={cx('container_main')}>
      {/* <ModalAddGoods/> */}
      {/* <MessageBox/> */}
      <div className={cx('title_page')}>TẠO ĐƠN HÀNG CỦA BẠN</div>

      <div className={cx('container_1')}>

        <div className={cx('container_dropdown')}>
          <span className={cx('title_search')}>Ngày đi dự kiến</span>
          <DatePicker className={cx('date_picker')} selected={startDateFilter} onChange={(date) => setStartDateFilter(date)} />
        </div>

        <div className={cx('container_dropdown')}>
          <span className={cx('title_search')}>Ngày đến dự kiến</span>
          <DatePicker className={cx('date_picker')} selected={endDateFilter} onChange={(date) => setEndDateFilter(date)} />
        </div>

        <div className={cx('container_dropdown')}>
          <span className={cx('title_search')}>Lựa chọn dịch vụ</span>
          <Dropdown handleSelectOption={handleChangeFilter} />
        </div>
      </div>

      <div className={cx('container_2')}>

        <div className={cx('container_input')}>
          <span className={cx('title_input')}>Nhập thông tin cảng đi</span>
          <input className={cx('content_input')} type="text" placeholder='Nhập thông tin cảng đi cho đơn hàng' />
        </div>

        <div className={cx('container_input')}>
          <span className={cx('title_input')}>Nhập thông tin cảng đến</span>
          <input className={cx('content_input')} type="text" placeholder='Nhập thông tin cảng đến cho đơn hàng' />
        </div>

      </div>

      <div className={cx('container_3')}>
        <span className={cx('title_hh')}>THÔNG TIN VỀ HÀNG HÓA</span>
        <div className={cx('btn_add')}>
          Thêm hàng hóa
        </div>
      </div>

      <div className={cx('container_4')}>
        {
          [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return (
              <ItemDetailOrder key={index}/>
            )
          })
        }
      </div>

      <div className={cx('container_5')}>
        <div className={cx('btn_add')}>
          Tạo đơn hàng và gửi cho hệ thống xét duyệt
        </div>
      </div>

    </div>
  )
}

export default CreateOrder;

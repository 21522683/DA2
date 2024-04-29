import React from 'react'
import classNames from "classnames/bind";
import styles from './ContainerManager.module.scss';
import SearchBar from './SearchBar';
import Dropdown from './DropDown';


const cx = classNames.bind(styles);

function ContainerManager() {

  const handleChangeInputSearch = (value) => {

  }
  const handleChangeFilter = (value) => {

  }

  return (
    <div className={cx('container_main')}>
      <div className={cx('header')}>
        <span className={cx('title_header')}>QUẢN LÝ ĐƠN HÀNG</span>

        <div className={cx('container-first')}>
          <div className={cx('container_filter')}>
            <div className={cx('container_search')}>
              <span className={cx('title_search')}>Tìm kiếm</span>
              <SearchBar handleChangeInput={handleChangeInputSearch} />
            </div>

            <div className={cx('container_dropdown')}>
              <span className={cx('title_search')}>Trạng thái hoạt động</span>
              <Dropdown handleSelectOption={handleChangeFilter} />
            </div>
          </div>

          <div className={cx('btn-add')}>
            Thêm container
          </div>
        </div>
      </div>

      <div className={cx('body_container')}>
        
      </div>
    </div>
  )
}

export default ContainerManager

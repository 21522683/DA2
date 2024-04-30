import React, { useEffect } from 'react'
import classNames from "classnames/bind";
import styles from './ContainerManager.module.scss';
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import ItemContainer from './ItemContainer';
import { useDispatch, useSelector } from 'react-redux';
import {setListContainer} from '../../../redux/sliceAdmin/containerSlice';

const cx = classNames.bind(styles);

function ContainerManager() {

  const list = [
    {
      soHieu: "QC-99877TS_0",
      theTichChua: 1411,
      trangThai: true,
      trongLuong: 1.2,
    },
    {
      soHieu: "QC-99877TS_1",
      theTichChua: 1211,
      trangThai: true,
      trongLuong: 1.32,
    },
    {
      soHieu: "QC-99877TS_2",
      theTichChua: 911,
      trangThai: false,
      trongLuong: 1.02,
    },
    {
      soHieu: "QC-99877TS_0",
      theTichChua: 1411,
      trangThai: true,
      trongLuong: 1.2,
    },
    {
      soHieu: "QC-99877TS_1",
      theTichChua: 1211,
      trangThai: true,
      trongLuong: 1.32,
    },
    {
      soHieu: "QC-99877TS_2",
      theTichChua: 911,
      trangThai: false,
      trongLuong: 1.02,
    },
    {
      soHieu: "QC-99877TS_1",
      theTichChua: 1211,
      trangThai: true,
      trongLuong: 1.32,
    },
    {
      soHieu: "QC-99877TS_2",
      theTichChua: 911,
      trangThai: false,
      trongLuong: 1.02,
    },
    {
      soHieu: "QC-99877TS_2",
      theTichChua: 911,
      trangThai: false,
      trongLuong: 1.02,
    },
    {
      soHieu: "QC-99877TS_2",
      theTichChua: 911,
      trangThai: false,
      trongLuong: 1.02,
    },
    {
      soHieu: "QC-99877TS_1",
      theTichChua: 1211,
      trangThai: true,
      trongLuong: 1.32,
    },
  ];
  const dispatch = useDispatch();
  const listContainers = useSelector(state => state.containerManagement.containersList);
  const isOpenModalAdd = useSelector(state => state.containerManagement.isOpenModalAdd);

  useEffect(() => {
    dispatch(setListContainer(list));
  }, []);

  const handleChangeInputSearch = (value) => {

  }
  const handleChangeFilter = (value) => {

  }

  return (
    <div className={cx('container_main')}>
      <div className={cx('header')}>
        <span className={cx('title_header')}>QUẢN LÝ CONTAINER</span>

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
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
            return (
              <ItemContainer />
            )
          })
        }


      </div>
    </div>
  )
}

export default ContainerManager

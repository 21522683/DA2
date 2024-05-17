import React, { useEffect } from 'react'
import classNames from "classnames/bind";
import styles from './ContainerManager.module.scss';
import SearchBar from './SearchBar';
import DropDownStatus from './DropDownStatus/index.js';
import ItemContainer from './ItemContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModalAdd, setListContainer } from '../../../redux/slices/containerSlice';
import ModalAddContainer from './ModalAddContainer';
import ModalUpdateContainer from './ModalUpdateContainer';
import MessageBox from './MessageBox';
import DropDownType from './DropDownType/index.js';
const cx = classNames.bind(styles);

function ContainerManager() {

  const list = [
    {
      soHieu: "QC-99877TS_0",
      theTichChua: 1411,
      trangThai: false,
      trongLuong: 1.2,
    },
    {
      soHieu: "QC-99877TS_1",
      theTichChua: 1211,
      trangThai: false,
      trongLuong: 1.32,
    },
    {
      soHieu: "QC-99877TS_2",
      theTichChua: 911,
      trangThai: true,
      trongLuong: 1.02,
    },
    {
      soHieu: "QC-99877TS_0",
      theTichChua: 1411,
      trangThai: false,
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
  const isOpenModalUpdate = useSelector(state => state.containerManagement.isOpenModalUpdate);
  const isOpenMessagebox = useSelector(state => state.containerManagement.isOpenMessagebox);

  useEffect(() => {
    dispatch(setListContainer(list));
  }, []);

  const handleClickAdd = () => {
    dispatch(setIsOpenModalAdd(true));
  }

  const handleChangeInputSearch = (value) => {

  }
  const handleChangeFilterType = (value) => {

  }
  const handleChangeFilterStatus = (value) => {

  }

  return (
    <div className={cx('container_main')}>
      {
        isOpenModalAdd && <ModalAddContainer />
      }
      {
        isOpenModalUpdate && <ModalUpdateContainer />
      }
      {
        isOpenMessagebox && <MessageBox/>
      }
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
              <DropDownStatus handleSelectOptionStatus={handleChangeFilterStatus} />
            </div>

            <div className={cx('container_dropdown')}>
              <span className={cx('title_search')}>Loại container</span>
              <DropDownType handleSelectOptionType={handleChangeFilterType} />
            </div>
          </div>

          <div className={cx('btn-add')} onClick={handleClickAdd}>
            Thêm container
          </div>
        </div>
      </div>

      <div className={cx('body_container')}>
        {
          listContainers.map((item, index) => {
            return (
              <ItemContainer itemContainer={item} key={index} indexItem={index} />
            )
          })
        }


      </div>
    </div>
  )
}

export default ContainerManager

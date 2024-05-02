import React, { useEffect } from 'react'
import classNames from "classnames/bind";
import styles from './VesselManager.module.scss';
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import ItemVessel from './ItemVessel';
import { useDispatch, useSelector } from 'react-redux';
import ModalUpdateVessel from './ModalUpdateVessel';
import MessageBox from './MessageBox';
import { setIsOpenModalAdd, setListVessel } from '../../../redux/sliceAdmin/vesselSlice';
import ModalAddVessel from './ModalAddVessel';
const cx = classNames.bind(styles);

function VesselManager() {

  const list = [
    {
      tenTau: "Tàu CONCACUT-SHPPING_1",
      soHieu: "QC-99877TS_0",
      taiTrong: 1411,
      trangThai: false,
      trongLuong: 1.2,
    },
    {
      tenTau: "Tàu CONCACUT-SHPPING_2",
      soHieu: "QC-99877TS_1",
      taiTrong: 1211,
      trangThai: false,
      trongLuong: 1.32,
    },
    {
      tenTau: "Tàu CONCACUT-SHPPING_3",
      soHieu: "QC-99877TS_2",
      taiTrong: 911,
      trangThai: true,
      trongLuong: 1.02,
    },
    {
      tenTau: "Tàu CONCACUT-SHPPING_4",
      soHieu: "QC-99877TS_0",
      taiTrong: 1411,
      trangThai: false,
      trongLuong: 1.2,
    },
    {
      tenTau: "Tàu CONCACUT-SHPPING_5",
      soHieu: "QC-99877TS_1",
      taiTrong: 1211,
      trangThai: true,
      trongLuong: 1.32,
    },
    {
      tenTau: "Tàu CONCACUT-SHPPING_6",
      soHieu: "QC-99877TS_2",
      taiTrong: 911,
      trangThai: false,
      trongLuong: 1.02,
    },
    {
      tenTau: "Tàu CONCACUT-SHPPING_7",
      soHieu: "QC-99877TS_1",
      taiTrong: 1211,
      trangThai: true,
      trongLuong: 1.32,
    },
    {
      tenTau: "Tàu CONCACUT-SHPPING_8",
      soHieu: "QC-99877TS_2",
      taiTrong: 911,
      trangThai: false,
      trongLuong: 1.02,
    },
    {
      tenTau: "Tàu CONCACUT-SHPPING_9",
      soHieu: "QC-99877TS_2",
      taiTrong: 911,
      trangThai: false,
      trongLuong: 1.02,
    },
    {
      tenTau: "Tàu CONCACUT-SHPPING_10",
      soHieu: "QC-99877TS_2",
      taiTrong: 911,
      trangThai: false,
      trongLuong: 1.02,
    },
    {
      tenTau: "Tàu CONCACUT-SHPPING_11",
      soHieu: "QC-99877TS_1",
      taiTrong: 1211,
      trangThai: true,
      trongLuong: 1.32,
    },
  ];
  const dispatch = useDispatch();
  const listVessels = useSelector(state => state.vesselManagement.vesselsList);
  const isOpenModalAdd = useSelector(state => state.vesselManagement.isOpenModalAdd);
  const isOpenModalUpdate = useSelector(state => state.vesselManagement.isOpenModalUpdate);
  const isOpenMessagebox = useSelector(state => state.vesselManagement.isOpenMessagebox);

  useEffect(() => {
    dispatch(setListVessel(list));
  }, []);

  const handleClickAdd = () => {
    dispatch(setIsOpenModalAdd(true));
  }

  const handleChangeInputSearch = (value) => {

  }
  const handleChangeFilter = (value) => {

  }

  return (
    <div className={cx('container_main')}>
      {
        isOpenModalAdd && <ModalAddVessel />
      }
      {
        isOpenModalUpdate && <ModalUpdateVessel />
      }
      {
        isOpenMessagebox && <MessageBox/>
      }
      <div className={cx('header')}>
        <span className={cx('title_header')}>QUẢN LÝ TÀU</span>

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

          <div className={cx('btn-add')} onClick={handleClickAdd}>
            Thêm tàu
          </div>
        </div>
      </div>

      <div className={cx('body_container')}>
        {
          listVessels.map((item, index) => {
            return (
              <ItemVessel itemVessel={item} key={index} indexItem={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default VesselManager;

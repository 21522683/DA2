import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './VesselManager.module.scss';
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import ItemVessel from './ItemVessel';
import { useDispatch, useSelector } from 'react-redux';
import ModalUpdateVessel from './ModalUpdateVessel';
import MessageBox from './MessageBox';
import { setIsOpenModalAdd, setListVessel } from '../../../redux/slices/vesselSlice';
import ModalAddVessel from './ModalAddVessel';
import HashLoader from "react-spinners/HashLoader";
import baseUrl from '../../../utils/index.js';
import customAxios from '../../../utils//customAxios';

const cx = classNames.bind(styles);

function VesselManager() {

  const dispatch = useDispatch();
  const listVessels = useSelector(state => state.vesselManagement.vesselsList);
  const isOpenModalAdd = useSelector(state => state.vesselManagement.isOpenModalAdd);
  const isOpenModalUpdate = useSelector(state => state.vesselManagement.isOpenModalUpdate);
  const isOpenMessagebox = useSelector(state => state.vesselManagement.isOpenMessagebox);
  const loading = useSelector(state => state.vesselManagement.isLoading);

  const [pathWithQuery, setPathWithQuery] = useState('');
  const [filter, setFilter] = useState({
    textSearch: '',
    trangThai: 'Tất cả',
  });
  const handleChangeFilter = (value) => {
    setFilter((prev) => ({ ...prev, trangThai: value }));
  }
  const handleChangeInputSearch = (value) => {
    setFilter((prev) => ({ ...prev, textSearch: value }));
  }

  const getAllVessels = async () => {
    try {
      const res = await customAxios.get(pathWithQuery);
      dispatch(setListVessel(res.data.data.vessels));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    const queryParams = { searchString: filter.textSearch.trim(), trangThai: filter.trangThai };
    console.log(queryParams);
    const queryString = new URLSearchParams(queryParams).toString();
    const pathWithQuery = `${baseUrl}/vessel/getAllVessel?${queryString}`;
    setPathWithQuery(pathWithQuery);
  }, [filter]);

  useEffect(() => {
    if (pathWithQuery) {
      getAllVessels();
    }
  }, [pathWithQuery]);

  const handleClickAdd = () => {
    dispatch(setIsOpenModalAdd(true));
  }



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
        isOpenModalAdd && <ModalAddVessel getAllVessels={getAllVessels}/>
      }
      {
        isOpenModalUpdate && <ModalUpdateVessel getAllVessels={getAllVessels}/>
      }
      {
        isOpenMessagebox && <MessageBox getAllVessels={getAllVessels}/>
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
      {
        listVessels.length === 0 ? (
          <span style={{ width: '100%', textAlign: 'center', marginTop: '40px', color: '#9C9C9C', fontSize: '20px' }}>CHƯA CÓ CONTAINER NÀO TRONG HỆ THỐNG. HÃY THÊM CONTAINER</span>
        ) : (
          <div className={cx('body_container')}>
            {
              listVessels.map((item, index) => {
                return (
                  <ItemVessel itemVessel={item} key={index} indexItem={index} />
                )
              })
            }
          </div>
        )
      }

    </div>
  )
}

export default VesselManager;

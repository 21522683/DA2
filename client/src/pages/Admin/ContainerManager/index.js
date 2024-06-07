import React, { useEffect, useState } from 'react'
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
import HashLoader from "react-spinners/HashLoader";
import baseUrl from '../../../utils/index.js';
import customAxios from '../../../utils//customAxios';

const cx = classNames.bind(styles);

function ContainerManager() {

  const dispatch = useDispatch();
  const list = useSelector(state => state.containerManagement.containersList);
  const isOpenModalAdd = useSelector(state => state.containerManagement.isOpenModalAdd);
  const isOpenModalUpdate = useSelector(state => state.containerManagement.isOpenModalUpdate);
  const isOpenMessagebox = useSelector(state => state.containerManagement.isOpenMessagebox);
  const loading = useSelector(state => state.containerManagement.isLoading);

  const [pathWithQuery, setPathWithQuery] = useState('');
  const [filter, setFilter] = useState({
    textSearch: '',
    trangThai: 'Tất cả',
    loaiContainer: 'Tất cả',
  });
  const handleChangeFilterType = (value) => {
    setFilter((prev) => ({ ...prev, loaiContainer: value }));
  }
  const handleChangeFilterStatus = (value) => {
    setFilter((prev) => ({ ...prev, trangThai: value }));
  }
  const handleChangeInputSearch = (value) => {
    setFilter((prev) => ({ ...prev, textSearch: value }));
  }

  const getAllContainers = async () => {
    try {
      const res = await customAxios.get(pathWithQuery);
      dispatch(setListContainer(res.data.data.containers));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    const queryParams = { searchString: filter.textSearch, trangThai: filter.trangThai, loaiContainer: filter.loaiContainer };
    const queryString = new URLSearchParams(queryParams).toString();
    const pathWithQuery = `${baseUrl}/container/getAllContainer?${queryString}`;
    setPathWithQuery(pathWithQuery);
  }, [filter]);

  useEffect(() => {
    if (pathWithQuery) {
      getAllContainers();
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
        isOpenModalAdd && <ModalAddContainer getAllContainers={getAllContainers} />
      }
      {
        isOpenModalUpdate && <ModalUpdateContainer getAllContainers={getAllContainers} />
      }
      {
        isOpenMessagebox && <MessageBox getAllContainers={getAllContainers} />
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
            Thêm
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '0px 20px' }}>
        <span style={{ fontWeight: 'bold', color: '#606060' }}>Kết quả tìm kiếm: {list.length}</span>
      </div>
      {
        list.length === 0 ? (
          <span style={{ width: '100%', textAlign: 'center', marginTop: '40px', color: '#9C9C9C', fontSize: '20px' }}>CHƯA CÓ CONTAINER NÀO TRONG HỆ THỐNG. HÃY THÊM CONTAINER</span>
        ) : (
          <div className={cx('body_container')}>
            {
              list.map((item, index) => {
                return (
                  <ItemContainer itemContainer={item} key={index} indexItem={index} />
                )
              })
            }
          </div>
        )
      }


    </div>
  )
}

export default ContainerManager

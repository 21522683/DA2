import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './YourContract.module.scss';
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DetailContract from './DetailContract';
import { useDispatch, useSelector } from 'react-redux';
import baseUrl from '../../../utils';
import { toast } from 'react-toastify';
import customAxios from '../../../utils//customAxios';
import convertDate from '../../../utils/convertDate';
import HashLoader from "react-spinners/HashLoader";
import { setIndexContractOfUserSelected, setIsOpenModalDetailContractOfUser, setListContractsOfUser } from '../../../redux/slices/contractSlice';


const cx = classNames.bind(styles);

function YourContract() {

  const dispatch = useDispatch();
  const contractOfUserList = useSelector(state => state.contractManagement.contractOfUserList);
  const isOpenModalDetailContractOfUser = useSelector(state => state.contractManagement.isOpenModalDetailContractOfUser);
  const currentUser = useSelector(state => state.userManagement.currentUser);
  const loading = useSelector(state => state.contractManagement.isLoading);

  const [filter, setFilter] = useState({
    textSearch: '',
    status: 'Tất cả',
    ngayTao: convertDate(new Date()).toString(),
  });
  const [startDateFilter, setStartDateFilter] = useState(new Date());
  const [pathWithQuery, setPathWithQuery] = useState('');

  const handleChangeInputSearch = (value) => {
    setFilter((prev) => ({ ...prev, textSearch: value.trim() }));
  };

  const handleChangeFilter = (value) => {
    setFilter((prev) => ({ ...prev, status: value }));
  };

  const handleChangeDate = (date) => {
    const formattedDate = convertDate(date);
    setStartDateFilter(date);
    setFilter((prev) => ({ ...prev, ngayTao: formattedDate }));
  };

  const getAllContractUser = async () => {
    try {
      const response = await customAxios.get(pathWithQuery);
      dispatch(setListContractsOfUser(response.data.contracts));
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.message, {
          position: 'top-right',
        });
      }
    }
  };

  useEffect(() => {
    const queryParams = {
      searchString: filter.textSearch,
      status: filter.status,
      ngayTao: filter.ngayTao,
    };
    const queryString = new URLSearchParams(queryParams).toString();
    const pathWithQuery = `${baseUrl}/contract/getAllContractOfUser/${currentUser._id}/?${queryString}`;
    setPathWithQuery(pathWithQuery);
  }, [filter]);

  useEffect(() => {
    if (pathWithQuery) {
      getAllContractUser();
    }
  }, [pathWithQuery]);

  const handleClickSeeDetail = (index) => {
    dispatch(setIndexContractOfUserSelected(index));
    dispatch(setIsOpenModalDetailContractOfUser(true));
  };

  return (
    <div className={cx('container_main')}>
      {loading && (
        <div className={cx('container-loader')}>
          <HashLoader
            color="#0088af"
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
            className={cx('loader-feedback')}
          />
        </div>
      )}
      {
        isOpenModalDetailContractOfUser && <DetailContract getAllContractUser={getAllContractUser}/>
      }
      <div className={cx('title_page')}>HỢP ĐỒNG CỦA BẠN</div>
      <div className={cx('header')}>
        <div className={cx('container_filter')}>
          <div className={cx('container_search')}>
            <span className={cx('title_search')}>Tìm kiếm hợp đồng</span>
            <SearchBar handleChangeInput={handleChangeInputSearch} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className={cx('container_dropdown')} style={{ marginRight: '80px' }}>
              <span className={cx('title_search')}>Ngày tạo hợp đồng</span>
              <DatePicker dateFormat="dd/MM/YYYY" className={cx('date_picker')} selected={startDateFilter} onChange={(date) => handleChangeDate(date)} />
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
              <th className={cx('item_header_table')}>Mã đơn hàng</th>
              <th className={cx('item_header_table')}>Ngày tạo hợp đồng</th>
              <th className={cx('item_header_table')}>Trạng thái hợp đồng</th>
              <th className={cx('item_header_table')}>Thao tác</th>
            </tr>
          </thead>

          <tbody className={cx('body_table')}>
            {
              contractOfUserList.length === 0 ? (
                <tr className={cx('row_table')}>
                  <td colSpan={5} className={cx('item_row_table')} style={{ textAlign: 'center' }}>
                    Không có hợp đồng nào trong danh sách
                  </td>
                </tr>
              ) : (
                contractOfUserList.map((item, index) => {
                  return (
                    <tr className={cx('row_table')} key={item._id}>
                      <td className={cx('item_row_table')}>{item._id}</td>
                      <td className={cx('item_row_table')}>{item.hoaDon.keKhaiHH.donHang._id}</td>
                      <td className={cx('item_row_table')}>{convertDate(item.ngayTao)}</td>
                      {
                        item.trangThai ? (<td className={cx(['item_row_table', 'active'])}>Đã ký kết</td>) : (<td className={cx(['item_row_table', 'lock'])}>Chưa ký kết</td>)
                      }
                      <td className={cx('item_row_table')} onClick={() => handleClickSeeDetail(index)}>
                        <span className={cx('text_row')}>Xem chi tiết</span>
                      </td>
                    </tr>
                  )
                })
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default YourContract;

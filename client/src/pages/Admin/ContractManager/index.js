import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './ContractManager.module.scss';
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
import { setIndexContractOfUserSelected, setIndexContractSelected, setIsOpenModalDetail, setIsOpenModalDetailContractOfUser, setListContracts, setListContractsOfUser } from '../../../redux/slices/contractSlice';


const cx = classNames.bind(styles);


function ContractManager() {

    const dispatch = useDispatch();
    const contractsList = useSelector(state => state.contractManagement.contractsList);
    const isOpenModalDetail = useSelector(state => state.contractManagement.isOpenModalDetail);
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

    const getAllContract = async () => {
        try {
            const response = await customAxios.get(pathWithQuery);
            dispatch(setListContracts(response.data.contracts));
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
        const pathWithQuery = `${baseUrl}/contract/getAllContract/?${queryString}`;
        setPathWithQuery(pathWithQuery);
    }, [filter]);

    useEffect(() => {
        if (pathWithQuery) {
            getAllContract();
        }
    }, [pathWithQuery]);

    const handleClickSeeDetail = (index) => {
        dispatch(setIndexContractSelected(index));
        dispatch(setIsOpenModalDetail(true));
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
                isOpenModalDetail && <DetailContract getAllContract={getAllContract} />
            }
            <div className={cx('header')}>
                <span className={cx('title_header')}>QUẢN LÝ HỢP ĐỒNG</span>
                <div className={cx('container_filter')}>
                    <div className={cx('container_search')}>
                        <span className={cx('title_search')}>Tìm kiếm</span>
                        <SearchBar handleChangeInput={handleChangeInputSearch} />
                    </div>

                    <div className={cx('container_dropdown')}>
                        <span className={cx('title_search')}>Ngày tạo hợp đồng</span>
                        <DatePicker dateFormat="dd/MM/YYYY" className={cx('date_picker')} selected={startDateFilter} onChange={(date) => handleChangeDate(date)} />
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
                            <th className={cx('item_header_table')}>Tên khách hàng</th>
                            <th className={cx('item_header_table')}>Ngày tạo hợp đồng</th>
                            <th className={cx('item_header_table')}>Trạng thái hợp đồng</th>
                            <th className={cx('item_header_table')}>Thao tác</th>
                        </tr>
                    </thead>

                    <tbody className={cx('body_table')}>
                        {
                            contractsList.length === 0 ? (
                                <tr className={cx('row_table')}>
                                    <td colSpan={5} className={cx('item_row_table')} style={{ textAlign: 'center' }}>
                                        Không có hợp đồng nào trong danh sách
                                    </td>
                                </tr>
                            ) : (
                                contractsList.map((item, index) => {
                                    return (
                                        <tr className={cx('row_table')} key={index}>
                                            <td className={cx('item_row_table')}>{item._id}</td>
                                            <td className={cx('item_row_table')}>{item.hoaDon.keKhaiHH.donHang.user.hoten}</td>
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
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '10px 20px' }}>
                <span style={{ fontWeight: 'bold', color: '#606060' }}>Kết quả tìm kiếm: {contractsList.length}</span>
            </div>
        </div>
    )
}

export default ContractManager;

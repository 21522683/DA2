import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './ReportStatiscalManager.module.scss';
import DropDownYear from './DropDownYear/index.js';
import DropDownMonth from './DropDownMonth/index.js';
import MyRevanueChart from './MyRevanueChart/index.js';
import MyRevanueChartOrder from './MyRevanueChartOrder/index.js';
import SearchBar from './SearchBar/index.js';
import { Link } from 'react-router-dom';
import baseUrl from '../../../utils';
import { toast } from 'react-toastify';
import customAxios from '../../../utils//customAxios';
import formatMoney from '../../../utils/formatMoney.js';
import { useDispatch } from 'react-redux';
import { setContractListReport, setIndexSelectedReport } from '../../../redux/slices/contractSlice.js';


const cx = classNames.bind(styles);

function ReportStatiscalManager() {

    const dispatch = useDispatch();

    const [filter, setFilter] = useState({
        month: 'Tất cả',
        year: 'Tất cả',
    });
    const [pathWithQuery, setPathWithQuery] = useState('');
    const [pathWithQueryOrder, setPathWithQueryOrder] = useState('');
    const handleChangeInputSearch = (value) => {
        setTextSearch(value);
    }
    const handleChangeFilterMonth = (value) => {
        setFilter((prev) => ({ ...prev, month: value }));
    }
    const handleChangeFilterYear = (value) => {
        setFilter((prev) => ({ ...prev, year: value }));
    }

    const [dataRevenue, setDataRevenue] = useState(
        {
            tongTriGia: 0,
            tongThue: 0,
            tongThueContainer: 0,
            tongThueTau: 0,
            tongPhiVanChuyen: 0
        }
    );
    const [dataOrder, setDataOrder] = useState({
        daHuy: 0,
        chuaDuyet: 0,
        daDuyet: 0
    });
    const getAllRevanueContract = async () => {
        try {
            const response = await customAxios.get(pathWithQuery);
            setDataRevenue(response.data);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                toast.error(error.response.message, {
                    position: "top-right"
                }
                );
            }
        }
    }
    const getReportOrder = async () => {
        try {
            const response = await customAxios.get(pathWithQueryOrder);
            setDataOrder(response.data);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                toast.error(error.response.message, {
                    position: "top-right"
                }
                );
            }
        }
    }

    useEffect(() => {
        const queryParams = { month: filter.month, year: filter.year };
        const queryString = new URLSearchParams(queryParams).toString();
        const pathWithQuery = `${baseUrl}/contract/getAllRevanueContract?${queryString}`;
        const pathWithQueryOrder = `${baseUrl}/order/getReportOrder?${queryString}`;
        setPathWithQuery(pathWithQuery);
        setPathWithQueryOrder(pathWithQueryOrder);
    }, [filter]);

    useEffect(() => {
        if (pathWithQuery) {
            getAllRevanueContract();
        }
    }, [pathWithQuery]);

    useEffect(() => {
        if (pathWithQueryOrder) {
            getReportOrder();
        }
    }, [pathWithQueryOrder]);

    const [list, setList] = useState([]);
    const [textSearch, setTextSearch] = useState('');
    const [pathWithQueryUser, setPathWithQueryUser] = useState({});
    useEffect(() => {
        const queryParams = { textSearch: textSearch};
        const queryString = new URLSearchParams(queryParams).toString();
        const pathWithQueryUser = `${baseUrl}/user/getUsersWithContracts?${queryString}`;
        setPathWithQueryUser(pathWithQueryUser);
    }, [textSearch]);

    useEffect(() => {
        if (pathWithQueryUser) {
            getUsersWithContracts();
        }
    }, [pathWithQueryUser]);

    const getUsersWithContracts = async () => {
        try {
            const response = await customAxios.get(pathWithQueryUser);
            setList(response.data);
            dispatch(setContractListReport(response.data));
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                toast.error(error.response.message, {
                    position: "top-right"
                }
                );
            }
        }
    }

    useEffect(() => {
        getUsersWithContracts();
    }, []);

    const handleClickDetail = (index) => {
        dispatch(setIndexSelectedReport(index));
    }

    return (
        <div className={cx('container_main')}>
            <div className={cx('header')}>
                <span className={cx('title_header')}>BÁO CÁO THỐNG KÊ</span>
                <div className={cx('container_filter')}>
                    <div className={cx('container_dropdown')}>
                        <span className={cx('title_search')}>Chọn tháng để xem</span>
                        <DropDownMonth handleSelectOption={handleChangeFilterMonth} />
                    </div>

                    <div className={cx('container_dropdown')}>
                        <span className={cx('title_search')}>Chọn năm để xem</span>
                        <DropDownYear handleSelectOption={handleChangeFilterYear} />
                    </div>
                </div>
            </div>

            <div className={cx('container_body')}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '30px 0' }}>
                    <div className={cx('container_chart')}>
                        <span style={{ marginLeft: '30px', fontSize: '20px', fontWeight: 'bold', color: '#646464' }}>Thống kê tổng các nguồn doanh thu</span>
                        <MyRevanueChart dataChart={dataRevenue}/>
                    </div>

                    <div className={cx('container_chart')}>
                        <span style={{ marginLeft: '60px', fontSize: '20px', fontWeight: 'bold', color: '#646464' }}>Thống kê về đơn hàng</span>
                        <MyRevanueChartOrder dataChart={dataOrder}/>
                    </div>
                </div>

                <div className={cx('body_container')}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#434343' }}>DANH SÁCH NGƯỜI DÙNG</span>
                        <div style={{ width: '800px' }}>
                            <SearchBar handleChangeInput={handleChangeInputSearch} />
                        </div>
                    </div>
                    <table className={cx('table_main')}>
                        <thead>
                            <tr className={cx('header_table')}>
                                <th className={cx('item_header_table')}>Họ tên</th>
                                <th className={cx('item_header_table')}>Địa chỉ email</th>
                                <th className={cx('item_header_table')}>Tổng số hợp đồng</th>
                                <th className={cx('item_header_table')}>Tổng doanh số</th>
                                <th className={cx('item_header_table')}>Thao tác</th>
                            </tr>
                        </thead>

                        <tbody className={cx('body_table')}>
                            {
                                list.length === 0 ? (
                                    <tr className={cx('row_table')}>
                                        <td colSpan={5} className={cx('item_row_table')} style={{ textAlign: 'center' }}>Không có ai trong danh sách</td>
                                    </tr>
                                ) : (
                                    list.map((item, index) => {
                                        return (
                                            <tr className={cx('row_table')} key={item.user._id}>
                                                <td className={cx('item_row_table')}>{item.user.hoten}</td>
                                                <td className={cx('item_row_table')}>{item.user.email}</td>
                                                <td className={cx('item_row_table')}>{item.tongSoHopDong} (hợp đồng)</td>
                                                <td className={cx('item_row_table')}>{formatMoney(item.tongTriGiaHopDong)}</td>
                                                <td className={cx('item_row_table')} onClick={() => handleClickDetail(index)}>
                                                    <Link to={'/admin/next-report'}>
                                                        <span className={cx('text_row')}>Ấn xem</span>
                                                    </Link>
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
                    <span style={{ fontWeight: 'bold', color: '#606060' }}>Kết quả tìm kiếm: {list.length}</span>
                </div>
            </div>
        </div>
    )
}

export default ReportStatiscalManager;

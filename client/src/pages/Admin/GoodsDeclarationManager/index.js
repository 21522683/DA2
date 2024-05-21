import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './GoodsDeclarationManager.module.scss'
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DetailGoodsDeclaration from './DetailGoodsDeclaration';
import { useDispatch, useSelector } from 'react-redux';
import { setIndexGoodDeclarationSelected, setIsOpenModalDetail, setListGoodsDeclaration } from '../../../redux/slices/goodsDeclarationSlice';
import HashLoader from "react-spinners/HashLoader";
import baseUrl from '../../../utils';
import { toast } from 'react-toastify';
import customAxios from '../../../utils//customAxios';
import convertDate from '../../../utils/convertDate';
import ModalCreateBill from './ModalCreateBill';
import MessageBox from './MessageBox';

const cx = classNames.bind(styles);

function GoodsDeclarationManager() {

    const dispatch = useDispatch();
    const listGoodsDeclaration = useSelector(state => state.goodsDeclarationManagement.goodsDeclarationsList);
    const isOpenModalDetail = useSelector(state => state.goodsDeclarationManagement.isOpenModalDetail);
    const isOpenModalCreateBill = useSelector(state => state.goodsDeclarationManagement.isOpenModalCreateBill);
    const isOpenMessagebox = useSelector(state => state.goodsDeclarationManagement.isOpenMessagebox);
    const loading = useSelector(state => state.goodsDeclarationManagement.isLoading);

    const [filter, setFilter] = useState({
        textSearch: '',
        status: 'Tất cả',
        ngayTao: convertDate(new Date()).toString(),
    });
    const [startDateFilter, setStartDateFilter] = useState(new Date());
    const [pathWithQuery, setPathWithQuery] = useState('');

    const handleChangeInputSearch = (value) => {
        setFilter((prev) => ({ ...prev, textSearch: value.trim() }));
    }
    const handleChangeFilter = (value) => {
        setFilter((prev) => ({ ...prev, status: value }));
    }
    const handleChangeDate = (date) => {
        const formattedDate = convertDate(date);
        setStartDateFilter(date);
        setFilter(prev => ({ ...prev, ngayTao: formattedDate }));
    }

    const getAllGoodsDeclaration = async () => {
        try {
            const response = await customAxios.get(pathWithQuery);
            dispatch(setListGoodsDeclaration(response.data.goodsDeclaration));
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
        const queryParams = { searchString: filter.textSearch, status: filter.status, ngayTao: filter.ngayTao };
        const queryString = new URLSearchParams(queryParams).toString();
        const pathWithQuery = `${baseUrl}/goodsDeclaration/getAllGoodsDeclaration?${queryString}`;
        setPathWithQuery(pathWithQuery);
        console.log(filter);
    }, [filter]);

    useEffect(() => {
        if (pathWithQuery) {
            getAllGoodsDeclaration();
        }
    }, [pathWithQuery]);

    const handleClickSeeDetail = (index) => {
        dispatch(setIndexGoodDeclarationSelected(index));
        dispatch(setIsOpenModalDetail(true));
    }

    return (
        <div className={cx('container_main')}>
            {
                isOpenMessagebox && <MessageBox/>
            }
            {
                isOpenModalDetail && <DetailGoodsDeclaration />
            }
            {
                isOpenModalCreateBill && <ModalCreateBill />
            }
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
            <div className={cx('header')}>
                <span className={cx('title_header')}>QUẢN LÝ KÊ KHAI HÀNG HÓA</span>
                <div className={cx('container_filter')}>
                    <div className={cx('container_search')}>
                        <span className={cx('title_search')}>Tìm kiếm</span>
                        <SearchBar handleChangeInput={handleChangeInputSearch} />
                    </div>

                    <div className={cx('container_dropdown')}>
                        <span className={cx('title_search')}>Ngày tạo</span>
                        <DatePicker dateFormat="dd/MM/YYYY" className={cx('date_picker')} selected={startDateFilter} onChange={(date) => handleChangeDate(date)} />
                    </div>

                    <div className={cx('container_dropdown')}>
                        <span className={cx('title_search')}>Trạng thái</span>
                        <Dropdown handleSelectOption={handleChangeFilter} />
                    </div>
                </div>
            </div>

            <div className={cx('body_container')}>
                <table className={cx('table_main')}>
                    <thead>
                        <tr className={cx('header_table')}>
                            <th className={cx('item_header_table')}>Mã kê khai</th>
                            <th className={cx('item_header_table')}>Mã đơn hàng</th>
                            <th className={cx('item_header_table')}>Ngày tạo</th>
                            <th className={cx('item_header_table')}>Trạng thái</th>
                            <th className={cx('item_header_table')}>Thao tác</th>
                        </tr>
                    </thead>

                    <tbody className={cx('body_table')}>
                        {
                            listGoodsDeclaration.length === 0 ? (
                                <tr className={cx('row_table')}>
                                    <td colSpan={5} className={cx('item_row_table')} style={{ textAlign: 'center' }}>Không có đơn hàng nào trong danh sách</td>
                                </tr>
                            ) : (
                                listGoodsDeclaration.map((item, index) => {
                                    return (
                                        <tr className={cx('row_table')} key={index}>
                                            <td className={cx('item_row_table')}>{item._id}</td>
                                            <td className={cx('item_row_table')}>{item.donHang._id}</td>
                                            <td className={cx('item_row_table')}>{convertDate(item.ngayTao)}</td>
                                            {
                                                item.trangThai ? (<td className={cx(['item_row_table', 'active'])}>Đã tạo hóa đơn</td>) : (<td className={cx(['item_row_table', 'lock'])}>Chưa tạo hóa đơn</td>)
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

export default GoodsDeclarationManager;

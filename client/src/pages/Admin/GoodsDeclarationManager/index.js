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


    const totalSumGoods = (obj) => {
        let total = 0;
        for (let i = 0; i < obj.donHang.hangHoa.length; i++) {
            total = total + (obj.donHang.hangHoa[i].soLuong * obj.donHang.hangHoa[i].giaBan);
        }
        return total;
    }

    const handleClickRPA = () => {
        // if (listGoodsDeclaration.length > 0) {
        //     for (let i = 0; i < listGoodsDeclaration.length; i++) {
        //         if (listGoodsDeclaration[i].trangThai === false) {
        //             let total = totalSumGoods(listGoodsDeclaration[i]);
        //             let cost = total * 0.05;
        //         }
        //     }
        // }
        FillDataByRPA(); 
    }

    function FillDataByRPA() {
        (function (detail) {
            var isExtensionLoaded = function () {
                var $root = document.documentElement
                return !!$root && !!$root.getAttribute('data-kantu')
            }
            var openExternal = function (url) {
                const $el = document.createElement('a')
                $el.setAttribute('target', '_blank')
                $el.setAttribute('href', url)
                $el.style.position = 'absolute'
                $el.style.top = '-9999px'
                $el.style.left = '-9999px'
                document.body.appendChild($el)
                $el.click()
                setTimeout(() => {
                    $el.remove()
                }, 200)
            }
            var openWebsite = function () {
                openExternal('https://chromewebstore.google.com/detail/uivision-rpa/gcbalfbdmfieckjlnblleoemohcganoc?hl=vi')
            }
           if (!isExtensionLoaded()) {
                if (window.confirm('UI.Vision RPA is not installed yet. Do you want to download it now?')) {
                   return openWebsite()
             }
            } else {
                return window.dispatchEvent(new CustomEvent('kantuSaveAndRunMacro', { detail: detail }))
            }
        })
            ({
                direct: 1,
                json: {
                    "Name": "goods",
                    "CreationDate": "2020-05-15",
                    "Commands": [
                        {
                        "Command": "bringBrowserToForeground",
                        "Target": "true",
                        "Value": "",
                        "Description": ""
                        },
                        {
                        "Command": "click",
                        "Target": "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div",
                        "Value": "",
                        "Targets": [
                            "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div",
                            "xpath=//div[3]/div/div",
                            "css=#root > div.App > div > div.LayoutAdmin_container__RujnA > div.LayoutAdmin_content__is9hT > div > div.GoodsDeclarationManager_header__cwkSy > div > div.GoodsDeclarationManager_container_dropdown__kjvDh > div > div"
                        ],
                        "Description": ""
                        },
                        {
                        "Command": "click",
                        "Target": "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/div[2]",
                        "Value": "",
                        "Targets": [
                            "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/div[2]",
                            "xpath=//div[2]/div[2]",
                            "css=#root > div.App > div > div.LayoutAdmin_container__RujnA > div.LayoutAdmin_content__is9hT > div > div.GoodsDeclarationManager_header__cwkSy > div > div.GoodsDeclarationManager_container_dropdown__kjvDh > div > div.DropDown_dropdown__content__rSgGx > div:nth-child(2)"
                        ],
                        "Description": ""
                        },
                        {
                        "Command": "storeXpathCount",
                        "Target": "xpath=//tr",
                        "Value": "count",
                        "Description": ""
                        },
                        {
                        "Command": "echo",
                        "Target": "total row = ${count-1}",
                        "Value": "green",
                        "Description": ""
                        },
                        {
                        "Command": "store",
                        "Target": "1",
                        "Value": "i",
                        "Description": ""
                        },
                        {
                        "Command": "while",
                        "Target": "${i} <= ${count}",
                        "Value": "",
                        "Description": ""
                        },
                        {
                        "Command": "storeText",
                        "Target": "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div[2]/table/tbody/tr[${i}]/td[4]",
                        "Value": "state",
                        "Description": ""
                        },
                        {
                        "Command": "echo",
                        "Target": "${i}th row text=${state}",
                        "Value": "blue",
                        "Description": ""
                        },
                        {
                        "Command": "storeText",
                        "Target": "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div[2]/table/tbody/tr[${i}]/td[2]",
                        "Value": "tongGiaTri",
                        "Description": ""
                        },
                        {
                        "Command": "echo",
                        "Target": "${i}th row text=${tongGiaTri}",
                        "Value": "blue",
                        "Description": ""
                        },
                        {
                        "Command": "if",
                        "Target": "${state} == \"Chưa tạo hóa đơn\"",
                        "Value": "",
                        "Description": ""
                        },
                        {
                        "Command": "click",
                        "Target": "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div[2]/table/tbody/tr[${i}]/td[5]",
                        "Value": "",
                        "Targets": [
                            "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div[2]/table/tbody/tr[${i}]/td[5]",
                            "xpath=//tr[${i}]/td[5]",
                            "css=#root > div.App > div > div.LayoutAdmin_container__RujnA > div.LayoutAdmin_content__is9hT > div > div.GoodsDeclarationManager_body_container__pzgP1 > table > tbody > tr:nth-child(2) > td:nth-child(5)"
                        ],
                        "Description": ""
                        },
                        {
                        "Command": "click",
                        "Target": "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div/div/div[6]/div",
                        "Value": "",
                        "Targets": [
                            "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div/div/div[6]/div",
                            "xpath=//div[2]/div/div/div/div[6]/div",
                            "css=#root > div.App > div > div.LayoutAdmin_container__RujnA > div.LayoutAdmin_content__is9hT > div > div.DetailGoodsDeclaration_wrapper__e1FLE > div > div.DetailGoodsDeclaration_container-btn__AJWYj > div"
                        ],
                        "Description": ""
                        },
                        {
                        "Command": "type",
                        "Target": "id=txtThue",
                        "Value": "5",
                        "Targets": [
                            "id=txtThue",
                            "xpath=//*[@id=\"txtThue\"]",
                            "xpath=//input[@id='txtThue']",
                            "xpath=//input",
                            "css=#txtThue"
                        ],
                        "Description": ""
                        },
                        {
                        "Command": "executeScript_Sandbox",
                        "Target": "return Number (${tongGiaTri}*0.05);",
                        "Value": "phiVanChuyen",
                        "Description": ""
                        },
                        {
                        "Command": "echo",
                        "Target": "${i}th row text phi van chuyen=${phiVanChuyen}",
                        "Value": "blue",
                        "Description": ""
                        },
                        {
                        "Command": "comment",
                        "Target": "storeText // xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div[2]/table/tbody/tr[${i}]/td[2]",
                        "Value": "phiVanChuyen",
                        "Description": ""
                        },
                        {
                        "Command": "type",
                        "Target": "id=txtPhiVanChuyen",
                        "Value": "${phiVanChuyen}",
                        "Targets": [
                            "id=txtPhiVanChuyen",
                            "xpath=//*[@id=\"txtPhiVanChuyen\"]",
                            "xpath=//input[@id='txtPhiVanChuyen']",
                            "xpath=//div[2]/div/input",
                            "css=#txtPhiVanChuyen"
                        ],
                        "Description": ""
                        },
                        {
                        "Command": "type",
                        "Target": "id=txtTongGiaTri",
                        "Value": "${tongGiaTri}",
                        "Targets": [
                            "id=txtTongGiaTri",
                            "xpath=//*[@id=\"txtTongGiaTri\"]",
                            "xpath=//input[@id='txtTongGiaTri']",
                            "xpath=//div[3]/div/input",
                            "css=#txtTongGiaTri"
                        ],
                        "Description": ""
                        },
                        {
                            "Command": "click",
                            "Target": "id=btnAccept",
                            "Value": "",
                            "Targets": [
                              "id=btnAccept",
                              "xpath=//*[@id=\"btnAccept\"]",
                              "xpath=//div[@id='btnAccept']",
                              "xpath=//div[2]/div[4]/div",
                              "css=#btnAccept"
                            ],
                            "Description": ""
                        },
                        {
                        "Command": "end",
                        "Target": "",
                        "Value": "",
                        "Description": ""
                        },
                        {
                        "Command": "executeScript_Sandbox",
                        "Target": "return Number (${i})+1;",
                        "Value": "i",
                        "Description": ""
                        },
                        {
                        "Command": "echo",
                        "Target": "current row = ${i}",
                        "Value": "green",
                        "Description": ""
                        },
                        {
                        "Command": "end",
                        "Target": "",
                        "Value": "",
                        "Description": ""
                        }                    
                    ]
                }
            })
    }

    return (
        <div className={cx('container_main')}>
            {
                isOpenMessagebox && <MessageBox getAllGoodsDeclaration={getAllGoodsDeclaration} />
            }
            {
                isOpenModalDetail && <DetailGoodsDeclaration />
            }
            {
                isOpenModalCreateBill && <ModalCreateBill getAllGoodsDeclaration={getAllGoodsDeclaration} />
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

                    <div className={cx('container_dropdown_date')}>
                        <span className={cx('title_search')}>Ngày tạo</span>
                        <DatePicker dateFormat="dd/MM/YYYY" className={cx('date_picker')} selected={startDateFilter} onChange={(date) => handleChangeDate(date)} />
                    </div>

                    <div className={cx('container_dropdown')}>
                        <span className={cx('title_search')}>Trạng thái</span>
                        <Dropdown handleSelectOption={handleChangeFilter} />
                    </div>

                    <div className={cx('container_button')} onClick={handleClickRPA}>Sử dụng RPA</div>
                </div>
            </div>

            <div className={cx('body_container')}>
                <table className={cx('table_main')}>
                    <thead>
                        <tr className={cx('header_table')}>
                            <th className={cx('item_header_table')}>Mã kê khai</th>
                            <th className={cx('item_header_table')}>Tổng trị giá hàng hóa</th>
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
                                            <td className={cx('item_row_table')}>{totalSumGoods(item)}</td>
                                            <td className={cx('item_row_table')}>{convertDate(item.ngayTao)}</td>
                                            {/* <td id='tdState'
                                            className={item.trangThai ? cx(['item_row_table', 'active']) : cx(['item_row_table', 'lock'])}>{
                                                item.trangThai ? "Đã tạo hóa đơn" : "Chưa tạo hóa đơn"
                                            }</td> */}
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
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '10px 20px' }}>
                <span style={{ fontWeight: 'bold', color: '#606060' }}>Kết quả tìm kiếm: {listGoodsDeclaration.length}</span>
            </div>
        </div>
    )
}

export default GoodsDeclarationManager;

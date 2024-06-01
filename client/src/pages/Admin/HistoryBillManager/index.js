import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './HistoryBillManager.module.scss'
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import baseUrl from '../../../utils';
import { toast } from 'react-toastify';
import customAxios from '../../../utils//customAxios';
import convertDate from '../../../utils/convertDate';
import { setIndexBillSelected, setIsOpenModalDetail, setIsOpenModalInfo, setListBills } from '../../../redux/slices/billSlice'
import DetailBill from './DetailBill'
import InfoBill from './InfoBill'
import HashLoader from "react-spinners/HashLoader";

const cx = classNames.bind(styles);

function HistoryBillManager() {

  const dispatch = useDispatch();
  const billsList = useSelector(state => state.billManagement.billsList);
  const isOpenModalDetail = useSelector(state => state.billManagement.isOpenModalDetail);
  const isOpenModalInfo = useSelector(state => state.billManagement.isOpenModalInfo);
  const loading = useSelector(state => state.billManagement.isLoading);

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

  const getAllBill = async () => {
    try {
      const response = await customAxios.get(pathWithQuery);
      dispatch(setListBills(response.data.bills));
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
    const pathWithQuery = `${baseUrl}/bill/getAllBill/?${queryString}`;
    setPathWithQuery(pathWithQuery);
    console.log(filter);
  }, [filter]);

  useEffect(() => {
    if (pathWithQuery) {
      getAllBill();
    }
  }, [pathWithQuery]);

  const handleClickSeeDetail = (index) => {
    dispatch(setIndexBillSelected(index));
    if (billsList[index].trangThai) {
      dispatch(setIsOpenModalDetail(true));
    } else {
      dispatch(setIsOpenModalInfo(true));
    }
  };

  const handleClickRPA = () => {
    // if (billsList.length > 0) {
    //   for (let i = 0; i < billsList.length; i++) {
    //     if (billsList[i].trangThai === false) {
    //       // Xử lý ở đây 
          
    //     }
    //   }
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
                "Name": "contract",
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
                      "css=#root > div.App > div > div.LayoutAdmin_container__RujnA > div.LayoutAdmin_content__is9hT > div > div.HistoryBillManager_header__oFFNF > div > div:nth-child(3) > div > div"
                    ],
                    "Description": ""
                  },
                  {
                    "Command": "click",
                    "Target": "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/div[3]",
                    "Value": "",
                    "Targets": [
                      "xpath=//*[@id=\"root\"]/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/div[3]",
                      "xpath=//div[2]/div[3]",
                      "css=#root > div.App > div > div.LayoutAdmin_container__RujnA > div.LayoutAdmin_content__is9hT > div > div.HistoryBillManager_header__oFFNF > div > div:nth-child(3) > div > div.DropDown_dropdown__content__jlrmM > div:nth-child(3)"
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
                    "Command": "if",
                    "Target": "${state} == \"Đã thanh toán\"",
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
                    "Target": "id=btnNext",
                    "Value": "",
                    "Targets": [
                      "id=btnNext",
                      "xpath=//*[@id=\"btnNext\"]",
                      "xpath=//div[@id='btnNext']",
                      "xpath=//div[2]/div/div/div/div[3]/div",
                      "css=#btnNext"
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
        isOpenModalDetail && <DetailBill getAllBill={getAllBill} />
      }
      {
        isOpenModalInfo && <InfoBill />
      }
      <div className={cx('header')}>
        <span className={cx('title_header')}>QUẢN LÝ HÓA ĐƠN VÀ LỊCH SỬ GIAO DỊCH</span>
        <div className={cx('container_filter')}>
          <div className={cx('container_search')}>
            <span className={cx('title_search')}>Tìm kiếm</span>
            <SearchBar handleChangeInput={handleChangeInputSearch} />
          </div>

          <div className={cx('container_dropdown')}>
            <span className={cx('title_search')}>Ngày tạo hóa đơn</span>
            <DatePicker dateFormat="dd/MM/YYYY" className={cx('date_picker')} selected={startDateFilter} onChange={(date) => handleChangeDate(date)} />
          </div>

          <div className={cx('container_dropdown')}>
            <span className={cx('title_search')}>Trạng thái hóa đơn</span>
            <Dropdown handleSelectOption={handleChangeFilter} />
          </div>

          <div className={cx('container_button')} onClick={handleClickRPA}>Sử dụng RPA</div>
        </div>
      </div>

      <div className={cx('body_container')}>
        <table className={cx('table_main')}>
          <thead>
            <tr className={cx('header_table')}>
              <th className={cx('item_header_table')}>Mã hóa đơn</th>
              <th className={cx('item_header_table')}>Mã đơn hàng</th>
              <th className={cx('item_header_table')}>Ngày tạo hóa đơn</th>
              <th className={cx('item_header_table')}>Trạng thái hóa đơn</th>
              <th className={cx('item_header_table')}>Thao tác</th>
            </tr>
          </thead>

          <tbody className={cx('body_table')}>
            {billsList.length === 0 ? (
              <tr className={cx('row_table')}>
                <td colSpan={5} className={cx('item_row_table')} style={{ textAlign: 'center' }}>
                  Không có hóa đơn nào trong danh sách
                </td>
              </tr>
            ) : (
              billsList.map((item, index) => (
                <tr className={cx('row_table')} key={item._id}>
                  <td className={cx('item_row_table')}>{item._id}</td>
                  <td className={cx('item_row_table')}>{item.keKhaiHH.donHang._id}</td>
                  <td className={cx('item_row_table')}>{convertDate(item.ngayTao)}</td>
                  {item.trangThai ? (
                    <td className={cx(['item_row_table', 'active'])}>Đã thanh toán</td>
                  ) : (
                    <td className={cx(['item_row_table', 'lock'])}>Chưa thanh toán</td>
                  )}
                  <td className={cx('item_row_table')} onClick={() => handleClickSeeDetail(index)}>
                    <span className={cx('text_row')}>Xem chi tiết</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '10px 20px' }}>
        <span style={{ fontWeight: 'bold', color: '#606060' }}>Kết quả tìm kiếm: {billsList.length}</span>
      </div>
    </div>
  )
}

export default HistoryBillManager;

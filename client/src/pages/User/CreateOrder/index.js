import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './CreateOrder.module.scss';
import Dropdown from './DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ItemDetailOrder from './ItemDetailOrder/index.js';
import ModalAddGoods from './ModalAddGoods/index.js';
import MessageBox from './MessageBox/index.js';
import customAxios from '../../../utils/customAxios.js'
import baseURL from '../../../utils/index.js'
import HashLoader from "react-spinners/HashLoader";
import { useDispatch, useSelector } from 'react-redux';
import { setListCreateGoods, setLoading } from '../../../redux/slices/orderSlice.js';
import { toast } from 'react-toastify';


const cx = classNames.bind(styles);

function CreateOrder() {
  const getNextDay = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
  };

  const dispatch = useDispatch();
  const listCreateGoods = useSelector(state => state.orderManagement.listCreateGoods);
  const currentUser = useSelector(state => state.userManagement.currentUser);
  const isOpenMessagebox = useSelector(state => state.orderManagement.isOpenMessagebox);
  const loading = useSelector(state => state.orderManagement.isLoading);

  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [startDateFilter, setStartDateFilter] = useState(new Date());
  const [endDateFilter, setEndDateFilter] = useState(getNextDay());
  const [cangDi, setCangDi] = useState('');
  const [cangDen, setCangDen] = useState('');
  const [dichVu, setDichVu] = useState('');

  // validation
  const [textValidateNgayDen, setTextValidateNgayDen] = useState('');
  const [textValidateDichVu, setTextValidateDichVu] = useState('');
  const [textValidateCangDi, setTextValidateCangDi] = useState('');
  const [textValidateCangDen, setTextValidateCangDen] = useState('');
  const [textValidateList, setTextValidateList] = useState('');

  const validateNgayDen = (ngayDi, ngayDen) => {
    if (ngayDi.getTime() >= ngayDen.getTime()) {
      setTextValidateNgayDen('* Vui lòng chọn ngày đến phải sau ngày đi');
      return false;
    } else {
      setTextValidateNgayDen('');
      return true;
    }
  }
  useEffect(() => {
    let temp = validateNgayDen(startDateFilter, endDateFilter)
  }, [endDateFilter]);

  const validateDichVu = (value) => {
    if (value.trim().length === 0 || value.trim() === '' || value.trim() === 'Chọn dịch vụ') {
      setTextValidateDichVu('* Vui lòng chọn dịch vụ bạn sử dụng');
      return false;
    } else {
      setTextValidateDichVu('');
      return true;
    }
  }
  useEffect(() => {
    let temp = validateDichVu(dichVu);
  }, [dichVu]);

  const validateCangDi = (value) => {
    if (value.trim().length === 0 || value.trim() === '') {
      setTextValidateCangDi('* Vui lòng nhập thông tin cảng xuất phát để sử dụng dịch vụ');
      return false;
    } else {
      setTextValidateCangDi('');
      return true;
    }
  }
  useEffect(() => {
    let temp = validateCangDi(cangDi);
  }, [cangDi]);

  const validateCangDen = (value) => {
    if (value.trim().length === 0 || value.trim() === '') {
      setTextValidateCangDen('* Vui lòng nhập thông tin cảng đích đến để sử dụng dịch vụ');
      return false;
    } else {
      setTextValidateCangDen('');
      return true;
    }
  }
  useEffect(() => {
    let temp = validateCangDen(cangDen);
  }, [cangDen]);

  const validateList = (list) => {
    if (list.length === 0) {
      setTextValidateList('* Vui lòng thêm hàng hóa để sử dụng dịch vụ');
      return false;
    } else {
      setTextValidateList('');
      return true;
    }
  }
  useEffect(() => {
    let temp = validateList(listCreateGoods);
  }, [listCreateGoods]);


  const handleChangeFilter = (value) => {
    setDichVu(value);
  }

  const handleClickCreateOrder = async () => {
    if (currentUser.isAdmin === true || Object.keys(currentUser).length === 0) {
      window.location.href = 'http://localhost:3000/warning/un-login';
      return;
    }
    else {
      if (currentUser.isVerify === false) {
        window.location.href = 'http://localhost:3000/warning/un-verify';
        return;
      }
      else {
        const flagDate = validateNgayDen(startDateFilter, endDateFilter);
        const flagDichVu = validateDichVu(dichVu);
        const flagCangDi = validateCangDi(cangDi);
        const flagCangDen = validateCangDen(cangDen);
        const flagList = validateList(listCreateGoods);
        const flag = flagDate && flagDichVu && flagCangDi && flagCangDen && flagList;
        if (flag) {
          const data = {
            loaiHinh: dichVu,
            hangHoa: listCreateGoods,
            cangDi: cangDi,
            cangDen: cangDen,
            ngayDiDuKien: startDateFilter,
            ngayDenDuKien: endDateFilter,
            user: currentUser,
          }
          const url = `${baseURL}/order/createOrderUser`;
          dispatch(setLoading(true));
          try {
            const response = await customAxios.post(url, data);
            dispatch(setLoading(false));
            toast.success(response.data.message, {
              position: "top-right"
            }
            );
            setDichVu('');
            setCangDi('');
            setCangDen('');
            setStartDateFilter(new Date());
            setEndDateFilter(getNextDay());
            dispatch(setListCreateGoods([]));
          } catch (error) {
            dispatch(setLoading(false));
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
            ) {
              console.log();
              toast.error(error.response.data.message, {
                position: "top-right"
              }
              );
            }
          }
        }
      }
    }
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
        isOpenModalAdd && <ModalAddGoods setIsOpenModalAdd={setIsOpenModalAdd} />
      }
      {
        isOpenMessagebox && <MessageBox />
      }
      <div className={cx('title_page')}>TẠO ĐƠN HÀNG CỦA BẠN</div>

      <div className={cx('container_1')}>

        <div className={cx('container_dropdown')}>
          <span className={cx('title_search')}>Ngày đi dự kiến</span>
          <DatePicker dateFormat="dd/MM/YYYY" className={cx('date_picker')} selected={startDateFilter} onChange={(date) => setStartDateFilter(date)} />
        </div>

        <div className={cx('container_dropdown')}>
          <span className={cx('title_search')}>Ngày đến dự kiến</span>
          <DatePicker dateFormat="dd/MM/YYYY" className={cx('date_picker')} selected={endDateFilter} onChange={(date) => setEndDateFilter(date)} />
          <span style={{ color: 'red', fontSize: '10px' }}>{textValidateNgayDen}</span>
        </div>

        <div className={cx('container_dropdown')}>
          <span className={cx('title_search')}>Lựa chọn dịch vụ</span>
          <Dropdown handleSelectOption={handleChangeFilter} />
          <span style={{ color: 'red', fontSize: '10px' }}>{textValidateDichVu}</span>
        </div>
      </div>

      <div className={cx('container_2')}>

        <div className={cx('container_input')}>
          <span className={cx('title_input')}>Nhập thông tin cảng đi</span>
          <input
            className={cx('content_input')}
            type="text"
            placeholder='Nhập thông tin cảng đi cho đơn hàng'
            value={cangDi}
            onChange={(e) => setCangDi(e.target.value)}
          />
          <span style={{ color: 'red', fontSize: '10px', marginTop: '8px' }}>{textValidateCangDi}</span>
        </div>

        <div className={cx('container_input')}>
          <span className={cx('title_input')}>Nhập thông tin cảng đến</span>
          <input
            className={cx('content_input')}
            type="text"
            placeholder='Nhập thông tin cảng đến cho đơn hàng'
            value={cangDen}
            onChange={(e) => setCangDen(e.target.value)}
          />
          <span style={{ color: 'red', fontSize: '10px', marginTop: '8px' }}>{textValidateCangDen}</span>
        </div>

      </div>

      <div className={cx('container_3')}>
        <span className={cx('title_hh')}>THÔNG TIN VỀ HÀNG HÓA</span>
        <div className={cx('btn_add')} onClick={() => setIsOpenModalAdd(true)}>
          Thêm hàng hóa
        </div>
      </div>

      {
        listCreateGoods.length <= 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A5A5A5' }}>
            <span className={cx('title_hh')}>DANH SÁCH HÀNG HÓA ĐANG TRỐNG. HÃY THÊM HÀNG HÓA</span>
          </div>
        )
      }

      <div className={cx('container_4')}>
        {
          listCreateGoods.map((item, index) => {
            const id = Date.now().toString() + index.toString();
            return (
              <ItemDetailOrder key={id} item={item} index={index} />
            )
          })
        }
      </div>
      <span style={{ color: 'red', fontSize: '10px', marginLeft: '60px', marginTop: '10px' }}>{textValidateList}</span>


      <div className={cx('container_5')}>
        <div className={cx('btn_add')} onClick={handleClickCreateOrder}>
          Tạo đơn hàng và gửi cho hệ thống xét duyệt
        </div>
      </div>

    </div>
  )
}

export default CreateOrder;

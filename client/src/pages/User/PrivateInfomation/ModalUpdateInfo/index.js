import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './ModalUpdateInfo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataGetCurrentUser, setCurrentUser, setIsOpenModalUpdateInfo, setLoading } from '../../../../redux/slices/userSlice';
import DropdownBanks from '../DropdownBanks';
import baseUrl from '../../../../utils';
import customAxios from '../../../../utils/customAxios';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function ModalUpdateInfo() {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.userManagement.currentUser);

  const [maSoDN, setMaSoDN] = useState(currentUser.infoVerify ? currentUser.infoVerify.maSoDN : "");
  const [tenDoanhNghiep, setTenDoanhNghiep] = useState(currentUser.infoVerify ? currentUser.infoVerify.tenDoanhNghiep : "");
  const [diaChi, setDiaChi] = useState(currentUser.infoVerify ? currentUser.infoVerify.diaChi : "");
  const [STK, setSTK] = useState(currentUser.infoVerify ? currentUser.infoVerify.STK : "");
  const [nganHang, setNganHang] = useState(currentUser.infoVerify ? currentUser.infoVerify.nganHang : "Chọn ngân hàng");
  const [soFAX, setSoFAX] = useState(currentUser.infoVerify ? currentUser.infoVerify.soFAX : "");
  const [soDienThoai, setSoDienThoai] = useState(currentUser.infoVerify ? currentUser.infoVerify.soDienThoai : "");
  const [hoten, setHoten] = useState(currentUser.hoten);
  const [email, setEmail] = useState(currentUser.email);

  const [showMsgValidateMaSoDN, setShowMsgValidateMaSoDN] = useState(false);
  const [msgMaSoDN, setMsgMaSoDN] = useState('');
  const handleValidateMaSoDN = (value) => {
    if (value.trim().length === 0 || value.trim() === '') {
      setShowMsgValidateMaSoDN(true);
      setMsgMaSoDN('Vui lòng nhập mã số doanh nghiệp');
      return false;
    } else {
      setShowMsgValidateMaSoDN(false);
      setMsgMaSoDN('');
      return true;
    }
  }
  const handleChangeMaSoDN = (value) => {
    setMaSoDN(value);
    handleValidateMaSoDN(value);
  }


  const [showMsgValidateTenDoanhNghiep, setShowMsgValidateTenDoanhNghiep] = useState(false);
  const [msgTenDoanhNghiep, setMsgTenDoanhNghiep] = useState('');
  const handleValidateTenDoanhNghiep = (value) => {
    if (value.trim().length === 0 || value.trim() === '') {
      setShowMsgValidateTenDoanhNghiep(true);
      setMsgTenDoanhNghiep('Vui lòng nhập tên doanh nghiệp');
      return false;
    } else {
      setShowMsgValidateTenDoanhNghiep(false);
      setMsgTenDoanhNghiep('');
      return true;
    }
  }
  const handleChangeTenDoanhNghiep = (value) => {
    setTenDoanhNghiep(value);
    handleValidateTenDoanhNghiep(value);
  }

  const [showMsgValidateDiaChi, setShowMsgValidateDiaChi] = useState(false);
  const [msgDiaChi, setMsgDiaChi] = useState('');
  const handleValidateDiaChi = (value) => {
    if (value.trim().length === 0 || value.trim() === '') {
      setShowMsgValidateDiaChi(true);
      setMsgDiaChi('Vui lòng nhập địa chỉ doanh nghiệp');
      return false;
    } else {
      setShowMsgValidateDiaChi(false);
      setMsgDiaChi('');
      return true;
    }
  }
  const handleChangeDiaChi = (value) => {
    setDiaChi(value);
    handleValidateDiaChi(value);
  }

  const [showMsgValidateSTK, setShowMsgValidateSTK] = useState(false);
  const [msgSTK, setMsgSTK] = useState('');
  const handleValidateSTK = (value) => {
    if (value.trim().length === 0 || value.trim() === '') {
      setShowMsgValidateSTK(true);
      setMsgSTK('Vui lòng nhập STK đại diện của doanh nghiệp');
      return false;
    } else {
      setShowMsgValidateSTK(false);
      setMsgSTK('');
      return true;
    }
  }
  const handleChangeSTK = (value) => {
    setSTK(value);
    handleValidateSTK(value);
  }

  const [showMsgValidateNganHang, setShowMsgValidateNganHang] = useState(false);
  const [msgNganHang, setMsgNganHang] = useState('');
  const handleSelectOptionBank = (value) => {
    setNganHang(prev => value);
    if (value === 'Chọn ngân hàng') {
      setShowMsgValidateNganHang(true);
      setMsgNganHang('Vui lòng chọn ngân hàng đại diện của doanh nghiệp');
      return false;
    } else {
      setShowMsgValidateNganHang(false);
      setMsgNganHang('');
      return true;
    }
  }
  useEffect(() => {
    let temp = handleSelectOptionBank(nganHang);
  }, [nganHang])

  const [showMsgValidateSoFAX, setShowMsgValidateSoFAX] = useState(false);
  const [msgSoFAX, setMsgSoFAX] = useState('');
  const handleValidateSoFAX = (value) => {
    if (value.trim().length === 0 || value.trim() === '') {
      setShowMsgValidateSoFAX(true);
      setMsgSoFAX('Vui lòng nhập số FAX của doanh nghiệp');
      return false;
    } else {
      setShowMsgValidateSoFAX(false);
      setMsgSoFAX('');
      return true;
    }
  }
  const handleChangeSoFAX = (value) => {
    setSoFAX(value);
    handleValidateSoFAX(value);
  }

  const [showMsgValidateHoTen, setShowMsgValidateHoTen] = useState(false);
  const [msgHoTen, setMsgHoTen] = useState('');
  const handleValidateHoTen = (value) => {
    if (value.trim().length === 0 || value.trim() === '') {
      setShowMsgValidateHoTen(true);
      setMsgHoTen('Vui lòng nhập họ tên người đại diện');
      return false;
    } else {
      setShowMsgValidateHoTen(false);
      setMsgHoTen('');
      return true;
    }
  }
  const handleChangeHoten = (value) => {
    setHoten(value);
    handleValidateHoTen(value);
  }

  const [showMsgValidateSoDienThoai, setShowMsgValidateSoDienThoai] = useState(false);
  const [msgSoDienThoai, setMsgSoDienThoai] = useState('');
  const handleValidateSoDienThoai = (value) => {
    if (value.trim().length === 0 || value.trim() === '') {
      setShowMsgValidateSoDienThoai(true);
      setMsgSoDienThoai('Vui lòng nhập họ tên người đại diện');
      return false;
    } else {
      var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (vnf_regex.test(value) === false) {
        setShowMsgValidateSoDienThoai(true);
        setMsgSoDienThoai('Số điện thoại không hợp lệ, vui lòng nhập số điện thoại khác');
        return false;
      }
      else {
        setShowMsgValidateSoDienThoai(false);
        setMsgSoDienThoai('');
        return true;
      }
    }
  }
  const handleChangeSoDienThoai = (value) => {
    setSoDienThoai(value);
    handleValidateSoDienThoai(value);
  }
  

  const [showMsgValidateEmail, setShowMsgValidateEmail] = useState(false);
  const [msgEmail, setMsgEmail] = useState('');
  const handleValidateEmail = (value) => {
    if (value.trim().length === 0 || value.trim() === '') {
      setShowMsgValidateEmail(true);
      setMsgEmail('Vui lòng nhập email người đại diện');
      return false;
    } else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (re.test(value) === false) {
        setShowMsgValidateEmail(true);
        setMsgEmail('Email không đúng định dạng, vui lòng nhập email khác');
        return false;
      }
      else {
        setShowMsgValidateEmail(false);
        setMsgEmail('');
        return true;
      }
    }
  }
  
  const handleChangeEmail = (value) => {
    setEmail(value);
    handleValidateEmail(value);
  }


  useEffect(() => {
    dispatch(fetchDataGetCurrentUser());
  }, []);

  const handleClose = () => {
    dispatch(setIsOpenModalUpdateInfo(false));
  }
  const getUser = async () => {
    try {
      const res = await customAxios.get(`${baseUrl}/user/getInfoCurrentUser`)
      dispatch(setCurrentUser(res.data.data));
    } catch (error) {
      console.log("error");
    }
  }

  const hanldeClickSave = async () => {
    // call API lưu
    if (handleValidateMaSoDN(maSoDN) &&
      handleValidateTenDoanhNghiep(tenDoanhNghiep) &&
      handleValidateDiaChi(diaChi) &&
      handleValidateSTK(STK) &&
      nganHang !== 'Chọn ngân hàng' &&
      handleValidateSoFAX(soFAX) &&
      handleValidateSoDienThoai(soDienThoai) &&
      handleValidateHoTen(hoten) &&
      handleValidateEmail(email)
    ) {
      let data = {
        hoten: hoten,
        infoVerify: {
          maSoDN: maSoDN,
          tenDoanhNghiep: tenDoanhNghiep,
          diaChi: diaChi,
          STK: STK,
          nganHang: nganHang,
          soFAX: soFAX,
          soDienThoai: soDienThoai,
        },
        email: email,
      }
      const url = `${baseUrl}/user/updateInfomationUser/${currentUser._id}`;
      dispatch(setLoading(true));
      try {
        const response = await customAxios.patch(url, data);
        dispatch(setLoading(false));
        toast.success('Cập nhật thành công', {
          position: "top-right"
        }
        );
        getUser();
      } catch (error) {
        dispatch(setLoading(false));
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          console.log(error.response.data.error);
          toast.error(error.response.data.error, {
            position: "top-right"
          });
        }
      }
      dispatch(setIsOpenModalUpdateInfo(false));

    }
  }

  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>

        <div className={cx('container-header')}>
          <span className={cx('title_modal')}>CẬP NHẬT THÔNG TIN</span>
          <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('body_modal')}>
          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Mã số doanh nghiệp:</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                className={cx('content_input')}
                placeholder='Nhập mã số doanh nghiệp'
                value={maSoDN}
                onChange={(e) => handleChangeMaSoDN(e.target.value)}
              />
              {
                showMsgValidateMaSoDN && <span className={cx('text_validate')}>{msgMaSoDN}</span>
              }
            </div>

          </div>


          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Tên doanh nghiệp:</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                className={cx('content_input')}
                placeholder='Nhập tên doanh nghiệp'
                value={tenDoanhNghiep}
                onChange={(e) => handleChangeTenDoanhNghiep(e.target.value)}
              />
              {
                showMsgValidateTenDoanhNghiep && <span className={cx('text_validate')}>{msgTenDoanhNghiep}</span>
              }
            </div>
          </div>

          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Địa chỉ doanh nghiệp:</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                className={cx('content_input')}
                placeholder='Nhập địa chỉ doanh nghiệp'
                value={diaChi}
                onChange={(e) => handleChangeDiaChi(e.target.value)}
              />
              {
                showMsgValidateDiaChi && <span className={cx('text_validate')}>{msgDiaChi}</span>
              }
            </div>
          </div>

          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Số tài khoản:</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                className={cx('content_input')}
                placeholder='Nhập số tài khoản'
                value={STK}
                onChange={(e) => handleChangeSTK(e.target.value)}
              />
              {
                showMsgValidateSTK && <span className={cx('text_validate')}>{msgSTK}</span>
              }
            </div>
          </div>
          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Ngân hàng:</span>
            <div style={{ display: 'flex', flexDirection: 'column', width: '450px' }}>
              <DropdownBanks handleSelectOptionBank={handleSelectOptionBank} />
              {
                showMsgValidateNganHang && <span className={cx('text_validate')}>{msgNganHang}</span>
              }
            </div>
          </div>
          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Số FAX:</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                className={cx('content_input')}
                placeholder='Nhập số FAX'
                value={soFAX}
                onChange={(e) => handleChangeSoFAX(e.target.value)}
              />
              {
                showMsgValidateSoFAX && <span className={cx('text_validate')}>{msgSoFAX}</span>
              }
            </div>
          </div>

          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Họ và tên:</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                className={cx('content_input')}
                placeholder='Nhập họ và tên'
                value={hoten}
                onChange={(e) => handleChangeHoten(e.target.value)}
              />
              {
                showMsgValidateHoTen && <span className={cx('text_validate')}>{msgHoTen}</span>
              }
            </div>
          </div>
          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Số điện thoại:</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                className={cx('content_input')}
                placeholder='Nhập số điện thoại'
                value={soDienThoai}
                onChange={(e) => handleChangeSoDienThoai(e.target.value)}
              />
              {
                showMsgValidateSoDienThoai && <span className={cx('text_validate')}>{msgSoDienThoai}</span>
              }
            </div>
          </div>
          <div className={cx('container_input')}>
            <span className={cx('title_input')}>Địa chỉ email:</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                className={cx('content_input')}
                placeholder='Nhập địa chỉ email'
                value={email}
                onChange={(e) => handleChangeEmail(e.target.value)}
              />
              {
                showMsgValidateEmail && <span className={cx('text_validate')}>{msgEmail}</span>
              }
            </div>
          </div>
        </div>

        <div className={cx('container_btn')}>
          <div className={cx('btn_save')} onClick={hanldeClickSave}>Lưu thông tin này</div>
        </div>
      </div>
    </div>
  )
}

export default ModalUpdateInfo;

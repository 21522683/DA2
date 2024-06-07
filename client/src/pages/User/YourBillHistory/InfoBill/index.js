import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './InfoBill.module.scss';
import formatMoney from '../../../../utils/formatMoney.js';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModalInfoBillOfUser, setLoading } from '../../../../redux/slices/billSlice.js';
import convertDate from '../../../../utils/convertDate.js';
import customAxios from '../../../../utils/customAxios.js'
import baseUrl from '../../../../utils/index.js';
import { toast } from 'react-toastify';


const cx = classNames.bind(styles);


function InfoBill({getAllBillUser}) {

  const dispatch = useDispatch();
  const billOfUserList = useSelector(state => state.billManagement.billOfUserList);
  const indexSelectedBillOfUser = useSelector(state => state.billManagement.indexSelectedBillOfUser);
  const itemSelected = billOfUserList[indexSelectedBillOfUser];
  const admin = useSelector(state => state.userManagement.infoAdmin);

  const handlePay = async () => {
    const url = `${baseUrl}/bill/updateStatusBill/${itemSelected._id}`;
    dispatch(setLoading(true));
    try {
      const res = await customAxios.patch(url);
      if (res.status === 200) {
        dispatch(setIsOpenModalInfoBillOfUser(false));
        toast.success("Thanh toán thành công", {
          position: "top-right"
        }
        );
        getAllBillUser();
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      toast.error("Thất bại", {
        position: "top-right"
      }
      );
      dispatch(setIsOpenModalInfoBillOfUser(false));
      dispatch(setLoading(false));
    }
  }

  const handleClose = () => {
    dispatch(setIsOpenModalInfoBillOfUser(false));
  }

  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>

        <div className={cx('container-header')}>
          <span className={cx('title_modal')}>HÓA ĐƠN</span>
          <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('scroll_body')}>
          <div className={cx('container_first')}>
            <div className={cx('container-status')}>
              <span className={cx('title')}>Trạng thái: </span>
              {
                itemSelected.trangThai ? (<span className={cx('accept')}>Đã thanh toán</span>) : (<span className={cx('status')}>Chưa thanh toán</span>)
              }
            </div>

            <div className={cx('container-status')}>
              <span className={cx('title')}>Mã hóa đơn: </span>
              <span className={cx('content')}>{itemSelected._id}</span>
            </div>

            <div className={cx('container-status')}>
              <span className={cx('title')}>Ngày tạo hóa đơn: </span>
              <span className={cx('content')}>{convertDate(itemSelected.ngayTao)}</span>
            </div>
          </div>

          <div className={cx('info-order')}>
            <span className={cx('title-order')}>THÔNG TIN VẬN CHUYỂN</span>
            {
              itemSelected.dsVessel.map((item, index) => {
                return (
                  <div className={cx('container_1')} key={item._id}>
                    <div className={cx('container-date')}>
                      <span className={cx('title')}>Số hiệu tàu: </span>
                      <span className={cx('content')}>{item.soHieu}</span>
                    </div>

                    <div className={cx('container-date')}>
                      <span className={cx('title')}>Tên tàu: </span>
                      <span className={cx('content')}>{item.tenTau}</span>
                    </div>

                    <div className={cx('container-date')}>
                      <span className={cx('title')}>Tải trọng (tấn): </span>
                      <span className={cx('content')}>{item.taiTrong}</span>
                    </div>

                    <div className={cx('container-date')}>
                      <span className={cx('title')}>Giá thuê: </span>
                      <span className={cx('content')}>{formatMoney(item.giaThue)}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className={cx('info-order')}>
            <span className={cx('title-order')}>THÔNG TIN CONTAINER</span>
            {
              itemSelected.dsContainer.map((item, index) => {
                return (
                  <div className={cx('container_1')} key={item._id}>
                    <div className={cx('container-date')}>
                      <span className={cx('title')}>Số hiệu: </span>
                      <span className={cx('content')}>{item.soHieu}</span>
                    </div>

                    <div className={cx('container-date')}>
                      <span className={cx('title')}>Loại: </span>
                      <span className={cx('content')}>{item.loaiContainer.tenLoai}</span>
                    </div>

                    <div className={cx('container-type')}>
                      <span className={cx('title')}>Thể tích (m3): </span>
                      <span className={cx('content')}>{item.loaiContainer.theTichChua}</span>
                    </div>

                    <div className={cx('container-type')}>
                      <span className={cx('title')}>Trọng lượng (tấn): </span>
                      <span className={cx('content')}>{item.loaiContainer.trongLuong}</span>
                    </div>

                    <div className={cx('container-type')}>
                      <span className={cx('title')}>Giá thuê: </span>
                      <span className={cx('content')}>{formatMoney(item.loaiContainer.giaThue)}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className={cx('info-order')}>
            <span className={cx('title-order')}>THÔNG TIN ĐƠN HÀNG</span>
            <div className={cx('container_1')}>
              <div className={cx('container-date')}>
                <span className={cx('title')}>Ngày đi dự kiến: </span>
                <span className={cx('content')}>{convertDate(itemSelected.keKhaiHH.donHang.ngayDiDuKien)}</span>
              </div>

              <div className={cx('container-date')}>
                <span className={cx('title')}>Ngày đến dự kiến: </span>
                <span className={cx('content')}>{convertDate(itemSelected.keKhaiHH.donHang.ngayDenDuKien)}</span>
              </div>

              <div className={cx('container-type')}>
                <span className={cx('title')}>Loại hình: </span>
                <span className={cx('content')}>{itemSelected.keKhaiHH.donHang.loaiHinh}</span>
              </div>
            </div>
            <div className={cx('container_1')}>
              <div className={cx('container-date')}>
                <span className={cx('title')}>Thông tin cảng đi: </span>
                <span className={cx('content')}>{itemSelected.keKhaiHH.donHang.cangDi}</span>
              </div>

              <div className={cx('container-date')}>
                <span className={cx('title')}>Thông tin cảng đến: </span>
                <span className={cx('content')}>{itemSelected.keKhaiHH.donHang.cangDen}</span>
              </div>
            </div>

            <div className={cx('container_hanghoa')}>
              <span className={cx('title_container')}>Danh mục hàng hóa</span>
              {
                itemSelected.keKhaiHH.donHang.hangHoa.map((item, index) => {
                  return (
                    <div className={cx('item_hanghoa')} key={index}>
                      <span className={cx('name_hanghoa')}>{item.tenHH}</span>
                      <div className={cx('container_field')}>
                        <span className={cx('title')}>Lĩnh vực: </span>
                        <span className={cx('content')}>{item.linhVuc}</span>
                      </div>
                      <div className={cx('container_field')}>
                        <span className={cx('title')}>Tổng khối lượng (tấn): </span>
                        <span className={cx('content')}>{(item.khoiLuong * item.soLuong) / 1000}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>

          <div className={cx('spacer')}></div>

          <div className={cx('info-order')}>
            <span className={cx('title-order')}>THÔNG TIN NGƯỜI NHẬN THANH TOÁN</span>
            <div className={cx('container_1')}>
              <div className={cx('container-date')}>
                <span className={cx('title')}>Tên người đại diện: </span>
                <span className={cx('content')}>{admin.hoten}</span>
              </div>

              <div className={cx('container-date')}>
                <span className={cx('title')}>Số tài khoản: </span>
                <span className={cx('content')}>{admin.infoVerify.STK}</span>
              </div>
            </div>
            <div className={cx('container_1')}>
              <div className={cx('container-date')}>
                <span className={cx('title')}>Tên doanh nghiệp: </span>
                <span className={cx('content')}>{admin.infoVerify.tenDoanhNghiep}</span>
              </div>

              <div className={cx('container-date')}>
                <span className={cx('title')}>Ngân hàng: </span>
                <span className={cx('content')}>{admin.infoVerify.nganHang}</span>
              </div>
            </div>
          </div>

          <div className={cx('info-pay')}>
            <span className={cx('title_info')}>CÁC KHOẢN THANH TOÁN</span>
            <div className={cx('container_col')}>
              <div className={cx('container_row')}>
                <span className={cx('title')}>PHÍ VẬN CHUYỂN:</span>
                <span className={cx('content')}>{formatMoney(itemSelected.phiVanChuyen)}</span>
              </div>
              <div className={cx('container_row')}>
                <span className={cx('title')}>PHÍ THUÊ TÀU:</span>
                <span className={cx('content')}>{formatMoney(itemSelected.phiThueTau)}</span>
              </div>
              <div className={cx('container_row')}>
                <span className={cx('title')}>PHÍ THUÊ CONTAINER:</span>
                <span className={cx('content')}>{formatMoney(itemSelected.phiThueContainer)}</span>
              </div>
              <div className={cx('container_row')}>
                <span className={cx('title')}>THUẾ:</span>
                <span className={cx('content')}>{formatMoney(itemSelected.thue)}</span>
              </div>
              <div className={cx('container_row')}>
                <span className={cx('title')}>TRỊ GIÁ ĐƠN HÀNG:</span>
                <span className={cx('content')}>{formatMoney(itemSelected.triGiaDonHang)}</span>
              </div>

              <div className={cx('spacer_pay')}></div>

              <div className={cx('total_pay')}>
                <span className={cx('title')}>TỔNG TIỀN:</span>
                <span className={cx('content')}>{formatMoney(itemSelected.tongTien)}</span>
              </div>

            </div>
          </div>
        </div>

        <div className={cx('container-btn')}>
          <div className={cx('btn_pay')} onClick={handlePay}>
            Thanh toán
          </div>
        </div>

      </div >
    </div >
  )
}

export default InfoBill;

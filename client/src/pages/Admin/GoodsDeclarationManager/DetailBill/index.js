import React from 'react'
import classNames from "classnames/bind";
import styles from './DetailBill.module.scss';
import formatMoney from '../../../../utils/formatMoney.js';

const cx = classNames.bind(styles);


function DetailBill() {

  const handleClose = () => {

  }

  const handleAccept = () => {

  }

  return (
    <div className={cx('wrapper')} onClick={handleClose}>
      <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>

        <div className={cx('container-header')}>
          <span className={cx('title_modal')}>HÓA ĐƠN</span>
          <span className={cx('btn_close')} onClick={handleClose}>&times;</span>
        </div>

        <div className={cx('container_first')}>
          <div className={cx('container-status')}>
            <span className={cx('title')}>Trạng thái: </span>
            {/* <span className={cx('accept')}>Đã thanh toán</span> */}
            <span className={cx('status')}>Chưa thanh toán</span>
          </div>

          <div className={cx('container-status')}>
            <span className={cx('title')}>Mã đơn hàng: </span>
            <span className={cx('content')}>DH0927226372</span>
          </div>

          <div className={cx('container-status')}>
            <span className={cx('title')}>Ngày tạo: </span>
            <span className={cx('content')}>11/01/2024</span>
          </div>
        </div>

        <div className={cx('info-order')}>
          <span className={cx('title-order')}>THÔNG TIN VẬN CHUYỂN</span>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Số hiệu tàu: </span>
              <span className={cx('content')}>QNg90999TS</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Tên tàu: </span>
              <span className={cx('content')}>COSCO-SHIPPING-101</span>
            </div>
          </div>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Trọng lượng (tấn): </span>
              <span className={cx('content')}>1204.3</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Tải trọng (tấn): </span>
              <span className={cx('content')}>2002.4</span>
            </div>
          </div>
        </div>

        <div className={cx('info-order')}>
          <span className={cx('title-order')}>THÔNG TIN CONTAINER</span>
          {
            [1, 2].map(() => {
              return (
                <div className={cx('container_1')}>
                  <div className={cx('container-date')}>
                    <span className={cx('title')}>Số hiệu: </span>
                    <span className={cx('content')}>QNg90999TS</span>
                  </div>

                  <div className={cx('container-date')}>
                    <span className={cx('title')}>Trọng lượng (tấn): </span>
                    <span className={cx('content')}>2002.4</span>
                  </div>

                  <div className={cx('container-type')}>
                    <span className={cx('title')}>Thể tích (m3): </span>
                    <span className={cx('content')}>1204.3</span>
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
              <span className={cx('content')}>11/04/2024</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Ngày đến dự kiến: </span>
              <span className={cx('content')}>11/04/2024</span>
            </div>

            <div className={cx('container-type')}>
              <span className={cx('title')}>Loại hình: </span>
              <span className={cx('content')}>Xuất khẩu</span>
            </div>
          </div>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Thông tin cảng đi: </span>
              <span className={cx('content')}>Cảng Đông Anh, Sài Gòn</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Thông tin cảng đến: </span>
              <span className={cx('content')}>Cảng Cam Ranh Khánh Hòa</span>
            </div>
          </div>
        </div>

        <div className={cx('spacer')}></div>

        <div className={cx('info-order')}>
          <span className={cx('title-order')}>THÔNG TIN NGƯỜI NHẬN THANH TOÁN</span>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Tên người đại diện: </span>
              <span className={cx('content')}>Phạm Nguyễn Trường An</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Số tài khoản:: </span>
              <span className={cx('content')}>1020637570</span>
            </div>
          </div>
          <div className={cx('container_1')}>
            <div className={cx('container-date')}>
              <span className={cx('title')}>Tên doanh nghiệp: </span>
              <span className={cx('content')}>Công ty cổ phần tiêu dùng Macdison</span>
            </div>

            <div className={cx('container-date')}>
              <span className={cx('title')}>Ngân hàng: </span>
              <span className={cx('content')}>VIETCOMBANK</span>
            </div>
          </div>
        </div>

        <div className={cx('info-pay')}>
          <span className={cx('title_info')}>CÁC KHOẢN THANH TOÁN</span>
          <div className={cx('container_col')}>
            <div className={cx('container_row')}>
              <span className={cx('title')}>PHÍ VẬN CHUYỂN:</span>
              <span className={cx('content')}>{formatMoney(1372000)}</span>
            </div>
            <div className={cx('container_row')}>
              <span className={cx('title')}>PHÍ THUÊ TÀU:</span>
              <span className={cx('content')}>{formatMoney(400000)}</span>
            </div>
            <div className={cx('container_row')}>
              <span className={cx('title')}>PHÍ THUÊ CONTAINER:</span>
              <span className={cx('content')}>{formatMoney(1372000)}</span>
            </div>
            <div className={cx('container_row')}>
              <span className={cx('title')}>THUẾ:</span>
              <span className={cx('content')}>{formatMoney(127000)}</span>
            </div>
            <div className={cx('container_row')}>
              <span className={cx('title')}>PHÍ DỊCH VỤ:</span>
              <span className={cx('content')}>{formatMoney(300000)}</span>
            </div>

            <div className={cx('spacer_pay')}></div>

            <div className={cx('total_pay')}>
              <span className={cx('title')}>TỔNG TIỀN:</span>
              <span className={cx('content')}>{formatMoney(3440000)}</span>
            </div>

          </div>
        </div>

        <div className={cx('container-btn')}>
          <span className={cx('flag_content')}>Đã gửi hóa đơn đến người dùng</span>
        </div>

      </div >
    </div >
  )
}

export default DetailBill;

import React from 'react'
import classNames from 'classnames/bind';
import styles from './BillDetail.module.scss';
import DataInfo from './components/DataInfo';
import RuleInfo from './components/RuleInfo';
const cx = classNames.bind(styles);

function BillDetail() {    
  return (
    <div className={cx('container')}>
        <div className={cx('headerContainer')}>
            <h1 className={cx('header')}>
            THÔNG TIN HÓA ĐƠN
            </h1>

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                <p style={{fontSize: 15}}>Mã số: 1111</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                <p style={{fontSize: 15}}>Ngày tạo: 1111</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                <p style={{fontSize: 15}}>Trạng thái</p>
                <p style={{fontSize: 15, color: 'red'}}>Trạng thái</p>
            </div>
        </div>

        <h1 className={cx('title')}>
        THÔNG TIN NGƯỜI THANH TOÁN
        </h1>

        <>
        <div className={cx('childContainer')}>
            <DataInfo title='Tên người đại diện:'
                content='Phạm Nguyễn Trường An'/>

            <div className={cx('spaceView')}/>

            <DataInfo title='Số điện thoại:'
                content='0379361210'/>
        </div>

        <div className={cx('childContainer')}>
          <DataInfo title='Email:'
            content='phantrongtinh15082003@gmail.com'/>

          <div className={cx('spaceView')}/>

          <DataInfo title='Số tài khoản:'
            content='1020637570'/>
        </div>

        <div className={cx('childContainer')}>
          <DataInfo title='Tên doanh nghiệp:'
          content='Công ty cổ phần tiêu dùng Macdison'/>

            <div className={cx('spaceView')}/>

            <DataInfo title='Ngân hàng:'
            content='VIETCOMBANK'/>

        </div>
        </>

        <div className={cx('pagination')}/>

        <h1 className={cx('title')}>
        THÔNG TIN NGƯỜI NHẬN
        </h1>

        <>
        <div className={cx('childContainer')}>
          <DataInfo title='Tên người đại diện:'
          content='Phan Trọng Tính'/>
        
            <div className={cx('spaceView')}/>

            <DataInfo title='Số tài khoản:'
            content='1020637570'/>
        </div>

        <div className={cx('childContainer')}>
          <DataInfo title='Tên doanh nghiệp:'
          content='Công ty cổ phần tiêu dùng Macdison'/>

            <div className={cx('spaceView')}/>

            <DataInfo title='Ngân hàng:'
            content='VIETCOMBANK'/>

        </div>
        </>

        <div className={cx('pagination')}/>

        <h1 className={cx('title')}>
        THÔNG TIN VẬN CHUYỂN
        </h1>

        <>
        <div className={cx('childContainer')}>
          <DataInfo title='Số hiệu:'
              content='QNg90999TS'/>

            <div className={cx('spaceView')}/>
              
            <DataInfo title='Trọng lượng (tấn):'
              content='1204.3'/>
        </div>

        <div className={cx('childContainer')}>
          <DataInfo title='Tên  tàu:'
              content='COSCO-SHIPPING-101'/>

            <div className={cx('spaceView')}/>
              
            <DataInfo title='Tải trọng (tấn):'
              content='2002'/>
        </div>

        </>

        <div className={cx('pagination')}/>

        <h1 className={cx('title')}>
        THÔNG TIN CONTAINER
        </h1>

        <>
        <div className={cx('childContainer')}>
          <DataInfo title='Số hiệu:'
              content='QNg90999TS'/>

            <div className={cx('spaceView')}/>
              
            <DataInfo title='Trọng lượng (tấn):'
              content='2002.4'/>

            <div className={cx('spaceView')}/>

            <DataInfo title='Thể tích (m3):'
              content='1204.3'/>
        </div>

        <div className={cx('childContainer')}>
          <DataInfo title='Số hiệu:'
              content='QNg90999TS'/>

            <div className={cx('spaceView')}/>
              
            <DataInfo title='Trọng lượng (tấn):'
              content='2002.4'/>

            <div className={cx('spaceView')}/>

            <DataInfo title='Thể tích (m3):'
              content='1204.3'/>
        </div>

        </>

        <div className={cx('pagination')}/>

        <h1 className={cx('title')}>
        THÔNG TIN ĐƠN HÀNG
        </h1>

        <>
        <div className={cx('childContainer')}>
          <DataInfo title='Ngày đi dự kiến:'
              content='15/04/2024'/>

            <div className={cx('spaceView')}/>
              
            <DataInfo title='Ngày đến dự kiến:'
              content='15/04/2024'/>

            <div className={cx('spaceView')}/>

            <DataInfo title='Loại hình:'
              content='Xuất khẩu'/>
        </div>

        <div className={cx('childContainer')}>
          <DataInfo title='Cảng đi:'
              content='Cảng đôngg an, Sài gòn ...'/>
        </div>

        <div className={cx('childContainer')}>
          <DataInfo title='Cảng đến:'
              content='Cảng đôngg an, Sài gòn ...'/>
        </div>
        </>

        <div className={cx('pagination')}/>

        <h1 className={cx('titleRule')}>
        CÁC KHOẢN THANH TOÁN
        </h1>

        <>
        <div className={cx('childContainer')}>
          <RuleInfo title='PHÍ VẬN CHUYỂN:'
          content='0'
          />
        </div>

        <div className={cx('childContainer')}>
          <RuleInfo title='PHÍ THUÊ TÀU:'
          content='0'
          />
        </div>

        <div className={cx('childContainer')}>
          <RuleInfo title='PHÍ THUÊ CONTAINER:'
          content='0'
          />
        </div>

        <div className={cx('childContainer')}>
          <RuleInfo title='THUẾ'
          content='0'
          />
        </div>

        <div className={cx('childContainer')}>
          <RuleInfo title='PHÍ DỊCH VỤ:'
          content='0'
          />
        </div>
        </>

        <>
        <div className={cx('separator')}/>
        <div className={cx('childContainer')}>
            <p className={cx('totalLabel')}>TỔNG TIỀN:</p>
            <p className={cx('total')}>0</p>
        </div>
        </>

        <button className={cx('btnConfirm')}>
        THANH TOÁN
        </button>

        <button className={cx('btnExport')}>
        Xuất file
        </button>

    </div>
  )
}

export default BillDetail;

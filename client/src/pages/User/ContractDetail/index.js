import React from 'react'
import classNames from 'classnames/bind';
import styles from './ContractDetail.module.scss';
import DataInfo from './components/DataInfo';
import RuleInfo from './components/RuleInfo';
const cx = classNames.bind(styles);

function ContractDetail() {    
  return (
    <div className={cx('container')}>
        <div className={cx('headerContainer')}>
            <h1 className={cx('header')}>
            CHI TIẾT HỢP ĐỒNG
            </h1>

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                <p style={{fontSize: 15}}>Mã số: 1111</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                <p style={{fontSize: 15}}>Trạng thái</p>
                <p style={{fontSize: 15, color: 'red'}}>Trạng thái</p>
            </div>
        </div>

        <h1 className={cx('title')}>
        THÔNG TIN NGƯỜI SỬ DỤNG DỊCH VỤ
        </h1>

        <>
        <div className={cx('childContainer')}>
          <DataInfo title='Tên người đại diện:'
          content='Phạm Nguyễn Trường An,  Công ty cổ phần tiêu dùng Macdison'/>
        </div>

        <div className={cx('childContainer')}>
          <DataInfo title='Số điện thoại:'
            content='0379361210'/>

          <div className={cx('spaceView')}/>
            
          <DataInfo title='FAX:'
            content='0888983662'/>

          <div className={cx('spaceView')}/>

          <DataInfo title='STK:'
            content='1020637570 - VIETCOMBANK'/>
        </div>

        <div className={cx('childContainer')}>
          <DataInfo title='Địa chỉ:'
          content='Số 385, 75 at Tachong Bank Ltd (Taiwan Br.) Tainan,Taiwan'/>
        </div>
        </>

        <div className={cx('pagination')}/>

        <h1 className={cx('title')}>
        THÔNG TIN NGƯỜI CUNG CẤP DỊCH VỤ
        </h1>

        <>
        <div className={cx('childContainer')}>
          <DataInfo title='Tên người đại diện:'
          content='Phan Trọng Tính,  Công ty dịch vụ xuất nhập khẩu TLDA2'/>
        </div>

        <div className={cx('childContainer')}>
          <DataInfo title='Số điện thoại:'
            content='0379361210'/>

          <div className={cx('spaceView')}/>
            
          <DataInfo title='FAX:'
            content='0888983662'/>

          <div className={cx('spaceView')}/>

          <DataInfo title='STK:'
            content='1020637570 - VIETCOMBANK'/>
        </div>

        <div className={cx('childContainer')}>
          <DataInfo title='Địa chỉ:'
          content='Số 385, 75 at Tachong Bank Ltd (Taiwan Br.) Tainan,Taiwan'/>
        </div>
        </>

        <div className={cx('pagination')}/>

        <h1 className={cx('title')}>
        CONTAINER SỬ DỤNG:
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
        CÁC ĐIỀU KHOẢN KÝ KẾT
        </h1>

        <>
        <div className={cx('childContainer')}>
          <RuleInfo title='Điều 1:  Về dịch vụ '
          content='Đảm bảo mọi thông tin về tàu thuyền, container, hàng hóa, và trị giá hợp đồng được đảm bảo chính
          xác theo như hóa đơn đã cung cấp.'
          />
        </div>

        <div className={cx('childContainer')}>
          <RuleInfo title='Điều 2:  Điều khoản thanh toán '
          content='Thanh toán thông qua ngân hàng VIETCOMBANK của ông Phan Trọng Tính, đại diện bên cung cấp dịch vụ.'
          />
        </div>

        <div className={cx('childContainer')}>
          <RuleInfo title='Điều 3:  Điều khoản vận chuyển '
          content='Đảm bảo vận chuyển đúng thời gian dự kiến đi và đến trong hợp động, không được quá thời gian dự kiến. '
          />
        </div>

        <div className={cx('childContainer')}>
          <RuleInfo title='Điều 4:  Tài liệu của dịch vụ '
          content='Đảm bảo đầy đủ các loại tài liệu bao gồm: Bản kê khai hàng hóa, Hóa đơn, Hợp đồng, Hóa đơn thuê tàu và container'
          />
        </div>

        <div className={cx('childContainer')}>
          <RuleInfo title='Điều 5:  Thỏa thuận '
          content='Trong quá trình thực hiện hợp đồng, mọi tranh chấp không đạt được thỏa thuận hòa giải sẽ do Trung tâm quốc tế thuộc Phòng Thương mại và Công nghiệp Việt Nam giải quyết. Phán quyết của Trung tâm này là cuối cùng và ràng buộc cả hai bên. Nguồn cấp dữ liệu cho trọng tài và các khoản phí khác sẽ do bên thua kiện chịu.'
          />
        </div>

        <div className={cx('childContainer')}>
          <RuleInfo title='Điều 6:  Điều khoản chung '
          content='Trong quá trình thực hiện hợp đồng, mọi tranh chấp không đạt được thỏa thuận hòa giải sẽ do Trung tâm quốc tế thuộc Phòng Thương mại và Công nghiệp Việt Nam giải quyết. Phán quyết của Trung tâm này là cuối cùng và ràng buộc cả hai bên. Nguồn cấp dữ liệu cho trọng tài và các khoản phí khác sẽ do bên thua kiện chịu.'
          />
        </div>
        </>

        <>
        <div className={cx('childContainer')}>
          <div className={cx('signatureContainer')}>
            <p className={cx('signatureStyle')}>
            BÊN SỬ DỤNG DỊCH VỤ
            </p>
            <p className={cx('signatureStyle', 'mt')}>
            Phạm Nguyễn Trường An
            </p>
          </div>

          <div className={cx('signatureContainer')}>
            <p className={cx('signatureStyle')}>
            BÊN SỬ DỤNG DỊCH VỤ
            </p>
            <p className={cx('signatureStyle', 'mt')}>
            Phạm Nguyễn Trường An
            </p>
          </div>

        </div>
        </>

        <button className={cx('btnConfirm')}>
        XÁC NHẬN VÀ ĐỒNG Ý KÝ KẾT HỢP ĐỒNG
        </button>
    </div>
  )
}

export default ContractDetail;

import React, { useState } from 'react'
import classNames from 'classnames/bind';
import styles from './BillManage.module.scss';
const cx = classNames.bind(styles);

function BillManage() {
    const listAdv = [
        {
            id: 0,
            adv: 'Chọn trạng thái',
        },
        {
            id: 1,
            adv: 'Đã thanh toán',
        },
        {
            id: 1,
            adv: 'Chưa thanh toán',
        }
    ];

    const itemAdv = listAdv.map(listAdv => 
        <option 
        key={listAdv.id}
        value={listAdv.id} 
        className={cx('itemAdv')}
        >
        {listAdv.adv}
        </option>
    );
    
    const data = [
    ];

  return (
    <div className={cx('container')}>
        <h1 className={cx('header')}>
        QUẢN LÝ HÓA ĐƠN
        </h1>

        <div className={cx('topContainer')}>
            <div className={cx('searchContainer')}>
                <p className={cx('label')}>
                    Tìm kiếm:
                </p>

                <input className={cx('input')}
                />
            </div>

            <div className={cx('spaceView')}/>

            <div className={cx('dateCreateContainer')}>
                <div className={cx('searchContainer')}>
                    <p className={cx('label')}>
                        Ngày tạo hóa đơn:
                    </p>

                    <input className={cx('input')}
                    />
                </div>
            </div>

            <div className={cx('spaceView')}/>

            <div className={cx('advContainer')}>
                <p className={cx('label')}>
                Trạng thái hóa đơn:
                </p>

                <select className={cx('comboAdv')}>
                    {itemAdv}
                </select>
            </div>
        </div>

        <h2 className={cx('title')}>
        Danh sách giao dịch
        </h2>

        <div className={cx('dataContainer')}>
        <table className={cx('tbOrder')}>
            <thead>
                <tr>
                <th className={cx('tbHeader')}>Mã hóa đơn</th>
                <th className={cx('tbHeader')}>Ngày tạo hóa đơn</th>
                <th className={cx('tbHeader')}>Trạng thái</th>
                <th className={cx('tbHeader')}>Thao tác</th>
                </tr>
            </thead>

            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        {/* <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.email}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default BillManage;

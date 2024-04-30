import React from 'react'
import classNames from "classnames/bind";
import styles from './ItemContainer.module.scss';

const cx = classNames.bind(styles);


function ItemContainer() {
    return (
        <div className={cx('container')}>
            <div className={cx('item-container')}>
                <div className={cx('container-status')}>
                    <div className={cx('flag')}></div>
                    <span className={cx('status')}>Đang trống</span>
                </div>
                <div className={cx('container_id')}>
                    <span className={cx('title_number')}>Số hiệu</span>
                    <span className={cx('content_number')}>QC-99877TS</span>
                </div>

                <div className={cx('container_info')}>
                    <div className={cx('container_volume')}>
                        <span className={cx('title')}>Thể tích (m3):</span>
                        <span className={cx('content')}>1200</span>
                    </div>

                    <div className={cx('container_volume')}>
                        <span className={cx('title')}>Trọng lượng (tấn):</span>
                        <span className={cx('content')}>1.4</span>
                    </div>
                </div>
            </div>

            <div className={cx('item_hover')}>
                <div className={cx('btn_update')}>
                    Cập nhật
                </div>

                <div className={cx('btn_delete')}>
                    Xóa
                </div>
            </div>
        </div>
    )
}

export default ItemContainer;

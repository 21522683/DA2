import React from 'react'
import classNames from 'classnames/bind';
import styles from './ModalAddContainer.module.scss';

const cx = classNames.bind(styles);


function ModalAddContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('container-header')}>
                    <span className={cx('title_modal')}>THÊM CONTAINER</span>
                    <span className={cx('btn_close')}>&times;</span>
                </div>

                <div className={cx('container_body_modal')}>
                    <div className={cx('container_input_1')}>
                        <span className={cx('title_input')}>Số hiệu container</span>
                        <input type="text" className={cx('input_number')} placeholder='Nhập số hiệu container'/>
                    </div>

                    <div className={cx('container_input_2')}>
                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Thể tích (m3)</span>
                            <input type="text" className={cx('input_number')} placeholder='Nhập thể tích'/>
                        </div>

                        <div className={cx('container_input_2_a')}>
                            <span className={cx('title_input')}>Trọng lượng (tấn)</span>
                            <input type="text" className={cx('input_number')} placeholder='Nhập trọng lượng'/>
                        </div>
                    </div>

                    <div className={cx('container_btn')}>
                        <div className={cx('btn_accept')}>
                            Thêm container
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAddContainer;

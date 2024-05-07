import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from './ItemDetailOrder.module.scss';
import images from '../../../../../assets/images/index';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const cx = classNames.bind(styles);

function ItemDetailOrder({ itemHH }) {
    const [showDetail, setShowDetail] = useState(false);

    const handleClickIconShowDetail = () => {
        setShowDetail(!showDetail);
    }
    return (
        <>
            <div className={cx('item-list')}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img className={cx('image_hh')} src={images.hanghoa} alt='hh' />
                    <div className={cx('container-info')}>
                        <span className={cx('name_goods')}>Thuốc apcmsjnjdf</span>
                        <div className={cx('container-field')}>
                            <span className={cx('title')}>Lĩnh vực: </span>
                            <span className={cx('content')}>Y tế</span>
                        </div>
                        <span className={cx('description')}>Mô tả sản phẩm ở đây nha</span>
                    </div>
                </div>

                {
                    showDetail ? (<IoIosArrowUp className={cx('icon_detail')} onClick={handleClickIconShowDetail} />) : (<IoIosArrowDown className={cx('icon_detail')} onClick={handleClickIconShowDetail} />)
                }

            </div>

            {
                showDetail && (
                    <div className={cx('detail_goods')}>
                        <div className={cx('container_hh')}>
                            <span className={cx('title')}>Tên hàng hóa:</span>
                            <span className={cx('content')}>abc</span>
                        </div>
                        <div className={cx('container_hh')}>
                            <span className={cx('title')}>Nhà cung cấp:</span>
                            <span className={cx('content')}>cbdhbdhb</span>
                        </div>

                        <div className={cx('container_mutilple')}>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Lĩnh vực:</span>
                                <span className={cx('content')}>Y tế</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Số lượng:</span>
                                <span className={cx('content')}>1222</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Khối lượng:</span>
                                <span className={cx('content')}>1.21</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Đơn vị tính:</span>
                                <span className={cx('content')}>kg</span>
                            </div>
                        </div>

                        <div className={cx('container_mutilple')}>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Ngày SX:</span>
                                <span className={cx('content')}>11/11/2022</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>HSD:</span>
                                <span className={cx('content')}>11/11/2025</span>
                            </div>
                        </div>

                        <div className={cx('container_mutilple')}>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Chiều dài (m):</span>
                                <span className={cx('content')}>1.21</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Chiều rộng (m):</span>
                                <span className={cx('content')}>1.21</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Chiều cao (m):</span>
                                <span className={cx('content')}>1.21</span>
                            </div>
                        </div>

                        <div className={cx('container_mutilple')}>

                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Hình ảnh:</span>
                                {
                                    [1, 2, 3].map((item, index) => {
                                        return (
                                            <img key={index} className={cx('image_hh')} src={images.hanghoa} alt='hh' />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={cx('container_hh')}>
                            <span className={cx('title')}>Mô tả:</span>
                            <span className={cx('content-script')}>Mô tả sản phẩm</span>
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default ItemDetailOrder

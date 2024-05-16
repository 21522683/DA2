import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from './ItemDetailOrder.module.scss';
import images from '../../../../../assets/images';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import convertDate from '../../../../../utils/convertDate';

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
                    <img className={cx('image_hh')} src={itemHH.hinhAnh[0].url} alt='hh' />
                    <div className={cx('container-info')}>
                        <span className={cx('name_goods')}>{itemHH.tenHH}</span>
                        <div className={cx('container-field')}>
                            <span className={cx('title')}>Lĩnh vực: </span>
                            <span className={cx('content')}>{itemHH.linhVuc}</span>
                        </div>
                        <span className={cx('description')}>{itemHH.moTa}</span>
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
                            <span className={cx('content')}>{itemHH.tenHH}</span>
                        </div>
                        <div className={cx('container_hh')}>
                            <span className={cx('title')}>Nhà cung cấp:</span>
                            <span className={cx('content')}>{itemHH.nhaCungCap}</span>
                        </div>

                        <div className={cx('container_mutilple')}>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Lĩnh vực:</span>
                                <span className={cx('content')}>{itemHH.linhVuc}</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Số lượng:</span>
                                <span className={cx('content')}>{itemHH.soLuong}</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Khối lượng:</span>
                                <span className={cx('content')}>{itemHH.khoiLuong}</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Đơn vị tính:</span>
                                <span className={cx('content')}>{itemHH.donViTinh}</span>
                            </div>
                        </div>

                        <div className={cx('container_mutilple')}>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Ngày SX:</span>
                                <span className={cx('content')}>{convertDate(itemHH.ngaySX)}</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>HSD:</span>
                                <span className={cx('content')}>{convertDate(itemHH.HSD)}</span>
                            </div>
                        </div>

                        <div className={cx('container_mutilple')}>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Chiều dài (m):</span>
                                <span className={cx('content')}>{itemHH.chieuDai}</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Chiều rộng (m):</span>
                                <span className={cx('content')}>{itemHH.chieuRong}</span>
                            </div>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Chiều cao (m):</span>
                                <span className={cx('content')}>{itemHH.chieuCao}</span>
                            </div>
                        </div>

                        <div className={cx('container_mutilple')}>

                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Hình ảnh:</span>
                                {
                                    itemHH.hinhAnh.map((item, index) => {
                                        return (
                                            <img key={index} className={cx('image_hh')} src={item.url} alt='hh' />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={cx('container_hh')}>
                            <span className={cx('title')}>Mô tả:</span>
                            <span className={cx('content-script')}>{itemHH.moTa}</span>
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default ItemDetailOrder

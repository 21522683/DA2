import React from 'react'
import classNames from "classnames/bind";
import styles from './ItemVessel.module.scss';
import { useDispatch } from 'react-redux';
import { setIndexVesselSelected, setIsOpenMessageBox, setIsOpenModalUpdate } from '../../../../redux/slices/vesselSlice';

const cx = classNames.bind(styles);


function ItemVessel({ itemVessel, indexItem }) {

    const dispatch = useDispatch();

    const handleClickUpdate = () => {
        dispatch(setIndexVesselSelected(indexItem));
        dispatch(setIsOpenModalUpdate(true));
    }

    const handleClickDelete = () => {
        dispatch(setIndexVesselSelected(indexItem));
        dispatch(setIsOpenMessageBox(true));
    }

    return (
        <div className={cx(itemVessel.trangThai ? 'container_lock' : 'container')}>
            <div className={cx('item-container')}>
                <div className={cx('container-status')}>
                    <div className={cx('flag')}></div>
                    {
                        itemVessel.trangThai ? (<span className={cx('status')}>Đã sử dụng</span>) : (<span className={cx('status')}>Đang trống</span>)
                    }
                </div>
                <div className={cx('container_id')}>
                    <span className={cx('title_number')}>Tên tàu</span>
                    <span className={cx('content_number')}>{itemVessel.tenTau}</span>
                </div>
                <div className={cx('container_id')}>
                    <span className={cx('title_number')}>Số hiệu</span>
                    <span className={cx('content_number')}>{itemVessel.soHieu}</span>
                </div>

                <div className={cx('container_info')}>
                    <div className={cx('container_volume')}>
                        <span className={cx('title')}>Tải trọng (tấn):</span>
                        <span className={cx('content')}>{itemVessel.taiTrong}</span>
                    </div>

                    <div className={cx('container_volume')}>
                        <span className={cx('title')}>Trọng lượng (tấn):</span>
                        <span className={cx('content')}>{itemVessel.trongLuong}</span>
                    </div>
                </div>
            </div>

            {
                itemVessel.trangThai === false && (
                    <div className={cx('item_hover')}>
                        <div className={cx('btn_update')} onClick={handleClickUpdate}>
                            Cập nhật
                        </div>

                        <div className={cx('btn_delete')} onClick={handleClickDelete}>
                            Xóa
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default ItemVessel;

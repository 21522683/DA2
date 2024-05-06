import React from 'react'
import classNames from "classnames/bind";
import styles from './ItemContainer.module.scss';
import { useDispatch } from 'react-redux';
import { setIndexContainerSelected, setIsOpenMessageBox, setIsOpenModalUpdate } from '../../../../redux/sliceAdmin/containerSlice';

const cx = classNames.bind(styles);


function ItemContainer({itemContainer, indexItem}) {

    const dispatch = useDispatch();

    const handleClickUpdate = () => {
        dispatch(setIndexContainerSelected(indexItem));
        dispatch(setIsOpenModalUpdate(true));
    }

    const handleClickDelete = () => {
        dispatch(setIndexContainerSelected(indexItem));
        dispatch(setIsOpenMessageBox(true));
    }

    return (
        <div className={cx(itemContainer.trangThai ? 'container_lock' : 'container')}>
            <div className={cx('item-container')}>
                <div className={cx('container-status')}>
                    <div className={cx('flag')}></div>
                    {
                        itemContainer.trangThai ? (<span className={cx('status')}>Đã sử dụng</span>) : (<span className={cx('status')}>Đang trống</span>)
                    }
                </div>
                <div className={cx('container_id')}>
                    <span className={cx('title_number')}>Số hiệu</span>
                    <span className={cx('content_number')}>{itemContainer.soHieu}</span>
                </div>

                <div className={cx('container_info')}>
                    <div className={cx('container_volume')}>
                        <span className={cx('title')}>Thể tích (m3):</span>
                        <span className={cx('content')}>{itemContainer.theTichChua}</span>
                    </div>

                    <div className={cx('container_volume')}>
                        <span className={cx('title')}>Trọng lượng (tấn):</span>
                        <span className={cx('content')}>{itemContainer.trongLuong}</span>
                    </div>
                </div>
            </div>

            <div className={cx('item_hover')}>
                <div className={cx('btn_update')} onClick={handleClickUpdate}>
                    Cập nhật
                </div>

                <div className={cx('btn_delete')} onClick={handleClickDelete}>
                    Xóa
                </div>
            </div>
        </div>
    )
}

export default ItemContainer;

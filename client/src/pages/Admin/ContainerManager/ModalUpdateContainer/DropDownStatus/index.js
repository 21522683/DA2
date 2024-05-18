import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import styles from './DropDownStatus.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);


function DropDownStatus({ handleSelectOptionStatus }) {

    const listContainers = useSelector(state => state.containerManagement.containersList);
    const indexSelected = useSelector(state => state.containerManagement.indexSelected);
    const itemSelected = listContainers[indexSelected];

    const [selectedOption, setSelectedOption] = useState(itemSelected.trangThai === true ? "Đang sử dụng" : "Đang trống");
    const [showOption, setShowOption] = useState(false);

    const handleClickOption2 = () => {
        setSelectedOption('Đang trống');
        setShowOption(false);
        handleSelectOptionStatus('Đang trống');
    }

    const handleClickOption3 = () => {
        setSelectedOption('Đang sử dụng');
        setShowOption(false);
        handleSelectOptionStatus('Đang sử dụng');
    }

    return (
        <div className={cx("dropdown")}>
            <div className={cx('dropdown_selected')} onClick={() => setShowOption(!showOption)}>
                <span className={cx('text_selected')}>{selectedOption}</span>
                {
                    showOption ? (<FiChevronDown className={cx('icon_select')} />) : (<FiChevronUp className={cx('icon_select')} />)
                }

            </div>
            {
                showOption && (
                    <div className={cx("dropdown__content")}>
                        <div className={cx('dropdown_option')} onClick={handleClickOption2}>
                            <span className={cx('text_dropdown')}>Đang trống</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption3}>
                            <span className={cx('text_dropdown')}>Đang sử dụng</span>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default DropDownStatus;

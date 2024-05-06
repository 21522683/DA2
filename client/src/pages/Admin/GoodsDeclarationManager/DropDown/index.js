import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import styles from './DropDown.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const cx = classNames.bind(styles);
function Dropdown({handleSelectOption}) {
    const [selectedOption, setSelectedOption] = useState('Tất cả');
    const[showOption, setShowOption] = useState(false);

    const handleClickOption1 = () => {
        setSelectedOption('Tất cả');
        setShowOption(false);
        handleSelectOption('Tất cả');
    }
    const handleClickOption2 = () => {
        setSelectedOption('Chưa tạo hóa đơn');
        setShowOption(false);
        handleSelectOption('Chưa tạo hóa đơn');
    }

    const handleClickOption3 = () => {
        setSelectedOption('Đã tạo hóa đơn');
        setShowOption(false);
        handleSelectOption('Đã tạo hóa đơn');
    }

    return (
        <div className={cx("dropdown")}>
            <div className={cx('dropdown_selected')} onClick={() => setShowOption(!showOption)}>
                <span className={cx('text_selected')}>{selectedOption}</span>
                <FiChevronDown className={cx('icon_select')} />
            </div>
            {
                showOption && (
                    <div className={cx("dropdown__content")}>
                        <div className={cx('dropdown_option')} onClick={handleClickOption1}>
                            <span className={cx('text_dropdown')}>Tất cả</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption2}>
                            <span className={cx('text_dropdown')}>Chưa tạo hóa đơn</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption3}>
                            <span className={cx('text_dropdown')}>Đã tạo hóa đơn</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Dropdown;

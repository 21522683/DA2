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
        setSelectedOption('Đã xét duyệt');
        setShowOption(false);
        handleSelectOption('Đã xét duyệt');
    }

    const handleClickOption3 = () => {
        setSelectedOption('Chờ xét duyệt');
        setShowOption(false);
        handleSelectOption('Chờ xét duyệt');
    }

    const handleClickOption4 = () => {
        setSelectedOption('Đã bị hủy');
        setShowOption(false);
        handleSelectOption('Đã bị hủy');
    }

    return (
        <div className={cx("dropdown")}>
            <div className={cx('dropdown_selected')} onClick={() => setShowOption(!showOption)}>
                <span className={cx('text_selected')}>{selectedOption}</span>
                {
                    showOption ? ( <FiChevronDown className={cx('icon_select')} />) : ( <FiChevronUp className={cx('icon_select')} />)
                }
            </div>
            {
                showOption && (
                    <div className={cx("dropdown__content")}>
                        <div className={cx('dropdown_option')} onClick={handleClickOption1}>
                            <span className={cx('text_dropdown')}>Tất cả</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption2}>
                            <span className={cx('text_dropdown')}>Đã xét duyệt</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption3}>
                            <span className={cx('text_dropdown')}>Chờ xét duyệt</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption4}>
                            <span className={cx('text_dropdown')}>Đã bị hủy</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Dropdown;

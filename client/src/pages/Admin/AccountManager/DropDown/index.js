import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from './DropDown.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const cx = classNames.bind(styles);
const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState('Tất cả');
    const[showOption, setShowOption] = useState(false);


    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setShowOption(false);
    };

    return (
        <div className={cx("dropdown")}>
            <div className={cx('dropdown_selected')} onClick={() => setShowOption(!showOption)}>
                <span className={cx('text_selected')}>{selectedOption}</span>
                <FiChevronDown className={cx('icon_select')} />
            </div>
            {
                showOption && (
                    <div className={cx("dropdown__content")}>
                        <div className={cx('dropdown_option')} onClick={() => handleSelectOption('Tất cả')}>
                            <span className={cx('text_dropdown')}>Tất cả</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={() => handleSelectOption('Đang hoạt động')}>
                            <span className={cx('text_dropdown')}>Đang hoạt động</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={() => handleSelectOption('Đang bị khóa')}>
                            <span className={cx('text_dropdown')}>Đang bị khóa</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={() => handleSelectOption('Chờ xét duyệt')}>
                            <span className={cx('text_dropdown')}>Chờ xét duyệt</span>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Dropdown;

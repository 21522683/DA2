import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import styles from './DropDown.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const cx = classNames.bind(styles);
function Dropdown({ handleSelectOption }) {
    const [selectedOption, setSelectedOption] = useState('Đang trống');
    const [showOption, setShowOption] = useState(false);

    const handleClickOption2 = () => {
        setSelectedOption('Đang trống');
        setShowOption(false);
        handleSelectOption('Đang trống');
    }

    const handleClickOption3 = () => {
        setSelectedOption('Đã sử dụng');
        setShowOption(false);
        handleSelectOption('Đã sử dụng');
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
                            <span className={cx('text_dropdown')}>Đã sử dụng</span>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Dropdown;

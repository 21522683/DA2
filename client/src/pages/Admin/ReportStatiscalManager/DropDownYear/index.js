import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from './DropDownYear.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const cx = classNames.bind(styles);

function DropDownYear({ handleSelectOption }) {
    const [selectedOption, setSelectedOption] = useState('Tất cả');
    const [showOption, setShowOption] = useState(false);

    const handleClickOption1 = () => {
        setSelectedOption('Tất cả');
        setShowOption(false);
        handleSelectOption('Tất cả');
    }
    const handleClickOption2 = () => {
        setSelectedOption('Năm 2024');
        setShowOption(false);
        handleSelectOption('2024');
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
                        <div className={cx('dropdown_option')} onClick={handleClickOption1}>
                            <span className={cx('text_dropdown')}>Tất cả</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption2}>
                            <span className={cx('text_dropdown')}>Năm 2024</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default DropDownYear;

import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import styles from './DropDown.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const cx = classNames.bind(styles);
function Dropdown({handleSelectOption}) {
    const [selectedOption, setSelectedOption] = useState('Chọn dịch vụ');
    const[showOption, setShowOption] = useState(false);

    const handleClickOption1 = () => {
        setSelectedOption('Chọn dịch vụ');
        setShowOption(false);
        handleSelectOption('Chọn dịch vụ');
    }
    const handleClickOption2 = () => {
        setSelectedOption('Nhập khẩu');
        setShowOption(false);
        handleSelectOption('Nhập khẩu');
    }

    const handleClickOption3 = () => {
        setSelectedOption('Xuất khẩu');
        setShowOption(false);
        handleSelectOption('Xuất khẩu');
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
                            <span className={cx('text_dropdown')}>Chọn dịch vụ</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption2}>
                            <span className={cx('text_dropdown')}>Nhập khẩu</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption3}>
                            <span className={cx('text_dropdown')}>Xuất khẩu</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Dropdown;

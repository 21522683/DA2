import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from './DropdownVerify.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const cx = classNames.bind(styles);
function DropdownVerify({handleSelectOptionVerify}) {
    const [selectedOption, setSelectedOption] = useState('Tất cả');
    const[showOption, setShowOption] = useState(false);

    const handleClickOption1 = () => {
        setSelectedOption('Tất cả');
        setShowOption(false);
        handleSelectOptionVerify('Tất cả');
    }
    const handleClickOption2 = () => {
        setSelectedOption('Chưa xác minh');
        setShowOption(false);
        handleSelectOptionVerify('Chưa xác minh');
    }

    const handleClickOption3 = () => {
        setSelectedOption('Chờ xác minh');
        setShowOption(false);
        handleSelectOptionVerify('Chờ xác minh');
    }

    const handleClickOption4 = () => {
        setSelectedOption('Đã xác minh');
        setShowOption(false);
        handleSelectOptionVerify('Đã xác minh');
    }
    return (
        <div className={cx("dropdown")}>
            <div className={cx('dropdown_selected')} onClick={() => setShowOption(!showOption)}>
                <span className={cx('text_selected')}>{selectedOption}</span>
                {
                    showOption? (<FiChevronDown className={cx('icon_select')} />) : (<FiChevronUp className={cx('icon_select')} />)
                }
            </div>
            {
                showOption && (
                    <div className={cx("dropdown__content")}>
                        <div className={cx('dropdown_option')} onClick={handleClickOption1}>
                            <span className={cx('text_dropdown')}>Tất cả</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption2}>
                            <span className={cx('text_dropdown')}>Chưa xác minh</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption3}>
                            <span className={cx('text_dropdown')}>Chờ xác minh</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption4}>
                            <span className={cx('text_dropdown')}>Đã xác minh</span>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default DropdownVerify;

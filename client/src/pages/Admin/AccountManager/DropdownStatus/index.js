import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from './DropdownStatus.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const cx = classNames.bind(styles);
function DropdownStatus({handleSelectOptionStatus}) {
    const [selectedOption, setSelectedOption] = useState('Tất cả');
    const[showOption, setShowOption] = useState(false);

    const handleClickOption1 = () => {
        setSelectedOption('Tất cả');
        setShowOption(false);
        handleSelectOptionStatus('Tất cả');
    }
    const handleClickOption2 = () => {
        setSelectedOption('Đang hoạt động');
        setShowOption(false);
        handleSelectOptionStatus('Đang hoạt động');
    }

    const handleClickOption3 = () => {
        setSelectedOption('Đang bị khóa');
        setShowOption(false);
        handleSelectOptionStatus('Đang bị khóa');
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
                            <span className={cx('text_dropdown')}>Đang hoạt động</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption3}>
                            <span className={cx('text_dropdown')}>Đang bị khóa</span>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default DropdownStatus;

import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from './DropDownMonth.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const cx = classNames.bind(styles);

function DropDownMonth({handleSelectOption}) {
    const [selectedOption, setSelectedOption] = useState('Tất cả');
    const[showOption, setShowOption] = useState(false);

    const handleClickOption1 = () => {
        setSelectedOption('Tất cả');
        setShowOption(false);
        handleSelectOption('Tất cả');
    }
    const handleClickOption2 = () => {
        setSelectedOption('Tháng 1');
        setShowOption(false);
        handleSelectOption('1');
    }

    const handleClickOption3 = () => {
        setSelectedOption('Tháng 2');
        setShowOption(false);
        handleSelectOption('2');
    }

    const handleClickOption4 = () => {
        setSelectedOption('Tháng 3');
        setShowOption(false);
        handleSelectOption('3');
    }

    const handleClickOption5 = () => {
        setSelectedOption('Tháng 4');
        setShowOption(false);
        handleSelectOption('4');
    }

    const handleClickOption6 = () => {
        setSelectedOption('Tháng 5');
        setShowOption(false);
        handleSelectOption('5');
    }

    const handleClickOption7 = () => {
        setSelectedOption('Tháng 6');
        setShowOption(false);
        handleSelectOption('6');
    }

    const handleClickOption8 = () => {
        setSelectedOption('Tháng 7');
        setShowOption(false);
        handleSelectOption('7');
    }

    const handleClickOption9 = () => {
        setSelectedOption('Tháng 8');
        setShowOption(false);
        handleSelectOption('8');
    }

    const handleClickOption10 = () => {
        setSelectedOption('Tháng 9');
        setShowOption(false);
        handleSelectOption('9');
    }

    const handleClickOption11 = () => {
        setSelectedOption('Tháng 10');
        setShowOption(false);
        handleSelectOption('10');
    }

    const handleClickOption12 = () => {
        setSelectedOption('Tháng 11');
        setShowOption(false);
        handleSelectOption('11');
    }

    const handleClickOption13 = () => {
        setSelectedOption('Tháng 12');
        setShowOption(false);
        handleSelectOption('12');
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
                            <span className={cx('text_dropdown')}>Tháng 1</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption3}>
                            <span className={cx('text_dropdown')}>Tháng 2</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption4}>
                            <span className={cx('text_dropdown')}>Tháng 3</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption5}>
                            <span className={cx('text_dropdown')}>Tháng 4</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption6}>
                            <span className={cx('text_dropdown')}>Tháng 5</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption7}>
                            <span className={cx('text_dropdown')}>Tháng 6</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption8}>
                            <span className={cx('text_dropdown')}>Tháng 7</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption9}>
                            <span className={cx('text_dropdown')}>Tháng 8</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption10}>
                            <span className={cx('text_dropdown')}>Tháng 9</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption11}>
                            <span className={cx('text_dropdown')}>Tháng 10</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption12}>
                            <span className={cx('text_dropdown')}>Tháng 11</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption13}>
                            <span className={cx('text_dropdown')}>Tháng 12</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default DropDownMonth;

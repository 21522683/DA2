import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import styles from './DropDownType.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);


function DropDownType({ handleSelectOptionType }) {
    const listContainers = useSelector(state => state.containerManagement.containersList);
    const indexSelected = useSelector(state => state.containerManagement.indexSelected);
    const itemSelected = listContainers[indexSelected];

    const [selectedOption, setSelectedOption] = useState(itemSelected.loaiContainer.tenLoai);
    const [showOption, setShowOption] = useState(false);

    const handleClickOption2 = () => {
        setSelectedOption('TC (20 feet)');
        setShowOption(false);
        handleSelectOptionType('TC (20 feet)');
    }

    const handleClickOption3 = () => {
        setSelectedOption('TC (40 feet)');
        setShowOption(false);
        handleSelectOptionType('TC (40 feet)');
    }

    const handleClickOption4 = () => {
        setSelectedOption('TC (45 feet)');
        setShowOption(false);
        handleSelectOptionType('TC (45 feet)');
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
                            <span className={cx('text_dropdown')}>TC (20 feet)</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption3}>
                            <span className={cx('text_dropdown')}>TC (40 feet)</span>
                        </div>
                        <div className={cx('dropdown_option')} onClick={handleClickOption4}>
                            <span className={cx('text_dropdown')}>TC (45 feet)</span>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default DropDownType;

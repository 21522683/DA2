import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from './DropdownBanks.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);
const arrBanks = [
     "Agribank",
     "BIDV",
     "Vietcombank",
     "Vietinbank",
     "OCB",
     "ACB",
     "TPBank",
     "MSB",
     "Sacombank",
     "VPBank",
     "Techcombank",
     "MB",
     "Bac A Bank",
     "VIB",
     "SeABank",
     "HDBank",
     "BVBank",
     "SCB",
     "Viet A Bank",
     "SHB",
     "GPBank",
     "ABBank",
     "NCB",
     "Kienlongbank",
     "Vietbank",
     "Ocean Bank",
     "PGBank",
     "CBBank",
     "LPBank",
     "Bao Viet Bank",
     "PVcomBank",
     "DongA Bank",
     "Nam A Bank",
     "SAIGONBANK",
     "Eximbank"
];

function DropdownBanks({ handleSelectOptionBank }) {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.userManagement.currentUser);

    const [selectedOption, setSelectedOption] = useState(currentUser.infoVerify ? currentUser.infoVerify.nganHang :'Chọn ngân hàng');
    const [showOption, setShowOption] = useState(false);

    const handleClickOption = (index) => {
        setSelectedOption(arrBanks[index]);
        setShowOption(false);
        const value = arrBanks[index];
        handleSelectOptionBank(value);
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
                        {
                            arrBanks.map((item, index) => {
                                return (
                                    <div className={cx('dropdown_option')} onClick={() => handleClickOption(index)}>
                                        <span className={cx('text_dropdown')}>{item}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }

        </div>
    );
};

export default DropdownBanks;

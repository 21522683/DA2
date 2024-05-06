import React from 'react'
import styles from "./LayoutAdmin.module.scss";
import classNames from "classnames/bind";
import Footer from './Footer';
import SideBarAdmin from './SideBarAdmin';

const cx = classNames.bind(styles);

function LayoutAdmin({ children }) {
    return (
        <div>
            <div className={cx('container')} >
                <SideBarAdmin />
                <div className={cx('content')} >{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default LayoutAdmin

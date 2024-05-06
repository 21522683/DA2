import React from 'react'
import styles from "./LayoutUser.module.scss";
import classNames from "classnames/bind";
import Header from './Header';
import Footer from './Footer';

const cx = classNames.bind(styles);

function LayoutUser({children}) {
    return (
        <div>
            <Header />
            <div>
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default LayoutUser
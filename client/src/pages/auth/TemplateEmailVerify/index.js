import React, { useEffect, useState, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './TemplateEmailVerify.module.scss';
import NotFound from '../../Generals/NotFound';
import Images from '../../../assets/images/index';
import customAxios from '../../../utils/customAxios.js';
import baseUrl from '../../../utils/index.js';
const cx = classNames.bind(styles);

function TemplateEmailVerify() {
    const [validUrl, setValidUrl] = useState(null);
    const param = useParams();
    const verifyEmailUrl = async () => {
            try {
                const url = `${baseUrl}/user/registerUser/${param.tokenLinkVerifyEmail}`;
                const { data } = await customAxios.get(url);
                console.log(data);
                setValidUrl(true);
            } catch (error) {
                console.log(error);
                setValidUrl(false);
            }
        }
    
    useEffect(() => {
        verifyEmailUrl();
    }, []);
    
    return (
        <div>
            {validUrl && (
                <div className={cx('container')}>
                    <img src={Images.success} alt="success_img" className={cx('success_img')} />
                    <h1>Email đã được xác thực thành công</h1>
                    <Link to="/login">
                        <button className={cx('green_btn')}>Đăng nhập</button>
                    </Link>
                </div>
            )}
            {validUrl === false && <NotFound />}
        </div>
    );
}

export default TemplateEmailVerify;

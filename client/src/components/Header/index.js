import React from 'react'

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../assets/images';
const cx = classNames.bind(styles);


function Header (props) {
  return (
    <div className={cx('container')}>
      <img
        src={images.logo}
        className={cx('logo')}
      />

      <h1 className={cx('heading')}>
        {props.title}
      </h1>
      
    </div>
  )
}

export default Header;

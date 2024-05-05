import React from 'react'
import classNames from 'classnames/bind';
import styles from './DataInfo.module.scss';
const cx = classNames.bind(styles);

interface DataInfoProps {
    title: String;
    content: String;
}

function DataInfo ({title, content}) {
  return (
    <div className={cx('container')}>
        <p className={cx('title')}>
            {title}
        </p>
        <p className={cx('content')}>
            {content}
        </p>
    </div>
  )
}

export default DataInfo;

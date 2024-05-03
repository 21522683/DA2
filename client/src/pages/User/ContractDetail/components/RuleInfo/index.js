import React from 'react'
import classNames from 'classnames/bind';
import styles from './RuleInfo.module.scss';
const cx = classNames.bind(styles);

interface RuleInfoProps {
    title: String;
    content: String;
}

function RuleInfo ({title, content}) {
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

export default RuleInfo;

import React from 'react'
import classNames from 'classnames/bind';
import styles from './FileCard.module.scss';
const cx = classNames.bind(styles);

interface FieldCardProp {
    image: String;
    field: String;
}

function FieldCard ({image, field}) {
  return (
    <div className={cx('container')}>
        <img src={image} className={cx('image')}/>
        <h1 className={cx('field')}>
            {field}
        </h1>
    </div>
  )
}

export default FieldCard;

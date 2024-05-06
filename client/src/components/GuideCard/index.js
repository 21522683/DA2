import React from 'react'
import classNames from 'classnames/bind';
import styles from './GuideCard.module.scss';
import images from '../../assets/images';
const cx = classNames.bind(styles);

interface GuideCardProp {
    icon: String;
    title: String;
    description: String;
    button: String;
}

function GuideCard ({icon, title, description, button}) {
  return (
    <div className={cx('container')}>
        <>
        <div className={cx('topContainer')}>
            <img src={icon} className={cx('icon')}/>
            <h1 className={cx('title')}>{title}</h1>
        </div>
        </>

        <>
        <p className={cx('description')}>{description}</p>
        </>

        <>
        <button className={cx('button')}>
          {button}
        </button>
        </>
    </div>
  )
}

export default GuideCard;

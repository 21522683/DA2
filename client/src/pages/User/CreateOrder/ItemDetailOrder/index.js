import React, { useRef, useState } from 'react'
import classNames from "classnames/bind";
import styles from './ItemDetailOrder.module.scss';
import Images from '../../../../assets/images/index';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextareaAutosize from 'react-textarea-autosize';
import { AiFillCloseCircle } from "react-icons/ai";


const cx = classNames.bind(styles);

function ItemDetailOrder() {
    const [sxDateFilter, setSXDateFilter] = useState(new Date());
    const [hsdDateFilter, setHSDDateFilter] = useState(new Date());
    const [showDetail, setShowDetail] = useState(false);
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);

    function selectFiles() {
        fileInputRef.current.click();
    }

    function onFileSelect(event) {
        const files = event.target.files;
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split("/")[0] !== "image") continue;
            if (!images.some((e) => e.name === files[i].name)) {
                const reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onload = () => {
                    setImages((prevImages) => [
                        ...prevImages,
                        {
                            name: files[i].name,
                            url: URL.createObjectURL(files[i]),
                            imageBase64: reader.result,
                        },
                    ]);
                };
            }
        }
    }

    function deleteImage(index) {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    }


    const handleClickIconShowDetail = () => {
        setShowDetail(!showDetail);
    }
    return (
        <>
            <div className={cx('item-list')}>
                <div style={{ display: 'flex' }}>
                    <img className={cx('image_hh')} src={Images.hanghoa} alt='hh' />
                    <div className={cx('container-info')}>
                        <span className={cx('name_goods')}>Thực phẩm chức năng abc</span>
                        <div className={cx('container-field')}>
                            <span className={cx('title')}>Lĩnh vực: </span>
                            <span className={cx('content')}>Y tế</span>
                        </div>
                        <span className={cx('description')}>Đây là thuốc không phải sản phẩm thay thế thuốc chữa bệnh</span>
                    </div>
                </div>

                {
                    showDetail ? (<IoIosArrowUp className={cx('icon_detail')} onClick={handleClickIconShowDetail} />) : (<IoIosArrowDown className={cx('icon_detail')} onClick={handleClickIconShowDetail} />)
                }

            </div>

            {
                showDetail && (
                    <div className={cx('detail_goods')}>
                        <div className={cx('container_hh')}>
                            <span className={cx('title')}>Tên hàng hóa:</span>
                            <input className={cx('content')} />
                        </div>

                        <div className={cx('container_hh')}>
                            <span className={cx('title')}>Lĩnh vực:</span>
                            <input className={cx('content')} />
                        </div>
                        <div className={cx('container_hh')}>
                            <span className={cx('title')}>Nhà cung cấp:</span>
                            <input className={cx('content')} />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className={cx('container_hh2')}>
                                <span className={cx('title')}>Số lượng:</span>
                                <input className={cx('content')} />
                            </div>
                            <div className={cx('container_hh2')}>
                                <span className={cx('title')}>Khối lượng:</span>
                                <input className={cx('content')} />
                            </div>
                            <div className={cx('container_hh2')}>
                                <span className={cx('title')}>Đơn vị tính:</span>
                                <span className={cx('content')}>kg</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className={cx('container_hh2')}>
                                <span className={cx('title')}>Giá bán:</span>
                                <input className={cx('content')} />
                            </div>
                            <div className={cx('container_hh2')}>
                                <span className={cx('title')}>Ngày SX:</span>
                                <DatePicker className={cx('content')} selected={sxDateFilter} onChange={(date) => setSXDateFilter(date)} />
                            </div>
                            <div className={cx('container_hh2')}>
                                <span className={cx('title')}>HSD:</span>
                                <DatePicker className={cx('content')} selected={hsdDateFilter} onChange={(date) => setHSDDateFilter(date)} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className={cx('container_hh2')}>
                                <span className={cx('title')}>Chiều dài (m):</span>
                                <input className={cx('content')} />
                            </div>
                            <div className={cx('container_hh2')}>
                                <span className={cx('title')}>Chiều rộng (m):</span>
                                <input className={cx('content')} />
                            </div>
                            <div className={cx('container_hh2')}>
                                <span className={cx('title')}>Chiều cao (m):</span>
                                <input className={cx('content')} />
                            </div>
                        </div>


                        <div className={cx('container_hh')}>
                            <span className={cx('title')}>Hình ảnh:</span>
                            <div style={{
                                width: "98%",
                                height: "auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                flexWrap: "wrap",
                                padding: "20px 12px",
                                marginLeft: '50px',
                                border: '1px solid #cccccc',
                                borderRadius: '4px'
                            }}>
                                {
                                    images.map((item, index) => {
                                        return (
                                            <div className={cx("images-list")} key={index}>
                                                <img key={index} className={cx('image_hh')} src={item.url} alt='hh' />
                                                <AiFillCloseCircle
                                                    className={cx("delete-img")}
                                                    onClick={() => deleteImage(index)}
                                                />
                                            </div>

                                        )
                                    })
                                }
                                <div className={cx('btn_choose_img')} onClick={selectFiles}>
                                    Chọn ảnh
                                </div>
                                <input
                                    type="file"
                                    name="file"
                                    multiple
                                    hidden
                                    ref={fileInputRef}
                                    onChange={onFileSelect}
                                />
                            </div>

                        </div>
                        <div className={cx('container_hh')}>
                            <span className={cx('title')}>Mô tả:</span>
                            <TextareaAutosize className={cx('content')} minRows={1} placeholder='Mô tả của hàng hóa' />
                        </div>

                        <div className={cx('container_button')}>
                            <div className={cx('btn_update')}>Cập nhật</div>
                            <div className={cx('btn_delete')}>Xóa</div>
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default ItemDetailOrder

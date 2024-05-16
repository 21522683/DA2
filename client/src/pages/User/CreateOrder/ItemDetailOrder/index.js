import React, { useEffect, useRef, useState } from 'react'
import classNames from "classnames/bind";
import styles from './ItemDetailOrder.module.scss';
import Images from '../../../../assets/images/index';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextareaAutosize from 'react-textarea-autosize';
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { deleteGoods, setIndexGoodsSelected, setIsOpenMessageBox, setListCreateGoods, updateGoods } from '../../../../redux/slices/orderSlice';
import { toast } from 'react-toastify';


const cx = classNames.bind(styles);

function ItemDetailOrder({ item, index }) {

    const dispatch = useDispatch();

    const [tenBD, setTenBD] = useState(item.nameHH);
    const [linhVucBD, setLinhVucBD] = useState(item.linhVuc);
    const [moTaBD, setMoTaBD] = useState(item.moTa);
    const [hinhBD, setHinhBD] = useState(item.hinhAnh[0].url);

    const [sxDateFilter, setSXDateFilter] = useState(item.ngaySX);
    const [hsdDateFilter, setHSDDateFilter] = useState(item.HSD);
    const [images, setImages] = useState(item.hinhAnh);
    const [nameHH, setNameHH] = useState(item.tenHH);
    const [linhVuc, setLinhVuc] = useState(item.linhVuc);
    const [NCC, setNCC] = useState(item.nhaCungCap);
    const [quantity, setQuantity] = useState(item.soluong);
    const [weight, setWeight] = useState(item.khoiLuong);
    const [price, setPrice] = useState(item.giaBan);
    const [moTa, setMoTa] = useState(item.moTa);
    const [dai, setDai] = useState(item.chieuDai);
    const [rong, setRong] = useState(item.chieuRong);
    const [cao, setCao] = useState(item.chieuCao);


    const [showDetail, setShowDetail] = useState(false);
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

    const [textValidateNameHH, setTextValidateNameHH] = useState('');
    const [textValidateLinhVuc, setTextValidateLinhVuc] = useState('');
    const [textValidateNCC, setTextValidateNCC] = useState('');
    const [textValidateQuantity, setTextValidateQuantity] = useState('');
    const [textValidateWeight, setTextValidateWeight] = useState('');
    const [textValidatePrice, setTextValidatePrice] = useState('');
    const [textValidateHSD, setTextValidateHSD] = useState('');
    const [textValidateDai, setTextValidateDai] = useState('');
    const [textValidateRong, setTextValidateRong] = useState('');
    const [textValidateCao, setTextValidateCao] = useState('');
    const [textValidateImages, setTextValidateImages] = useState('');
    const [textValidateMoTa, setTextValidateMoTa] = useState('');

    const validateNameHH = (value) => {
        if (value.trim().length === 0 || value.trim() === '') {
            setTextValidateNameHH('* Vui lòng nhập tên hàng hóa');
            return false;
        } else {
            setTextValidateNameHH('');
            return true;
        }
    }
    const validateLinhVuc = (value) => {
        if (value.trim().length === 0 || value.trim() === '') {
            setTextValidateLinhVuc('* Vui lòng nhập lĩnh vực của hàng hóa');
            return false;
        } else {
            setTextValidateLinhVuc('');
            return true;
        }
    }
    const validateNCC = (value) => {
        if (value.trim().length === 0 || value.trim() === '') {
            setTextValidateNCC('* Vui lòng nhập tên của nhà cung cấp hàng hóa');
            return false;
        } else {
            setTextValidateNCC('');
            return true;
        }
    }
    const validateQuantity = (value) => {
        if (value.toString().trim().length === 0 || value.toString().trim() === '') {
            setTextValidateQuantity('* Vui lòng nhập số lượng của hàng hóa');
            return false;
        } else {
            if (value <= 0) {
                setTextValidateQuantity('* Vui lòng nhập số lượng lớn hơn 0');
                return false;
            }
            else {
                setTextValidateQuantity('');
                return true;
            }
        }
    }
    const validateWeight = (value) => {
        if (value.toString().trim().length === 0 || value.toString().trim() === '') {
            setTextValidateWeight('* Vui lòng nhập khối lượng của hàng hóa');
            return false;
        } else {
            if (value <= 0) {
                setTextValidateWeight('* Vui lòng nhập khối lượng lớn hơn 0');
                return false;
            }
            else {
                setTextValidateWeight('');
                return true;
            }
        }
    }
    const validatePrice = (value) => {
        if (value.toString().trim().length === 0 || value.toString().trim() === '') {
            setTextValidatePrice('* Vui lòng nhập giá bán của hàng hóa');
            return false;
        } else {
            if (value <= 0) {
                setTextValidatePrice('* Giá bán không được nhỏ hơn 0');
                return false;
            }
            else {
                setTextValidatePrice('');
                return true;
            }
        }
    }
    const validateHSD = (nsx, hsd) => {
        if (nsx.getTime() >= hsd.getTime()) {
            setTextValidateHSD('* Vui lòng chọn hạn sử dụng sau ngày sản xuất');
            return false;
        } else {
            setTextValidateHSD('');
            return true;
        }
    }
    const validateDai = (value) => {
        if (value.toString().trim().length === 0 || value.toString().trim() === '') {
            setTextValidateDai('* Vui lòng nhập chiều dài (mét) của hàng hóa');
            return false;
        } else {
            if (value <= 0) {
                setTextValidateDai('* Vui lòng nhập chiều dài (mét) lớn hơn 0');
                return false;
            }
            else {
                setTextValidateDai('');
                return true;
            }
        }
    }
    const validateRong = (value) => {
        if (value.toString().trim().length === 0 || value.toString().trim() === '') {
            setTextValidateRong('* Vui lòng nhập chiều rộng (mét) của hàng hóa');
            return false;
        } else {
            if (value <= 0) {
                setTextValidateRong('* Vui lòng nhập chiều rộng (mét) lớn hơn 0');
                return false;
            }
            else {
                setTextValidateRong('');
                return true;
            }
        }
    }
    const validateCao = (value) => {
        if (value.toString().trim().length === 0 || value.toString().trim() === '') {
            setTextValidateCao('* Vui lòng nhập chiều cao (mét) của hàng hóa');
            return false;
        } else {
            if (value <= 0) {
                setTextValidateCao('* Vui lòng nhập chiều cao (mét) lớn hơn 0');
                return false;
            }
            else {
                setTextValidateCao('');
                return true;
            }
        }
    }
    const validateMoTa = (value) => {
        if (value.trim().length === 0 || value.trim() === '') {
            setTextValidateMoTa('* Vui lòng nhập mô tả của hàng hóa');
            return false;
        } else {
            setTextValidateMoTa('');
            return true;
        }
    }
    const validateImages = (list) => {
        if (list.length === 0) {
            setTextValidateImages('* Vui lòng chọn hình ảnh của hàng hóa');
            return false;
        } else {
            setTextValidateImages('');
            return true;
        }
    }

    const handleClickUpdate = () => {
        const flagNameHH = validateNameHH(nameHH);
        const flagLinhVuc = validateLinhVuc(linhVuc);
        const flagNCC = validateNCC(NCC);
        const flagQuantity = validateQuantity(quantity);
        const flagWeight = validateWeight(weight);
        const flagPrice = validatePrice(price);
        const flagHSD = validateHSD(sxDateFilter, hsdDateFilter);
        const flagDai = validateDai(dai);
        const flagRong = validateRong(rong);
        const flagCao = validateCao(cao);
        const flagImages = validateImages(images);
        const flagMoTa = validateMoTa(moTa);
        const flag = flagNameHH && flagLinhVuc && flagNCC && flagQuantity && flagWeight && flagPrice && flagHSD && flagDai && flagRong && flagCao && flagImages && flagMoTa;
        if (flag) {
            const goods = {
                tenHH: nameHH,
                hinhAnh: images,
                linhVuc: linhVuc,
                soluong: quantity,
                moTa: moTa,
                donViTinh: "kg",
                khoiLuong: weight,
                ngaySX: sxDateFilter,
                HSD: hsdDateFilter,
                chieuDai: dai,
                chieuRong: rong,
                chieuCao: cao,
                nhaCungCap: NCC,
                giaBan: price,
            }

            dispatch(updateGoods(index, goods));
            toast.success("Cập nhật hàng hóa thành công", {
                position: "top-right"
            });
            setTenBD(nameHH);
            setLinhVucBD(linhVuc);
            setMoTaBD(moTa);
            setHinhBD(images[0].url);
        }
    }
    const handleClickDelete = () => {
        dispatch(setIndexGoodsSelected(index));
        dispatch(setIsOpenMessageBox(true));
    }

    useEffect(() => {
        setTenBD(item.tenHH);
        setLinhVucBD(item.linhVuc);
        setMoTaBD(item.moTa);
        setHinhBD(item.hinhAnh[0].url);
    }, []);

    return (
        <>
            <div className={cx('item-list')}>
                <div style={{ display: 'flex' }}>
                    <img className={cx('image_hh')} src={hinhBD} alt='hh' />
                    <div className={cx('container-info')}>
                        <span className={cx('name_goods')}>{tenBD}</span>
                        <div className={cx('container-field')}>
                            <span className={cx('title')}>Lĩnh vực: </span>
                            <span className={cx('content')}>{linhVucBD}</span>
                        </div>
                        <span className={cx('description')}>{moTaBD}</span>
                    </div>
                </div>

                {
                    showDetail ? (<IoIosArrowUp className={cx('icon_detail')} onClick={handleClickIconShowDetail} />) : (<IoIosArrowDown className={cx('icon_detail')} onClick={handleClickIconShowDetail} />)
                }

            </div>

            {
                showDetail && (
                    <div className={cx('detail_goods')}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Tên hàng hóa:</span>
                                <input className={cx('content')} value={nameHH} onChange={(e) => setNameHH(e.target.value)} />
                            </div>
                            <span style={{ color: 'red', fontSize: '10px' }}>{textValidateNameHH}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Lĩnh vực:</span>
                                <input className={cx('content')} value={linhVuc} onChange={(e) => setLinhVuc(e.target.value)} />
                            </div>
                            <span style={{ color: 'red', fontSize: '10px' }}>{textValidateLinhVuc}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Nhà cung cấp:</span>
                                <input className={cx('content')} value={NCC} onChange={(e) => setNCC(e.target.value)} />
                            </div>
                            <span style={{ color: 'red', fontSize: '10px' }}>{textValidateNCC}</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className={cx('container_hh2')}>
                                    <span className={cx('title')}>Số lượng:</span>
                                    <input className={cx('content')} type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                </div>
                                <span style={{ color: 'red', fontSize: '10px' }}>{textValidateQuantity}</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className={cx('container_hh2')}>
                                    <span className={cx('title')}>Khối lượng:</span>
                                    <input className={cx('content')} type='number' value={weight} onChange={(e) => setWeight(e.target.value)} />
                                </div>
                                <span style={{ color: 'red', fontSize: '10px' }}>{textValidateWeight}</span>
                            </div>
                            <div className={cx('container_hh2')}>
                                <span className={cx('title')}>Đơn vị tính:</span>
                                <span className={cx('content')}>kg</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className={cx('container_hh2')}>
                                    <span className={cx('title')}>Giá bán:</span>
                                    <input className={cx('content')} type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <span style={{ color: 'red', fontSize: '10px' }}>{textValidatePrice}</span>
                            </div>
                            <div className={cx('container_hh2')}>
                                <span className={cx('title')}>Ngày SX:</span>
                                <DatePicker className={cx('content')} selected={sxDateFilter} onChange={(date) => setSXDateFilter(date)} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className={cx('container_hh2')}>
                                    <span className={cx('title')}>HSD:</span>
                                    <DatePicker className={cx('content')} selected={hsdDateFilter} onChange={(date) => setHSDDateFilter(date)} />
                                </div>
                                <span style={{ color: 'red', fontSize: '10px' }}>{textValidateHSD}</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className={cx('container_hh2')}>
                                    <span className={cx('title')}>Chiều dài (m):</span>
                                    <input className={cx('content')} type='number' value={dai} onChange={(e) => setDai(e.target.value)} />
                                </div>
                                <span style={{ color: 'red', fontSize: '10px' }}>{textValidateDai}</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className={cx('container_hh2')}>
                                    <span className={cx('title')}>Chiều rộng (m):</span>
                                    <input className={cx('content')} type='number' value={rong} onChange={(e) => setRong(e.target.value)} />
                                </div>
                                <span style={{ color: 'red', fontSize: '10px' }}>{textValidateRong}</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className={cx('container_hh2')}>
                                    <span className={cx('title')}>Chiều cao (m):</span>
                                    <input className={cx('content')} type='number' value={cao} onChange={(e) => setCao(e.target.value)} />
                                </div>
                                <span style={{ color: 'red', fontSize: '10px' }}>{textValidateCao}</span>
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
                        <span style={{ color: 'red', fontSize: '10px' }}>{textValidateImages}</span>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={cx('container_hh')}>
                                <span className={cx('title')}>Mô tả:</span>
                                <TextareaAutosize className={cx('content')} minRows={1} placeholder='Mô tả của hàng hóa' value={moTa} onChange={(e) => setMoTa(e.target.value)} />
                            </div>
                            <span style={{ color: 'red', fontSize: '10px' }}>{textValidateMoTa}</span>
                        </div>


                        <div className={cx('container_button')}>
                            <div className={cx('btn_update')} onClick={handleClickUpdate}>Cập nhật</div>
                            <div className={cx('btn_delete')} onClick={(handleClickDelete)}>Xóa</div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ItemDetailOrder

import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind";
import styles from './GoodsDeclarationManager.module.scss'
import SearchBar from './SearchBar';
import Dropdown from './DropDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DetailGoodsDeclaration from './DetailGoodsDeclaration';
import { useDispatch, useSelector } from 'react-redux';
import { setIndexGoodDeclarationSelected, setIsOpenModalDetail, setListGoodsDeclaration } from '../../../redux/slices/goodsDeclarationSlice';

const cx = classNames.bind(styles);

const list = [
    {
        donHang: {
            loaiHinh: "Xuất khẩu",
            hangHoa: [
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 1",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 2",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 3",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 4",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
            ],
            cangDi: "Cảng Đôn An Sài Gòn",
            cangDen: "Cảng Hà nội",
            ngayDiDuKien: "28/01/2024",
            ngayDenDuKien: "03/05/2024",
            user: {
                diaChi: 'Thành phố Hồ Chí Minh',
                tenDoanhNghiep: 'Công ty thương mại cổ phần A',
                stk: '1020637570',
                nganHang: 'VIETCOMBANK',
                soFAX: '024.98568476847',
                status: "Đang hoạt động",
                representative: {
                    hoten: 'Phan Trọng Tính',
                    email: "phantrongtinh1508@gmail.com",
                    password: "phantrongtinh",
                    soDienThoai: "0379361210",
                }
            },
            ngayTaoDon: "29/04/2024",
            trangThaiXetDuyet: false,
            trangThaiHuy: false,
        },
        ngayTao: '11/02/2024',
        trangThai: false,
    },
    {
        donHang: {
            loaiHinh: "Nhập khẩu",
            hangHoa: [
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 1",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 2",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 3",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 4",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
            ],
            cangDi: "Cảng Đôn An Sài Gòn",
            cangDen: "Cảng Hà nội",
            ngayDiDuKien: "28/01/2024",
            ngayDenDuKien: "03/05/2024",
            user: {
                diaChi: 'Thành phố Hồ Chí Minh',
                tenDoanhNghiep: 'Công ty thương mại cổ phần A',
                stk: '1020637570',
                nganHang: 'VIETCOMBANK',
                soFAX: '024.98568476847',
                status: "Đang hoạt động",
                representative: {
                    hoten: 'Phan Trọng Tính',
                    email: "phantrongtinh1508@gmail.com",
                    password: "phantrongtinh",
                    soDienThoai: "0379361210",
                }
            },
            ngayTaoDon: "30/04/2024",
            trangThaiXetDuyet: true,
            trangThaiHuy: false,
        },
        ngayTao: '17/04/2024',
        trangThai: false,
    },
    {
        donHang: {
            loaiHinh: "Xuất khẩu",
            hangHoa: [
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 1",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 2",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 3",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 4",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
            ],
            cangDi: "Cảng Đôn An Sài Gòn",
            cangDen: "Cảng Hà nội",
            ngayDiDuKien: "28/01/2024",
            ngayDenDuKien: "03/05/2024",
            user: {
                diaChi: 'Thành phố Hồ Chí Minh',
                tenDoanhNghiep: 'Công ty thương mại cổ phần A',
                stk: '1020637570',
                nganHang: 'VIETCOMBANK',
                soFAX: '024.98568476847',
                status: "Đang hoạt động",
                representative: {
                    hoten: 'Phan Trọng Tính',
                    email: "phantrongtinh1508@gmail.com",
                    password: "phantrongtinh",
                    soDienThoai: "0379361210",
                }
            },
            ngayTaoDon: "02/05/2024",
            trangThaiXetDuyet: false,
            trangThaiHuy: false,
        },
        ngayTao: '22/04/2024',
        trangThai: true,
    },
    {
        donHang: {
            loaiHinh: "Xuất khẩu",
            hangHoa: [
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 1",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 2",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 3",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
                {
                    tenHH: "Thuốc trị cảm ho sốt Para... 4",
                    hinhAnh: [
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        },
                        {
                            url: "https://iso-logistics.vn/wp-content/uploads/2021/11/CACH-TINH-CUOC-CHO-HANG-AIR-CARGO-HINH-ANH.jpg",
                        }
                    ],
                    linhVuc: {
                        tenLinhVuc: "Y tế"
                    },
                    soluong: 1244,
                    moTa: "Mô tả của sản phẩm phẩm.......(VD: Dây là sản phẩm của bộ y tế đã có chứng nhận, một loại thuốc trị cảm dành cho người tiêu dùng trên 16 tuổi, thuốc không có tác dụng phụ và không thể thay thế thuốc chữa bệnh)",
                    donViTinh: "kg",
                    khoiLuong: 1.44,
                    ngaySX: "11/01/2023",
                    HSD: "11/01/2027",
                    chieuDai: 0.23,
                    chieuRong: 0.14,
                    chieuCao: 0.02,
                    nhaCungCap: "Công ty cổ phần Dược phẩm ABNC",
                },
            ],
            cangDi: "Cảng Đôn An Sài Gòn",
            cangDen: "Cảng Hà nội",
            ngayDiDuKien: "28/01/2024",
            ngayDenDuKien: "03/05/2024",
            user: {
                diaChi: 'Thành phố Hồ Chí Minh',
                tenDoanhNghiep: 'Công ty thương mại cổ phần A',
                stk: '1020637570',
                nganHang: 'VIETCOMBANK',
                soFAX: '024.98568476847',
                status: "Đang hoạt động",
                representative: {
                    hoten: 'Phan Trọng Tính',
                    email: "phantrongtinh1508@gmail.com",
                    password: "phantrongtinh",
                    soDienThoai: "0379361210",
                }
            },
            ngayTaoDon: "04/05/2024",
            trangThaiXetDuyet: false,
            trangThaiHuy: false,
        },
        ngayTao: '12/09/2024',
        trangThai: true,
    },
];

function GoodsDeclarationManager() {

    const dispatch = useDispatch();
    const listGoodsDeclaration = useSelector(state => state.goodsDeclarationManagement.goodsDeclarationsList);
    const isOpenModalDetail = useSelector(state => state.goodsDeclarationManagement.isOpenModalDetail);

    useEffect(() => {
        dispatch(setListGoodsDeclaration(list));
    }, []);


    const [startDateFilter, setStartDateFilter] = useState(new Date());

    const handleChangeInputSearch = (value) => {

    }
    const handleChangeFilter = (value) => {

    }

    const handleClickSeeDetail = (index) => {
        dispatch(setIndexGoodDeclarationSelected(index));
        dispatch(setIsOpenModalDetail(true));
    }

    return (
        <div className={cx('container_main')}>
            {
                isOpenModalDetail && <DetailGoodsDeclaration />
            }
            <div className={cx('header')}>
                <span className={cx('title_header')}>QUẢN LÝ KÊ KHAI HÀNG HÓA</span>
                <div className={cx('container_filter')}>
                    <div className={cx('container_search')}>
                        <span className={cx('title_search')}>Tìm kiếm</span>
                        <SearchBar handleChangeInput={handleChangeInputSearch} />
                    </div>

                    <div className={cx('container_dropdown')}>
                        <span className={cx('title_search')}>Ngày tạo</span>
                        <DatePicker className={cx('date_picker')} selected={startDateFilter} onChange={(date) => setStartDateFilter(date)} />
                    </div>

                    <div className={cx('container_dropdown')}>
                        <span className={cx('title_search')}>Trạng thái</span>
                        <Dropdown handleSelectOption={handleChangeFilter} />
                    </div>
                </div>
            </div>

            <div className={cx('body_container')}>
                <table className={cx('table_main')}>
                    <thead>
                        <tr className={cx('header_table')}>
                            <th className={cx('item_header_table')}>Mã kê khai</th>
                            <th className={cx('item_header_table')}>Mã đơn hàng</th>
                            <th className={cx('item_header_table')}>Ngày tạo</th>
                            <th className={cx('item_header_table')}>Trạng thái</th>
                            <th className={cx('item_header_table')}>Thao tác</th>
                        </tr>
                    </thead>

                    <tbody className={cx('body_table')}>
                        {
                            listGoodsDeclaration.map((item, index) => {
                                return (
                                    <tr className={cx('row_table')} key={index}>
                                        <td className={cx('item_row_table')}>KK001</td>
                                        <td className={cx('item_row_table')}>DH001</td>
                                        <td className={cx('item_row_table')}>{item.ngayTao}</td>
                                        {
                                            item.trangThai ? (<td className={cx(['item_row_table', 'active'])}>Đã tạo hóa đơn</td>) : (<td className={cx(['item_row_table', 'lock'])}>Chưa tạo hóa đơn</td>)
                                        }
                                        <td className={cx('item_row_table')} onClick={() => handleClickSeeDetail(index)}>
                                            <span className={cx('text_row')}>Xem chi tiết</span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default GoodsDeclarationManager;

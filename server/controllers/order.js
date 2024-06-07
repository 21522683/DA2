import cloudinary from '../utils/cloudinary.js';
import { Goods, GoodsDeclaration, Order } from '../model/index.js';
import mongoose from 'mongoose';

const createOrderUser = async (req, res) => {
    try {
        const { loaiHinh, hangHoa, cangDi, cangDen, ngayDiDuKien, ngayDenDuKien, user } = req.body;

        const goods = [];
        for (const goodsData of hangHoa) {
            const imgBase64 = [];
            for (const img of goodsData.hinhAnh) {
                const uploadedImage = await cloudinary.uploader.upload(img.imageBase64);
                imgBase64.push({ url: uploadedImage.secure_url, public_id: uploadedImage.public_id });
            }
            const data = {
                tenHH: goodsData.tenHH,
                hinhAnh: imgBase64,
                soLuong: goodsData.soLuong,
                linhVuc: goodsData.linhVuc,
                moTa: goodsData.moTa,
                donViTinh: goodsData.donViTinh,
                khoiLuong: goodsData.khoiLuong,
                ngaySX: goodsData.ngaySX,
                HSD: goodsData.HSD,
                chieuDai: goodsData.chieuDai,
                chieuRong: goodsData.chieuRong,
                chieuCao: goodsData.chieuCao,
                nhaCungCap: goodsData.nhaCungCap,
                giaBan: goodsData.giaBan
            }
            const newGoods = new Goods(data);

            const savedGoods = await newGoods.save();
            goods.push(newGoods);
        }

        const newOrder = new Order({
            loaiHinh,
            hangHoa: goods,
            cangDi,
            cangDen,
            ngayDiDuKien,
            ngayDenDuKien,
            user,
            ngayTaoDon: Date.now(),
        });

        const order = await newOrder.save();

        res.status(201).json({ data: order, message: "Tạo thành công đơn hàng" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getAllOrders = async (req, res) => {
    try {
        const { searchString, status, ngayTaoDon } = req.query;
        const matchConditions = {};

        if (status) {
            if (status === "Chờ xét duyệt") {
                matchConditions.trangThaiXetDuyet = false;
                matchConditions.trangThaiHuy = false;
            } else if (status === "Đã xét duyệt") {
                matchConditions.trangThaiXetDuyet = true;
                matchConditions.trangThaiHuy = false;
            } else if (status === "Đã bị hủy") {
                matchConditions.trangThaiHuy = true;
            }
        }

        if (ngayTaoDon) {
            const [day, month, year] = ngayTaoDon.split('/');
            const formattedDate = new Date(`${year}-${month}-${day}`);
            matchConditions.ngayTaoDon = {
                $gte: new Date(formattedDate.setHours(0, 0, 0, 0)),
                $lt: new Date(formattedDate.setHours(23, 59, 59, 999))
            };
        }

        const pipeline = [
            {
                $match: matchConditions
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'user',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $unwind: '$user'
            },
            {
                $lookup: {
                    from: 'goods',
                    localField: 'hangHoa',
                    foreignField: '_id',
                    as: 'hangHoa'
                }
            },
            {
                $addFields: {
                    idString: { $toString: '$_id' }
                }
            }
        ];

        if (searchString) {
            const searchConditions = {
                $or: [
                    { idString: { $regex: new RegExp(searchString, 'i') } },
                    { 'user.hoten': { $regex: new RegExp(searchString, 'i') } }
                ]
            };

            pipeline.push({
                $match: searchConditions
            });
        }

        const orders = await Order.aggregate(pipeline);

        res.status(200).json({ message: "Lấy tất cả đơn hàng thành công", orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getAllOrdersByUserId = async (req, res) => {
    const userId = req.params.userId;
    // Validate the userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    try {
        const { searchString, status, ngayTaoDon } = req.query;
        const matchConditions = { user: new mongoose.Types.ObjectId(userId) };

        if (status) {
            if (status === "Chờ xét duyệt") {
                matchConditions.trangThaiXetDuyet = false;
                matchConditions.trangThaiHuy = false;
            } else if (status === "Đã xét duyệt") {
                matchConditions.trangThaiXetDuyet = true;
                matchConditions.trangThaiHuy = false;
            } else if (status === "Đã bị hủy") {
                matchConditions.trangThaiHuy = true;
            }
        }

        if (ngayTaoDon) {
            const [day, month, year] = ngayTaoDon.split('/');
            const formattedDate = new Date(`${year}-${month}-${day}`);
            matchConditions.ngayTaoDon = {
                $gte: new Date(formattedDate.setHours(0, 0, 0, 0)),
                $lt: new Date(formattedDate.setHours(23, 59, 59, 999))
            };
        }

        const pipeline = [
            {
                $match: matchConditions
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'user',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $unwind: '$user'
            },
            {
                $lookup: {
                    from: 'goods',
                    localField: 'hangHoa',
                    foreignField: '_id',
                    as: 'hangHoa'
                }
            },
            {
                $addFields: {
                    idString: { $toString: '$_id' }
                }
            }
        ];

        if (searchString) {
            const searchConditions = {
                $or: [
                    { idString: { $regex: new RegExp(searchString, 'i') } },
                    { 'user.hoten': { $regex: new RegExp(searchString, 'i') } }
                ]
            };

            pipeline.push({
                $match: searchConditions
            });
        }

        const orders = await Order.aggregate(pipeline);

        res.status(200).json({ message: "Lấy tất cả đơn hàng của user thành công", orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


const updateStatusOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id);

        if (order.trangThaiHuy) {
            return res.status(400).json({ message: "Đơn hàng đã bị hủy nên không thể xét duyệt", success: false });
        }

        order.trangThaiXetDuyet = !order.trangThaiXetDuyet;
        await order.save();

        const newGoodsDeclaration = new GoodsDeclaration({
            donHang: order._id,
            ngayTao: new Date(),
        });

        await newGoodsDeclaration.save();

        res.status(200).json({ message: "Thay đổi trạng thái đơn hàng thành công và tạo bản kê khai hàng hóa thành công", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};

const cancelOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id);

        if (order.trangThaiXetDuyet) {
            return res.status(400).json({ message: "Đơn hàng đã xét duyệt nên không thể hủy", success: false });
        }

        order.trangThaiHuy = true;

        await order.save();

        res.status(200).json({ message: "Hủy đơn hàng thành công", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};

const getReportOrder = async (req, res) => {
    try {
        const { month, year } = req.query;

        let dateFilter = {};
        if (month !== 'Tất cả' && year !== 'Tất cả') {
            const parsedMonth = parseInt(month, 10);
            const parsedYear = parseInt(year, 10);

            if (!isNaN(parsedMonth) && !isNaN(parsedYear)) {
                dateFilter = {
                    $expr: {
                        $and: [
                            { $eq: [{ $month: '$ngayTaoDon' }, parsedMonth] },
                            { $eq: [{ $year: '$ngayTaoDon' }, parsedYear] }
                        ]
                    }
                };
            }
        } else if (month !== 'Tất cả') {
            const parsedMonth = parseInt(month, 10);

            if (!isNaN(parsedMonth)) {
                dateFilter = {
                    $expr: {
                        $eq: [{ $month: '$ngayTaoDon' }, parsedMonth]
                    }
                };
            }
        } else if (year !== 'Tất cả') {
            const parsedYear = parseInt(year, 10);

            if (!isNaN(parsedYear)) {
                dateFilter = {
                    $expr: {
                        $eq: [{ $year: '$ngayTaoDon' }, parsedYear]
                    }
                };
            }
        }

        const orders = await Order.find(dateFilter);

        let resData = {
            daHuy: 0,
            chuaDuyet: 0,
            daDuyet: 0
        };

        orders.forEach(order => {
            if (order.trangThaiHuy) {
                resData.daHuy += 1;
            } else {
                if (order.trangThaiXetDuyet) {
                    resData.daDuyet += 1;
                } else {
                    resData.chuaDuyet += 1;
                }
            }
        });

        res.json(resData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export default {
    createOrderUser,
    getAllOrders,
    getAllOrdersByUserId,
    updateStatusOrder,
    cancelOrder,
    getReportOrder
}
import cloudinary from '../utils/cloudinary.js';
import { Goods, GoodsDeclaration, Order } from '../model/index.js';


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
    try {
        const orders = await Order.find({ user: userId }).populate('hangHoa').populate('user');
        res.json({ message: `Lấy tất cả đơn hàng của user ${userId} thành công`, orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
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

export default {
    createOrderUser,
    getAllOrders,
    getAllOrdersByUserId,
    updateStatusOrder
}
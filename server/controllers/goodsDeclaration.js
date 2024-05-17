import { GoodsDeclaration } from "../model/index.js";

const getAllGoodsDeclaration = async (req, res) => {
    try {
        const { searchString, status, ngayTao } = req.query;
        const matchConditions = {};

        if (status) {
            if (status === "Chưa tạo hóa đơn") {
                matchConditions.trangThai = false;
            } else if (status === "Đã tạo hóa đơn") {
                matchConditions.trangThai = true;
            }
        }

        if (ngayTao) {
            const [day, month, year] = ngayTao.split('/');
            const formattedDate = new Date(`${year}-${month}-${day}`);
            matchConditions.ngayTao = {
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
                    from: 'orders',
                    localField: 'donHang',
                    foreignField: '_id',
                    as: 'donHang'
                }
            },
            {
                $unwind: '$donHang'
            },
            {
                $lookup: {
                    from: 'goods',
                    localField: 'donHang.hangHoa',
                    foreignField: '_id',
                    as: 'donHang.hangHoa'
                }
            },
            {
                $lookup: {
                    from: 'users', 
                    localField: 'donHang.user',
                    foreignField: '_id',
                    as: 'donHang.user'
                }
            },
            {
                $unwind: '$donHang.user'
            },
            {
                $addFields: {
                    idString: { $toString: '$_id' },
                    'donHang.idString': { $toString: '$donHang._id' }
                }
            }
        ];

        if (searchString) {
            const searchConditions = {
                $or: [
                    { idString: { $regex: new RegExp(searchString, 'i') } },
                    { 'donHang.idString': { $regex: new RegExp(searchString, 'i') } },
                ]
            };

            pipeline.push({
                $match: searchConditions
            });
        }

        const goodsDeclaration = await GoodsDeclaration.aggregate(pipeline);

        res.status(200).json({ message: "Lấy tất cả bản kê khai hàng hóa thành công", goodsDeclaration });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


export default {
    getAllGoodsDeclaration,
}
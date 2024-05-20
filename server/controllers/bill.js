import { Bill } from '../model/index.js';
import mongoose from 'mongoose';

const getAllBillOfUser = async (req, res) => {
    const userId = req.params.userId;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    try {
        const { searchString, status, ngayTao } = req.query;
        const matchConditions = { 'keKhaiHH.donHang.user._id': new mongoose.Types.ObjectId(userId) };
        if (status) {
            matchConditions.trangThai = status === "Đã thanh toán";
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
                $lookup: {
                    from: 'goodsdeclarations',
                    localField: 'keKhaiHH',
                    foreignField: '_id',
                    as: 'keKhaiHH'
                }
            },
            {
                $unwind: {
                    path: '$keKhaiHH',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'orders',
                    localField: 'keKhaiHH.donHang',
                    foreignField: '_id',
                    as: 'keKhaiHH.donHang'
                }
            },
            {
                $unwind: {
                    path: '$keKhaiHH.donHang',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'goods',
                    localField: 'keKhaiHH.donHang.hangHoa',
                    foreignField: '_id',
                    as: 'keKhaiHH.donHang.hangHoa'
                }
            },
            { $unwind: '$keKhaiHH.donHang.hangHoa' },
            {
                $lookup: {
                    from: 'users',
                    localField: 'keKhaiHH.donHang.user',
                    foreignField: '_id',
                    as: 'keKhaiHH.donHang.user'
                }
            },
            {
                $unwind: {
                    path: '$keKhaiHH.donHang.user',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'containers',
                    localField: 'dsContainer',
                    foreignField: '_id',
                    as: 'dsContainer'
                }
            },
            {
                $unwind: {
                    path: '$dsContainer',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'typecontainers',
                    localField: 'dsContainer.loaiContainer',
                    foreignField: '_id',
                    as: 'dsContainer.loaiContainer'
                }
            },
            {
                $unwind: {
                    path: '$dsContainer.loaiContainer',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'vessels',
                    localField: 'dsVessel',
                    foreignField: '_id',
                    as: 'dsVessel'
                }
            },
            {
                $unwind: {
                    path: '$dsVessel',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $match: matchConditions
            },
            {
                $addFields: {
                    idString: { $toString: '$_id' },
                    orderIdString: { $toString: '$keKhaiHH.donHang._id' }
                }
            },
            {
                $group: {
                    _id: '$_id',
                    originalDocument: { $first: '$$ROOT' },
                    dsContainers: { $addToSet: '$dsContainer' }
                }
            },
            {
                $addFields: {
                    'originalDocument.dsContainer': '$dsContainers'
                }
            },
            {
                $replaceRoot: {
                    newRoot: '$originalDocument'
                }
            }
        ];

        if (searchString) {
            const searchConditions = {
                $or: [
                    { idString: { $regex: new RegExp(searchString, 'i') } },
                    { orderIdString: { $regex: new RegExp(searchString, 'i') } }
                ]
            };

            pipeline.push({
                $match: searchConditions
            });
        }

        const bills = await Bill.aggregate(pipeline);

        res.status(200).json({ message: "Lấy tất cả hóa đơn của user thành công", bills });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


export default {
    getAllBillOfUser,
}
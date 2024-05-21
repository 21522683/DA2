import { Bill } from '../model/index.js';
import mongoose from 'mongoose';

const getAllBillOfUser = async (req, res) => {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    try {
        const { searchString, status, ngayTao } = req.query;
        const matchConditions = { 'keKhaiHH.donHang.user._id': new mongoose.Types.ObjectId(userId) };
        if (status) {
            if (status === "Đã thanh toán") {
                matchConditions.trangThai = true;
            } else if (status === "Chưa thanh toán") {
                matchConditions.trangThai = false;
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
            {
                $unwind: {
                    path: '$keKhaiHH.donHang.hangHoa',
                    preserveNullAndEmptyArrays: true
                }
            },
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
                    dsContainers: { $addToSet: '$dsContainer' },
                    dsVessels: { $addToSet: '$dsVessel' },
                    hangHoas: { $addToSet: '$keKhaiHH.donHang.hangHoa' }
                }
            },
            {
                $addFields: {
                    'originalDocument.dsContainer': '$dsContainers',
                    'originalDocument.dsVessel': '$dsVessels',
                    'originalDocument.keKhaiHH.donHang.hangHoa': '$hangHoas'
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

const updateStatusBill = async (req, res) => {
    const { id } = req.params;
    try {
        const bill = await Bill.findById(id);

        bill.trangThai = true;
        bill.detailBill.ngayThanhToan = new Date();
        await bill.save();

        res.status(200).json({ message: "Thanh toán đơn hàng và tạo chi tiết hóa đơn thành công", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
}


export default {
    getAllBillOfUser,
    updateStatusBill
}
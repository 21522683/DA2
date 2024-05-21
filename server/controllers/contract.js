import { Contract } from '../model/index.js';
import mongoose from 'mongoose';


const getAllContractOfUser = async (req, res) => {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    try {
        const { searchString, status, ngayTao } = req.query;
        const matchConditions = { 'hoaDon.keKhaiHH.donHang.user._id': new mongoose.Types.ObjectId(userId) };
        if (status) {
            if (status === "Đã ký kết") {
                matchConditions.trangThai = true;
            } else if (status === "Chưa ký kết") {
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
                    from: 'bills',
                    localField: 'hoaDon',
                    foreignField: '_id',
                    as: 'hoaDon'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'goodsdeclarations',
                    localField: 'hoaDon.keKhaiHH',
                    foreignField: '_id',
                    as: 'hoaDon.keKhaiHH'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.keKhaiHH',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'orders',
                    localField: 'hoaDon.keKhaiHH.donHang',
                    foreignField: '_id',
                    as: 'hoaDon.keKhaiHH.donHang'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.keKhaiHH.donHang',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'goods',
                    localField: 'hoaDon.keKhaiHH.donHang.hangHoa',
                    foreignField: '_id',
                    as: 'hoaDon.keKhaiHH.donHang.hangHoa'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.keKhaiHH.donHang.hangHoa',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'hoaDon.keKhaiHH.donHang.user',
                    foreignField: '_id',
                    as: 'hoaDon.keKhaiHH.donHang.user'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.keKhaiHH.donHang.user',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'containers',
                    localField: 'hoaDon.dsContainer',
                    foreignField: '_id',
                    as: 'hoaDon.dsContainer'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.dsContainer',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'typecontainers',
                    localField: 'hoaDon.dsContainer.loaiContainer',
                    foreignField: '_id',
                    as: 'hoaDon.dsContainer.loaiContainer'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.dsContainer.loaiContainer',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'vessels',
                    localField: 'hoaDon.dsVessel',
                    foreignField: '_id',
                    as: 'hoaDon.dsVessel'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.dsVessel',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $match: matchConditions
            },
            {
                $addFields: {
                    idString: { $toString: '$_id' },
                    orderIdString: { $toString: '$hoaDon.keKhaiHH.donHang._id' }
                }
            },
            {
                $group: {
                    _id: '$_id',
                    originalDocument: { $first: '$$ROOT' },
                    dsContainers: { $addToSet: '$hoaDon.dsContainer' },
                    dsVessels: { $addToSet: '$hoaDon.dsVessel' },
                    hangHoas: { $addToSet: '$hoaDon.keKhaiHH.donHang.hangHoa' }
                }
            },
            {
                $addFields: {
                    'originalDocument.hoaDon.dsContainer': '$dsContainers',
                    'originalDocument.hoaDon.dsVessel': '$dsVessels',
                    'originalDocument.hoaDon.keKhaiHH.donHang.hangHoa': '$hangHoas'
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

        const contracts = await Contract.aggregate(pipeline);

        res.status(200).json({ message: "Lấy tất cả hợp đồng của user thành công", contracts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getAllContract = async (req, res) => {
    try {
        const { searchString, status, ngayTao } = req.query;
        const matchConditions = {};
        if (status) {
            if (status === "Đã ký kết") {
                matchConditions.trangThai = true;
            } else if (status === "Chưa ký kết") {
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
                    from: 'bills',
                    localField: 'hoaDon',
                    foreignField: '_id',
                    as: 'hoaDon'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'goodsdeclarations',
                    localField: 'hoaDon.keKhaiHH',
                    foreignField: '_id',
                    as: 'hoaDon.keKhaiHH'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.keKhaiHH',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'orders',
                    localField: 'hoaDon.keKhaiHH.donHang',
                    foreignField: '_id',
                    as: 'hoaDon.keKhaiHH.donHang'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.keKhaiHH.donHang',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'goods',
                    localField: 'hoaDon.keKhaiHH.donHang.hangHoa',
                    foreignField: '_id',
                    as: 'hoaDon.keKhaiHH.donHang.hangHoa'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.keKhaiHH.donHang.hangHoa',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'hoaDon.keKhaiHH.donHang.user',
                    foreignField: '_id',
                    as: 'hoaDon.keKhaiHH.donHang.user'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.keKhaiHH.donHang.user',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'containers',
                    localField: 'hoaDon.dsContainer',
                    foreignField: '_id',
                    as: 'hoaDon.dsContainer'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.dsContainer',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'typecontainers',
                    localField: 'hoaDon.dsContainer.loaiContainer',
                    foreignField: '_id',
                    as: 'hoaDon.dsContainer.loaiContainer'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.dsContainer.loaiContainer',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'vessels',
                    localField: 'hoaDon.dsVessel',
                    foreignField: '_id',
                    as: 'hoaDon.dsVessel'
                }
            },
            {
                $unwind: {
                    path: '$hoaDon.dsVessel',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $match: matchConditions
            },
            {
                $addFields: {
                    idString: { $toString: '$_id' },
                    customerString: { $toString: '$hoaDon.keKhaiHH.donHang.user.hoten' }
                }
            },
            {
                $group: {
                    _id: '$_id',
                    originalDocument: { $first: '$$ROOT' },
                    dsContainers: { $addToSet: '$hoaDon.dsContainer' },
                    dsVessels: { $addToSet: '$hoaDon.dsVessel' },
                    hangHoas: { $addToSet: '$hoaDon.keKhaiHH.donHang.hangHoa' }
                }
            },
            {
                $addFields: {
                    'originalDocument.hoaDon.dsContainer': '$dsContainers',
                    'originalDocument.hoaDon.dsVessel': '$dsVessels',
                    'originalDocument.hoaDon.keKhaiHH.donHang.hangHoa': '$hangHoas'
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
                    { customerString: { $regex: new RegExp(searchString, 'i') } }
                ]
            };

            pipeline.push({
                $match: searchConditions
            });
        }

        const contracts = await Contract.aggregate(pipeline);

        res.status(200).json({ message: "Lấy tất cả hợp đồng thành công", contracts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateStatusContract = async (req, res) => {
    const { id } = req.params;
    try {
        const contract = await Contract.findById(id);

        contract.trangThai = true;
        contract.detailContract.ngayKyKet = new Date();
        await contract.save();

        res.status(200).json({ message: "Xác nhận ký kết thành công", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
}


export default {
    getAllContractOfUser,
    getAllContract,
    updateStatusContract
}

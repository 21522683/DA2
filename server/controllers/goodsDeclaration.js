import { Bill, Container, GoodsDeclaration, Vessel } from "../model/index.js";

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

function findClosestSumOfContainer(V, arrV) {
    let closestSum = Infinity;
    let closestSubset = [];

    function findSubset(i, currentSum, currentSubset) {
        if (currentSum >= V && (currentSum - V) < (closestSum - V)) {
            closestSum = currentSum;
            closestSubset = [...currentSubset];
        }
        if (i >= arrV.length) {
            return;
        }
        findSubset(i + 1, currentSum, currentSubset);
        currentSubset.push(arrV[i]);
        findSubset(i + 1, currentSum + arrV[i].loaiContainer.theTichChua, currentSubset);
        currentSubset.pop();
    }
    findSubset(0, 0, []);
    if (closestSum === Infinity) {
        return [];
    }
    return closestSubset;
}

function findClosestSumOfVessel(M, arrM) {
    let closestSum = Infinity;
    let closestSubset = [];

    function findSubset(i, currentSum, currentSubset) {
        if (currentSum >= M && (currentSum - M) < (closestSum - M)) {
            closestSum = currentSum;
            closestSubset = [...currentSubset];
        }
        if (i >= arrM.length) {
            return;
        }
        findSubset(i + 1, currentSum, currentSubset);
        currentSubset.push(arrM[i]);
        findSubset(i + 1, currentSum + arrM[i].taiTrong, currentSubset);
        currentSubset.pop();
    }
    findSubset(0, 0, []);
    if (closestSum === Infinity) {
        return [];
    }
    return closestSubset;
}

const createBillUser = async (req, res) => {
    try {
        const { idKKHH } = req.params;
        const { thue, phiVC, triGia } = req.body;

        const listAllContainers = await Container.find({trangThai: false}).populate('loaiContainer').exec();
        const listAllVessels = await Vessel.find({trangThai: false}).exec();
        const kkhh = await GoodsDeclaration.findById(idKKHH).populate({
            path: 'donHang',
            populate: [
                {
                    path: 'hangHoa',
                    model: 'Goods'
                },
                {
                    path: 'user',
                    model: 'User'
                }
            ]
        }).exec();

        // Tính tổng thể tích và tổng khối lượng của hàng hóa trong 1 đơn hàng
        let totalV = 0;
        let totalM = 0;
        let arrHH = [...kkhh.donHang.hangHoa];
        let totalMoneyHH = 0;
        for (let i = 0; i < arrHH.length; i++) {
            let Vhh = arrHH[i].chieuDai * arrHH[i].chieuRong * arrHH[i].chieuCao * arrHH[i].soLuong;
            let Mhh = arrHH[i].khoiLuong * arrHH[i].soLuong;
            totalV = totalV + Vhh;
            totalM = totalM + Mhh;
            totalMoneyHH = totalMoneyHH + (arrHH[i].giaBan * arrHH[i].soLuong);
        }

        let MOfContsinersChosse = 0;
        let totalMoneyContainer = 0;
        // Duyệt qua để chọn danh sách container tối ưu nhất
        totalV = parseFloat(totalV.toFixed(2));
        const listContainerChoose = findClosestSumOfContainer(totalV, listAllContainers);
        if (listContainerChoose.length === 0) {
            return res.status(400).json({
                message: 'Số lượng container hiện tại không đáp ứng đủ cho đơn hàng. Vui lòng đợi thêm thời gian.',
                success: false,
            });
        } else {
            for (let i = 0; i < listContainerChoose.length; i++) {
                const container = listContainerChoose[i];
                MOfContsinersChosse = MOfContsinersChosse + container.loaiContainer.trongLuong;
                totalMoneyContainer = totalMoneyContainer + (container.loaiContainer.giaThue);
                listContainerChoose[i].trangThai = true;
            }
        }

        // Duyệt để chọn danh sách tàu tối ưu nhất
        totalM = totalM.toFixed(2) / 1000 + MOfContsinersChosse;
        let listVesselChoose = findClosestSumOfVessel(totalM, listAllVessels);
        let totalMoneyVessel = 0;
        if (listVesselChoose.length === 0) {
            return res.status(400).json({
                message: 'Số lượng tàu hiện tại không đáp ứng đủ cho đơn hàng. Vui lòng đợi thêm thời gian.',
                success: false,
            });
        } else {
            for (let i = 0; i < listVesselChoose.length; i++) {
                const vessel = listVesselChoose[i];
                totalMoneyVessel = totalMoneyVessel + (vessel.giaThue);
                listVesselChoose[i].trangThai = true;
            }
        }

        const objectBill = {
            keKhaiHH: idKKHH,
            thue: thue/100*totalMoneyHH,
            phiVanChuyen: phiVC,
            phiThueContainer: totalMoneyContainer,
            phiThueTau: totalMoneyVessel,
            triGiaDonHang: triGia,
            ngayTao: Date.now(),
            tongTien: (triGia + phiVC + totalMoneyContainer + totalMoneyVessel + thue*totalMoneyHH).toFixed(1),
            dsContainer: listContainerChoose,
            dsVessel: listVesselChoose,
        }

        for (var i = 0; i < listContainerChoose.length; i++) {
            let idContainerUpdate = listContainerChoose[i]._id;
            const container = await Container.findById(idContainerUpdate);
            container.trangThai = true;
            await container.save();
        }
        for (var i = 0; i < listVesselChoose.length; i++) {
            let idVesselUpdate = listVesselChoose[i]._id;
            const vessel = await Vessel.findById(idVesselUpdate);
            vessel.trangThai = true;
            await vessel.save();
        }
        kkhh.trangThai = true;
        await kkhh.save();

        const bill = await Bill.create(objectBill);
        await bill.save();
        res.status(200).json({ message: 'Tạo hóa đơn thành công', bill , success: true});

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
}



export default {
    getAllGoodsDeclaration,
    createBillUser,
}
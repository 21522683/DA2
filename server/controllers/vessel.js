import { Vessel } from "../model/index.js";


const createVessel = async (req, res) => {
    try {
        const { tenTau, soHieu, taiTrong, giaThue } = req.body;
        const existsVessel = await Vessel.findOne({ soHieu: soHieu }).exec();
        if (!existsVessel) {
            const vessel = await Vessel.create({
                soHieu: soHieu,
                tenTau: tenTau,
                taiTrong: taiTrong,
                giaThue: giaThue,
            });
            await vessel.save();
            res.status(200).json({ message: 'Thêm tàu mới thành công', vessel });
        } else {
            res.status(200).json({ message: 'Số hiệu đã tồn tại, hãy nhập số hiệu khác' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const updateVessel = async (req, res) => {
    try {
        const { id } = req.params;
        const { tenTau, soHieu, taiTrong, giaThue , trangThai} = req.body;
        const existsVessel = await Vessel.findOne({ soHieu }).exec();
        if (existsVessel && existsVessel.soHieu !== soHieu) {
            return res.status(400).json({ message: 'Số hiệu đã tồn tại, hãy nhập số hiệu khác' });
        }
        const updatedVessel = await Vessel.findByIdAndUpdate(
            id,
            {
                soHieu,
                tenTau,
                taiTrong,
                giaThue,
                trangThai: trangThai === "Đang trống" ? false : true,
            },
            { new: true }
        );

        if (!updatedVessel) {
            return res.status(404).json({ message: 'updatedVessel not found' });
        }

        return res.status(200).json({ message: 'Cập nhật thông tin tàu thành công', vessel: updatedVessel });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};


const deleteVessel = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedVessel = await Vessel.findByIdAndDelete(id);

        if (!deletedVessel) {
            return res.status(404).json({ message: 'Vessel not found' });
        }
        return res.status(200).json({ message: 'Xóa tàu thành công' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const getAllVessel = async (req, res) => {
    try {
        let { searchString = '', trangThai = 'Tất cả'} = req.query;
        let filter = {};

        if (trangThai !== 'Tất cả') {
            filter.trangThai = trangThai === 'Đang trống' ? false : true;
        }

        if (searchString) {
            filter.$or = [
                { soHieu: { $regex: `.*${searchString}.*`, $options: 'i' } },
                { tenTau: { $regex: `.*${searchString}.*`, $options: 'i' } }
            ];
        }

        const filterVessels = await Vessel.find(filter).exec();

        res.status(200).json({
            message: 'Lấy tất cả tàu thành công',
            data: {
                vessels: filterVessels,
            },
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};


export default {
    createVessel,
    updateVessel,
    deleteVessel,
    getAllVessel
}
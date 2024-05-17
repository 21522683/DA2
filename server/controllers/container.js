import { Container, TypeContainer } from "../model/index.js";


const createContainer = async (req, res) => {
    try {
        const { loaiContainer, soHieu } = req.body;
        const existsContainer = await Container.findOne({ soHieu: soHieu }).exec();
        if (!existsContainer) {
            const typeContainer = await TypeContainer.findOne({ tenLoai: loaiContainer }).exec();
            const container = await Container.create({
                soHieu: soHieu,
                loaiContainer: typeContainer._id,
            });
            await container.save();
            res.status(200).json({ message: 'Thêm container thành công', container });
        } else {
            res.status(200).json({ message: 'Số hiệu đã tồn tại, hãy nhập số hiệu khác' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const updateContainer = async (req, res) => {
    try {
        const { id } = req.params;
        const { loaiContainer, trangThai, soHieu } = req.body;
        const existsContainer = await Container.findOne({ soHieu }).exec();
        if (existsContainer) {
            return res.status(400).json({ message: 'Số hiệu đã tồn tại, hãy nhập số hiệu khác' });
        }
        const typeContainer = await TypeContainer.findOne({ tenLoai: loaiContainer }).exec();
        if (!typeContainer) {
            return res.status(404).json({ message: 'TypeContainer not found' });
        }
        const updatedContainer = await Container.findByIdAndUpdate(
            id,
            {
                soHieu,
                loaiContainer: typeContainer._id,
                trangThai: trangThai === "Đang trống" ? false : true,
            },
            { new: true }
        );

        if (!updatedContainer) {
            return res.status(404).json({ message: 'Container not found' });
        }

        return res.status(200).json({ message: 'Cập nhật container thành công', container: updatedContainer });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};


const deleteContainer = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedContainer = await Container.findByIdAndDelete(id);

        if (!deletedContainer) {
            return res.status(404).json({ message: 'Container not found' });
        }
        return res.status(200).json({ message: 'Xóa container thành công' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const getAllContainer = async (req, res) => {
    try {
        let { searchString = '', trangThai = 'Tất cả', loaiContainer = 'Tất cả' } = req.query;
        let filter = {};

        if (trangThai !== 'Tất cả') {
            filter.trangThai = trangThai === 'Đang trống' ? false : true;
        }

        if (loaiContainer !== 'Tất cả') {
            const typeContainer = await TypeContainer.findOne({ tenLoai: loaiContainer }).exec();
            if (typeContainer) {
                filter.loaiContainer = typeContainer._id;
            } else {
                return res.status(200).json({
                    message: 'Lấy tất cả container thành công',
                    data: {
                        containers: [],
                    },
                });
            }
        }

        if (searchString) {
            filter.soHieu = { $regex: `.*${searchString}.*`, $options: 'i' };
        }

        const filterContainers = await Container.find(filter).populate('loaiContainer').exec();

        res.status(200).json({
            message: 'Lấy tất cả container thành công',
            data: {
                containers: filterContainers,
            },
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};


export default {
    createContainer,
    updateContainer,
    deleteContainer,
    getAllContainer
}
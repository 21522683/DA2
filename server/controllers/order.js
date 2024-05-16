import cloudinary from '../utils/cloudinary.js';
import bcrypt from 'bcrypt';
import sendEmail from '../utils/sendMail.js';
import jwt from 'jsonwebtoken';
import { Goods, Order } from '../model/index.js';


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

        res.status(201).json({data: order, message: "Tạo thành công đơn hàng"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export default {
    createOrderUser,
}
import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Order',
    new Schema({
        loaiHinh: String, // "Xuất khẩu" hoặc  "Nhập khẩu"
        hangHoa: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Goods'
            },
        ],
        cangDi: String,
        cangDen: String,
        ngayDiDuKien: Date,
        ngayDenDuKien: Date,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        ngayTaoDon: Date,
        trangThaiXetDuyet: {
            type: Boolean,
            default: false
        },
        trangThaiHuy: {
            type: Boolean,
            default: false
        }, 
    })
)
import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('User',
    new Schema({
        diaChi: String,
        tenDoanhNghiep: String,
        STK: String,
        nganHang: String,
        soFAX: String,
        isAdmin: {
            type: Boolean,
            default: false
        },
        refreshToken: {
            type: String,
            requried: true
        },
        status: {
            type: String,
            default: "Chờ xét duyệt", // "Đang hoạt động"  "Đã bị khóa"
        },
        representative: {
            type: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Representative'
            },
            default: {}
        }
    })
)
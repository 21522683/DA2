import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('User',
    new Schema({
        maSoDN: String,
        diaChi: String,
        tenDoanhNghiep: String,
        stk: String,
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
            default: "Chờ xác nhân", // "Đang hoạt động"  "Đã bị khóa" 
        },
        isVerify: {
            type: Boolean,
            default: false
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
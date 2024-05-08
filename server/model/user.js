import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('User',
    new Schema({
        hoten: String,
        email: String,
        password: String,
        infoVerify: {
            soDienThoai: String,
            maSoDN: String,
            diaChi: String,
            tenDoanhNghiep: String,
            stk: String,
            nganHang: String,
            soFAX: String,
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        refreshToken: {
            type: String,
            requried: true
        },
        status: {
            type: Boolean,
            default: true
        },
        isVerify: {
            type: Boolean,
            default: false
        },
        isVerifiedEmail: { 
            type: Boolean, 
            default: false 
        },
    })
)
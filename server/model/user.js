import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('User',
    new Schema({
        hoten: String,
        email: String,
        password: String,
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
        infoVerify: {
            soDienThoai: String,
            maSoDN: String,
            diaChi: String,
            tenDoanhNghiep: String,
            stk: String,
            nganHang: String,
            soFAX: String,
        },
        isVerifiedEmail: { 
            type: Boolean, 
            default: false 
        },
    })
)
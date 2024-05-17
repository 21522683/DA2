import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Vessel',
    new Schema({
        tenTau: String,
        soHieu: String,
        taiTrong: Number,
        trangThai: {
            type: Boolean,
            default: true
        },
        trongLuong: Number,
        giaThue: Number,
    })
)
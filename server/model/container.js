import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Container',
    new Schema({
        soHieu: String,
        theTichChua: Number,
        trangThai: {
            type: Boolean,
            default: false
        },
        trongLuong: Number,
        soLuong: {
            type: Number,
            default: 0
        },
        giaThue: Number,
    })
)
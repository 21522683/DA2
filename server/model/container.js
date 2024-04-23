import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Container',
    new Schema({
        soHieu: String,
        theTichChua: Number,
        trangThai: {
            type: Boolean,
            default: true
        },
        trongLuong: Number,
    })
)
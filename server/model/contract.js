import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Contract',
    new Schema({
        tenHopDong: String,
        triGiaHopDong: Number,
        ngayTao: Date,
        tongTien: Number,
        hoaDon: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bill'
        },
        trangThai: {
            type: Boolean,
            default: false
        }, 
    })
)
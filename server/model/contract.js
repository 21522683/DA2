import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Contract',
    new Schema({
        ngayTao: Date,
        hoaDon: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bill'
        },
        trangThai: {
            type: Boolean,
            default: false
        }, 
        detailContract: {
            ngayKyKet: Date,
        }
    })
)
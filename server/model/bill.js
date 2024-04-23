import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Bill',
    new Schema({
        keKhaiHH: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'GoodsDeclaration'
            },
        ],
        thue: Number, // thuế
        phiVanChuyen: Number,
        phiContainer: Number,
        triGiaDonHang: Number,
        ngayTao: Date,
        tongTien: Number,
        container: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Container'
        },
        tau: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vessel'
        },
        trangThai: {
            type: Boolean,
            default: false
        }, 
    })
)
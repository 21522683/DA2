import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('GoodsDeclaration',
    new Schema({
        donHang: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order'
            },
        ],
        ngayTao: Date,
        trangThai: {
            type: Boolean,
            default: false
        }, 
    })
)
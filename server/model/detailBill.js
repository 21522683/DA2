import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Bill',
    new Schema({
        hoaDon: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bill'
        },
        ngayThanhToan: Date,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    })
)
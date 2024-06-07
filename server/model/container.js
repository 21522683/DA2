import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Container',
    new Schema({
        soHieu: String,
        trangThai: {
            type: Boolean,
            default: false
        },
        loaiContainer: {
            type: Schema.Types.ObjectId,
            ref: 'TypeContainer'
        }
    })
)
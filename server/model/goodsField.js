import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('GoodsField',
    new Schema({
        tenLinhVuc: String,
    })
)
import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Representative',
    new Schema({
        hoten: String,
        soDienThoai: String,
        email: String,
        password: String,
    })
)
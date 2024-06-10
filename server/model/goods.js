import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Goods',
    new Schema({
        tenHH: String,
        hinhAnh: [
            {
                url: String,
                public_id: String,
            }
        ],
        linhVuc: String,
        soLuong: Number,
        moTa: String,
        donViTinh: String,
        khoiLuong: Number,
        ngaySX: Date,
        HSD: Date,
        chieuDai: Number,
        chieuRong: Number,
        chieuCao: Number,
        nhaCungCap: String,
        giaBan: Number,
    })
)
import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('TypeContainer',
    new Schema({
        tenLoai: {
            type: String,
            default: "TC (20 feet)",
        },
        theTichChua: {
            type: Number,
            default: 28 // 28 tấn
        },
        trongLuong: {
            type: Number,
            default: 2.2 // 2.2 tấn
        },
        giaThue: {
            type: Number,
            default: 4800000 // 4.800.000 đồng/ngay
        },
    },
    {
        tenLoai: {
            type: String,
            default: "TC (40 feet)",
        },
        theTichChua: {
            type: Number,
            default: 38 // 38 tấn
        },
        trongLuong: {
            type: Number,
            default: 4.2 // 4.2 tấn
        },
        giaThue: {
            type: Number,
            default: 5200000 //5.200.000 đồng/ngay
        },
    },
    {
        tenLoai: {
            type: String,
            default: "TC (45 feet)",
        },
        theTichChua: {
            type: Number,
            default: 45 // 45 tấn
        },
        trongLuong: {
            type: Number,
            default: 4.9 // 4.9 tấn
        },
        giaThue: {
            type: Number,
            default: 5600000 //5.600.000 đồng/ngay
        },
    }
)
)
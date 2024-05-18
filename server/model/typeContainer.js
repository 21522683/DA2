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
            default: 33.1 
        },
        trongLuong: {
            type: Number,
            default: 26.68
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
            default: 67.7 
        },
        trongLuong: {
            type: Number,
            default: 28.28 
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
            default: 86.6
        },
        trongLuong: {
            type: Number,
            default: 32.5
        },
        giaThue: {
            type: Number,
            default: 5600000 //5.600.000 đồng/ngay
        },
    }
)
)
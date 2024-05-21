import mongoose from "mongoose"
import { Schema } from "mongoose"
export default mongoose.model('Bill',
    new Schema({
        keKhaiHH: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'GoodsDeclaration'
        },
        thue: Number, // thuế
        phiVanChuyen: Number,
        phiThueContainer: Number,
        phiThueTau: Number,
        triGiaDonHang: Number,
        ngayTao: Date,
        tongTien: Number,
        dsContainer: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Container'
            }
        ],
        dsVessel: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Vessel'
            }
        ],
        trangThai: {
            type: Boolean,
            default: false
        }, 
        isHaveContract: {
            type: Boolean,
            default: false
        },
        detailBill: {
            ngayThanhToan: Date,
        }
    })
)
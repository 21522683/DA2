import { User } from '../model/index.js';
import bcrypt from 'bcrypt';
import sendEmail from '../utils/sendMail.js';
import jwt from 'jsonwebtoken';

const checkRegisterEmail = async (req, res) => {
    try {
        const { hoten, email, password } = req.body;
        let user = await User.findOne({ email }).exec();
        if (user) {
            return res.status(409).json({ message: 'Email này đã tồn tại!' });
        }
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.ROUNDS));
        const tokenVerifyEmailLink = jwt.sign(
            {
                hoten,
                email,
                password: hashedPassword,
            },
            process.env.JWT_SECRET_LINK_VERIFY_EMAIL,
            {
                expiresIn: process.env.EXPIRED_LINK_VERIFY_EMAI,
            },
        );
        const url = `${process.env.FRONT_END_URL}users/verify/${tokenVerifyEmailLink}`;
        await sendEmail(email, 'Verify Email', url);
        console.log(url)
        return res.status(201).json({
            message: `Một liên kết đã được gửi đến ${email}. Vui lòng truy cập liên kết để xác thực tài khoản. Liên kết tồn tại trong 5 phút.`,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
const registerUser = async (req, res) => {
    try {
        const token = req.params.tokenLinkVerifyEmail;
        const newUser = jwt.verify(token, process.env.JWT_SECRET_LINK_VERIFY_EMAIL);
        const existsUser = await User.findOne({ email: newUser.email }).exec();
        if (!existsUser) {
            const user = await User.create({
                ...newUser,
                isVerifiedEmail: true,
            });

            res.status(200).json({ message: 'Email verified successfully' });
        } else res.status(200).json({ message: 'Tài khoản đã tồn tại' });
    } catch (error) {
        res.status(400).json({ message: 'Invalid link' });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).exec();
        if (!user) {
            return res.status(401).json({ message: 'Sai tài khoản hoặc mật khẩu' });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Sai tài khoản hoặc mật khẩu' });
        }
        const accessToken = generateAccessToken({ email: user.email, id: user._id, isAdmin: user.isAdmin });
        const refreshToken = generateRefreshToken({ email: user.email, id: user._id, isAdmin: user.isAdmin });
        user.refreshToken = refreshToken;
        await user.save();
        return res
            .status(200)
            .json({ data: { accessToken, refreshToken, isAdmin: user.isAdmin }, message: 'Logged in successfully' });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_ACCESS_TOKEN, {
        expiresIn: process.env.EXPIRED_ACCESS_TOKEN,
    });
};
const generateRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_REFRESH_TOKEN, {
        expiresIn: process.env.EXPIRED_REFRESH_TOKEN,
    });
};
const getInfoCurrentUser = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId).exec();
        delete user._doc.password;
        delete user._doc.refreshToken;
        res.status(200).json({
            message: 'Get info user successfully',
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        let emailUser = await User.findOne({ email }).exec();
        if (!emailUser) {
            return res.status(401).json({ message: 'Email không tồn tại!' });
        }
        const tokenResetPassword = jwt.sign(
            {
                email: emailUser.email,
            },
            process.env.JWT_SECRET_LINK_RESET_PASSWORD,
            {
                expiresIn: process.env.EXPIRED_LINK_RESET_PASSWORD,
            },
        );
        const url = `${process.env.FRONT_END_URL}user/${emailUser.id}/update-new-password/${tokenResetPassword}`;
        await sendEmail(emailUser.email, 'Password Reset', url);
        console.log(url);

        res.status(200).json({
            message: `Một liên kết cập nhật mật khẩu đã được gửi đến ${emailUser.email}. Liên kết tồn tại trong 5 phút.`,
            data: url,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

const verifyLinkForgotPassword = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec();
        if (!user) return res.status(400).json({ message: 'Invalid link' });

        const token = req.params.tokenVerifyLinkForgotPassword;
        jwt.verify(token, process.env.JWT_SECRET_LINK_RESET_PASSWORD);
        res.status(200).json({ message: 'successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Invalid link' });
    }
};

const updateNewPassword = async (req, res) => {
    try {
        const { newPassword, id } = req.body;
        const user = await User.findById(id).exec();
        const hashedPassword = await bcrypt.hash(newPassword, parseInt(process.env.ROUNDS));
        user.password = hashedPassword;
        await user.save();
        return res.status(200).json({ message: 'Cập nhật mật khẩu thành công!' });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

const sendRequireVerifyInfo = async (req, res) => {
    const { id } = req.params;
    const { maSoDN, tenDoanhNghiep, diaChi, STK, nganHang, soFAX, soDienThoai } = req.body;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found", success: false});
        }

        const newInfoVerify = {
            maSoDN,
            tenDoanhNghiep,
            diaChi,
            STK,
            nganHang,
            soFAX,
            soDienThoai,
        };

        user.infoVerify = newInfoVerify;

        await user.save();

        res.status(200).json({ message: "Require verify info sent successfully", user , success: true});
    } catch (error) {
        console.error("Error sending require verify info:", error);
        res.status(500).json({ error: "Internal server error", success: false});
    }
};

const getInfoAdmin = async (req, res) => {
    try {
        const user = await User.findOne({isAdmin: true});

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "Get infomation of admin successfully", user });
    } catch (error) {
        console.error("Error when get infomation of user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "Get infomation of user successfully", user });
    } catch (error) {
        console.error("Error when get infomation of user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const verifyInfomationUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found", success: false });
        }
        user.isVerify = true;
        await user.save();
        res.status(200).json({ message: "Verify infomation of user successfully", user, success: true });
    } catch (error) {
        console.error("Error when get infomation of user:", error);
        res.status(500).json({ error: "Internal server error", success: false });
    }
};

const updateInfomationUser = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if the email is already taken by another user
        if (updateData.email) {
            const existingUser = await User.findOne({ email: updateData.email });

            if (existingUser && existingUser._id.toString() !== id) {
                return res.status(400).json({ error: "Cấp nhật thất bại. Do email đã tồn tại rồi", success: false });
            }
        }

        const updatedUser = await User.findByIdAndUpdate(
            id, 
            { 
                hoten: updateData.hoten, 
                infoVerify: updateData.infoVerify, 
                email: updateData.email 
            }, 
            {
                new: true, // Return the user after the update
            }
        );

        res.status(200).json({ message: "Update information of user successfully", success: true, updatedUser });
    } catch (error) {
        console.error("Error when updating information of user:", error);
        res.status(500).json({ error: "Internal server error", success: false });
    }
};


const updateStatusAccount = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found", success: false });
        }
        user.status = !user.status;
        await user.save();
        res.status(200).json({ message: "Thay đổi trạng thái tài khoản thành công", user , success: true});
    } catch (error) {
        console.error("Error when get infomation of user:", error);
        res.status(500).json({ error: "Internal server error" , success: false});
    }
};

const getAllUser = async (req, res) => {
    try {
        const isAdmin = req.isAdmin;
        if (isAdmin) {
            let { searchString = '', status = 'Tất cả', isVerify = 'Tất cả' } = req.query;
            let filter = {};

            if (status !== 'Tất cả') {
                filter.status = status === 'Đang bị khóa' ? false : true;
            }
            if (isVerify !== 'Tất cả') {
                if (isVerify === 'Đã xác minh') {
                    filter.isVerify = true;
                } else if (isVerify === 'Chưa xác minh') {
                    filter.isVerify = false;
                    filter.infoVerify = { $exists: false };
                } else if (isVerify === 'Chờ xác minh') {
                    filter.isVerify = false;
                    filter.infoVerify = { $exists: true };
                }
            }

            if (searchString) {
                filter.$or = [
                    { hoten: { $regex: `.*${searchString}.*`, $options: 'i' } },
                    { email: { $regex: `.*${searchString}.*`, $options: 'i' } }
                ];
            }

            const filterUsers = await User.find(filter)
                .select('-password -refreshToken -isVerifiedEmail')
                .exec();

            res.status(200).json({
                message: 'Lấy thông tin tất cả người dùng thành công',
                data: {
                    users: filterUsers,
                },
            });
        } else {
            throw new Error('Bạn không có quyền truy cập');
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};


const sendEmailNotifyToUser = async (req, res) => {
    try {
        const { email, reason } = req.body;
        const url = `Thông tin bạn gửi để xác minh trên website seaport của chúng tôi bị sai hoặc không hợp lệ. Với lý do là (${reason}). CHÚNG TÔI YÊU CẦU BẠN KIỂM TRA LẠI THÔNG TIN VÀ GỬI YÊU CẦU XÁC MINH LẠI.`;
        await sendEmail(email, 'Xác minh thông tin', url);
        console.log(url)
        return res.status(201).json({
            message: `Gửi mail thành công`,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};



export default {
    checkRegisterEmail,
    registerUser,
    loginUser,
    getInfoCurrentUser,
    forgotPassword,
    verifyLinkForgotPassword,
    updateNewPassword,
    sendRequireVerifyInfo,
    getUserById,
    verifyInfomationUser,
    updateInfomationUser,
    updateStatusAccount,
    getAllUser,
    sendEmailNotifyToUser,
    getInfoAdmin
}
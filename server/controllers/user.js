import cloudinary from '../utils/cloudinary.js';
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




export default {
    checkRegisterEmail,
    registerUser,
    loginUser,
    getInfoCurrentUser
}
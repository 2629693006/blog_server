// 导入数据库模块
const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    // 用户名
    username: {
        type: String,
        minlength: 2,
        maxlength: 6,
        required: true,
        message: '长度在2~6个字符之间'
    },
    // 密码
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    text: {
        type: String
    },
    // 注册时间
    Time: {
        type: Date,
        default: Date.now
    },
    // 权限
    Juri: {
        type: String
    },
    // 状态
    status: {
        type: Boolean
    }
})
const User = mongoose.model('User', UserSchema)
module.exports = {
    User
}
// 用户集合
const { User } = require('../../../model/agg/user')
    // 加密模块
const Bcrypt = require('bcrypt')
const { use } = require('../../router')
module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    // 获取客户端添加的信息
    const { username, password, Juri } = req.body
    const keyData = await User.findOne({ username: username })
    if (keyData) {
        return res.send({
            status: 400,
            msg: '当前用户名已注册...'
        })
    }
    // 使用加密模块对用户的密码继续加密
    const BP = await Bcrypt.genSalt(10)
    const pwd = await Bcrypt.hash(password, BP)
        // 把用户的数据添加到数据库中
    const data = await User.create({
            username: username,
            password: pwd,
            Juri: Juri,
            status: true,
            text: '请输入个人用户介绍信息...'
        })
        // 响应数据
    if (data) {
        res.send({
            status: 201,
            msg: '添加成功'
        })
    } else {
        res.send({
            status: 400,
            msg: '添加失败'
        })
    }
}
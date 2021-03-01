// 加密模块
const Bcrypt = require('bcrypt')
    // 用户集合
const { User } = require('../../model/agg/user')
    // 登录接口
module.exports = async(req, res) => {
    // 获取用户登录提交数据
    const { username, password } = req.body
        // 通过用户名的唯一标识在用户集合中进行查询用户数据
    const data = await User.findOne({ username: username })
    if (!data) {
        return res.send({
            status: 400,
            msg: '用户名或密码错误'
        })
    }
    // 加密密码进行匹配，返回true就是找到用户信息，否则就是集合中没有当前登录用户信息
    const bool = await Bcrypt.compare(password, data.password)
    console.log(bool);
    // 响应相应的信息
    if (!bool) {
        return res.send({
            status: 400,
            msg: '用户名或密码错误'
        })
    } else {
        // 加密token值
        const BP = await Bcrypt.genSalt(10)
        const token = await Bcrypt.hash('AJIAN15278548406', BP)
        req.sessionStore.token = token
        req.sessionStore.UserId = data._id
        return res.send({
            status: 200,
            msg: '登录成功',
            token: token,
            data: {
                username: data.username,
                id: data._id,
                Juri: data.Juri,
                status: data.status
            }
        })
    }
}
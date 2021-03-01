const { User } = require("../../../model/agg/user")
module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    // 获取客户端传递的参数
    const { id } = req.params
        // 查询用户数据
    const data = await User.findOne({ _id: id })
        // 结构出数据响应
    const val = {
            text: data.text,
            username: data.username,
            id: data._id
        }
        // 响应数据信息
    if (data) {
        res.send({
            status: 200,
            data: val,
            msg: '获取数据成功'
        })
    } else {
        res.send({
            status: 400,
            msg: '获取数据失败'
        })
    }
}
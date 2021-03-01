// 用户集合
const { User } = require("../../../model/agg/user")
module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    const { id } = req.params
        // 根据用户的id删除指定的用户信息
    const data = await User.deleteOne({ _id: id })
        // 响应数据
    if (data) {
        res.send({
            status: 200,
            msg: '删除成功'
        })
    } else {
        res.send({
            status: 400,
            msg: '删除失败'
        })
    }
}
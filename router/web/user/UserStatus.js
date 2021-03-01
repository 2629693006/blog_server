const { User } = require("../../../model/agg/user")

module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    const { id, status } = req.body
    const data = await User.updateOne({ _id: id }, { status: status })
    if (data) {
        res.send({
            status: 200,
            msg: '更新成功'
        })
    } else {
        res.send({
            status: 400,
            msg: '更新失败'
        })
    }
}
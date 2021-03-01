const { User } = require("../../../model/agg/user");
module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    // 获取客户端的数据
    const { id, text } = req.body
        // 根据客户端传递的参数查询数据
    const data = await User.update({ _id: id }, { text: text })
        // 响应数据
    if (data) {
        res.send({
            status: 201,
            msg: '更新成功'
        })
    } else {
        res.status(400).send({
            status: 400,
            msg: '更新失败'
        })
    }
}
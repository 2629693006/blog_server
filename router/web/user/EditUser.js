const { User } = require("../../../model/agg/user")
const { use } = require("../../router")

module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    // 获取客户端传递的数据
    const { username, Juri, id } = req.body
        // 通过id查询用户数据
    const keyData = await User.findOne({ _id: id })
        // 判断当前编辑的用户信息是否和使用用户id查询的数据一致，一致直接可以进行编辑
    if (username == keyData.username) {
        const data = await User.updateOne({ _id: id }, { username: username, Juri: Juri })
            // 响应数据信息
        Response(data)
    } else {
        // 如果上面的表达式不成立，那么使用用户编辑的用户名继续在数据库中查询是否有这个用户名存在
        const key = await User.findOne({ username: username })
            // 不存在的话直接进编辑
        if (key == null) {
            const data = await User.updateOne({ _id: id }, { username: username, Juri: Juri })
            Response(data)
        } else {
            // 存在的话直接响应信息
            return res.send({
                status: 400,
                msg: '当前用户名已注册...'
            })
        }
    }
    // 响应数据函数
    function Response(data) {
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
}
const { User } = require("../../../model/agg/user");
module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    // 获取客户端搜索数据
    const { Text } = req.query;
    // 在数据库中模糊查询
    const data = await User.find({ username: { $regex: Text, $options: 'i' } })
        // 响应数据
    if (data) {
        res.send({
            status: 200,
            data: data,
            msg: '查询成功'
        })
    } else {
        res.send({
            status: 400,
            msg: '查询失败'
        })
    }
}
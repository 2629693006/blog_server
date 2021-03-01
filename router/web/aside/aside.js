// 菜单集合
const { Aside } = require('../../../model/agg/aside')
module.exports = async(req, res) => {
    // 判断用户登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    // 查询菜单数据
    const data = await Aside.find()
        // 响应数据
    if (data) {
        res.send({
            status: 200,
            data: data,
            msg: '获取菜单列表成功'
        })
    } else {
        res.send({
            status: 400,
            msg: '获取菜单列表失败'
        })
    }
}
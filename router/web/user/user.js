// 用户集合
const { User } = require('../../../model/agg/user')
    // 导入分页获取数据模块
const pageCount = require('mongoose-sex-page')
module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    const { pagesize, pagenum } = req.query;
    // 查询所有用户列表
    const userKey = await User.findOne({ _id: req.sessionStore.UserId })
        // 权限查询
    if (userKey.Juri == 'admin') {
        // 分页查询数据
        const data = await pageCount(User).page(pagenum).size(pagesize).display(pagesize).exec()
        var total = await User.countDocuments()
        error(data.records)
    } else {
        const data = await User.find({ _id: req.sessionStore.UserId })
        error(data)
    }
    // 响应数据
    function error(data) {
        if (data) {
            res.send({
                status: 200,
                data: data,
                total: total,
                msg: '获取列表成功'
            })
        } else {
            res.send({
                status: 400,
                msg: '获取列表失败'
            })
        }
    }
}
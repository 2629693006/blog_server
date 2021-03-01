// 导入文章集合
const { Article } = require("../../model/agg/article");
// 导入分页模块
const mongoosePage = require('mongoose-sex-page');
// 用户集合
const { User } = require("../../model/agg/user");
module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    // 获取客户端请求参数
    const { pagesize, pagenum, UserId } = req.query
        // 查询用户信息
    const keyData = await User.findOne({ _id: UserId })
        // 判断当前用户是否是管理员
    if (keyData.Juri == 'admin') {
        // 如果是管理员侧搜索所有文章信息实现分页查询
        const AdminData = await mongoosePage(Article).page(pagenum).size(pagesize).display(pagesize).exec()
            // 调用响应函数
        Respon(AdminData)
    } else {
        // 如果不是管理员就根据用户的的id进行查询关联的文章信息
        const keyData = await mongoosePage(Article).find({ author: UserId }).page(pagenum).size(pagesize).display(pagesize).exec()
        Respon(keyData)
    }
    // 响应函数
    function Respon(data) {
        // 响应数据
        if (data.records) {
            res.send({
                status: 200,
                data: data.records.reverse(),
                total: data.total,
                msg: '获取成功'
            })
        } else {
            res.send({
                status: 400,
                msg: '获取失败'
            })
        }
    }
}
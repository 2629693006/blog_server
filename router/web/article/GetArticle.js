// 导入文章集合
const { Article } = require("../../../model/agg/article");
// 导入分页模块
const mongoosePage = require('mongoose-sex-page')
module.exports = async(req, res) => {
    // 获取客户端请求参数
    const { pagesize, pagenum } = req.query
        // 实现分页查询
    const data = await mongoosePage(Article).page(pagenum).size(pagesize).display(pagesize).exec()
        // 响应数据
    if (data) {
        res.send({
            status: 200,
            data: data.records.reverse(),
            total: data.total,
            msg: '获取成功-顺序'
        })
    } else {
        res.status(400).send({
            status: 400,
            msg: '获取失败'
        })
    }
}
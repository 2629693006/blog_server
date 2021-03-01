// 分类集合
const { TypeData } = require('../../../model/agg/Type')
module.exports = async(req, res) => {
    // 查询分类
    const data = await TypeData.find({})
        // 响应数据
    if (data) {
        res.send({
            status: 200,
            data: data,
            msg: '获取分类列表成功'
        })
    } else {
        res.send({
            status: 400,
            msg: '获取分类失败'
        })
    }
}
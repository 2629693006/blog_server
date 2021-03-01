// 文章集合
const { Article } = require("../../../model/agg/article");
module.exports = async(req, res) => {
    // 获取客户端传递的文章id
    const { id } = req.params
        // 判断id是否为真
    if (!id) {
        return res.send({
            status: 400,
            msg: '查看失败'
        })
    }
    // 根据传递的id查询数据
    const data = await Article.findOne({ _id: id })
        // 响应
    if (data) {
        res.send({
            status: 200,
            data: data,
            msg: '获取成功'
        })
    } else {
        res.send({
            status: 400,
            msg: '获取失败'
        })
    }
}
// 文章集合
const { Article } = require("../../../model/agg/article");
module.exports = async(req, res) => {
    // 获取客户端传递的参数
    const { count, id } = req.body;
    // 更新数据
    const data = await Article.updateOne({ _id: id }, { FabulousCount: count })
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
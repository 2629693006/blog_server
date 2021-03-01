// 文章集合
const { Article } = require("../../../model/agg/article");
module.exports = async(req, res) => {
    // 查询文章数据
    const data = await Article.find()
        // 响应数据
    if (data) {
        res.send({
            status: 200,
            // 对数据进行分割
            data: data.reverse().slice(0, 5),
            msg: '获取成功'
        })
    } else {
        res.send({
            status: 400,
            msg: '获取失败'
        })
    }
}
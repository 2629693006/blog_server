const { Article } = require("../../../model/agg/article");
module.exports = async(req, res) => {
    const data = await Article.find()
    data.sort((a, b) => {
            return b.FabulousCount - a.FabulousCount
        })
        // 响应数据
    if (data) {
        res.send({
            status: 200,
            // 对数据进行分割
            data: data.slice(0, 5),
            msg: '获取成功'
        })
    } else {
        res.send({
            status: 400,
            msg: '获取失败'
        })
    }
}
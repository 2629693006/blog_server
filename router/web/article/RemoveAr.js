const { Article } = require("../../../model/agg/article");
module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    // 获取客户端传递的参数
    const { id } = req.params
        // 删除文章信息
    const data = await Article.deleteOne({ _id: id })
        // 响应数据
    if (data) {
        res.send({
            status: 200,
            msg: '删除成功'
        })
    } else {
        res.status(400).send({
            status: 400,
            msg: '删除失败'
        })
    }
}
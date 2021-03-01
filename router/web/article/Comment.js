// 评论集合
const { Comment } = require("../../../model/agg/comm");
module.exports = async(req, res) => {
    // 获取客户端传递的数据
    const query = req.body
        // 把评论信息存储到数据库中
    const data = await Comment.create({
            commText: query.CommText,
            User: query.User,
            Fabulous: 0,
            email: query.email,
            articleId: query.id,
            status: '0'
        })
        // 响应信息
    if (data) {
        return res.send({
            status: 201,
            msg: '评论成功'
        })
    } else {
        return res.send({
            status: 400,
            msg: '评论失败'
        })
    }
}
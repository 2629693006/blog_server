// 评论集合
const { Comment } = require("../../../model/agg/comm");
module.exports = async(req, res) => {
    // 获取客户端传递的参数
    const { id } = req.params;
    // 根据文章的id查询关联的文章的评论信息
    const data = await Comment.find({ articleId: id })
        // 响应数据
    if (data) {
        return res.send({
            status: 200,
            data: data,
            total: data.length,
            msg: '评论成功'
        })
    } else {
        return res.send({
            status: 400,
            msg: '评论失败'
        })
    }
}
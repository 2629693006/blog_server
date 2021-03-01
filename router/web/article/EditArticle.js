// 文章集合
const { Article } = require("../../../model/agg/article");
module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    // 获取客户端传递的参数
    const { id } = req.params
    const { title, Type, describe, Tid } = req.body;
    console.log(Type);
    console.log(Tid);
    // 更新数据
    const data = await Article.updateOne({ _id: id }, { Type_Id: Tid, article_Title: title, article_Type: Type, article_describe: describe })
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
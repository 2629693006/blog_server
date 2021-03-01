// 分类集合
const { TypeData } = require('../../../model/agg/Type')
    // 文章集合
const { Article } = require('../../../model/agg/article')
module.exports = async(req, res) => {
    // 判断登录状态
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
    }
    const params = req.body;
    console.log(params);
    // 获取分类数据
    const Tydata = await TypeData.findOne({ _id: params.article_pId })
        // 创建文章数据
    const data = await Article.create({
            article_Title: params.article_Title,
            article_describe: params.article_describe,
            article_Type: Tydata.name,
            article_User: params.article_User.username,
            article_content: params.article_content,
            article_cover: params.article_cover,
            author: params.article_User.id,
            Type_Id: params.article_pId,
            FabulousCount: 0,
            CommentCount: 0,
            article_State: '0'
        })
        // 响应数据
    if (data) {
        res.send({
            status: 201,
            msg: '发布成功'
        })
    } else {
        res.status(400).send({
            status: 400,
            msg: '发布失败'
        })
    }
}
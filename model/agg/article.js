// 数据库模块
const mongoose = require('mongoose')
    // 创建文章集合
const ArticleSchema = new mongoose.Schema({
    // 标题
    article_Title: {
        type: String,
        required: true
    },
    // 标题
    article_describe: {
        type: String,
        required: true
    },
    // 分类名称
    article_Type: {
        type: String,
        required: true
    },
    // 用户名
    article_User: {
        type: Object,
        required: true
    },
    // 文章内容
    article_content: {
        type: String,
        required: true
    },
    // 封面
    article_cover: {
        type: String
    },
    // 点赞数量
    FabulousCount: {
        type: Number,
    },
    // 评论数量
    CommentCount: {
        type: Number
    },
    article_State: {
        type: String
    },
    // 关联用户集合
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // 分类id
    Type_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type'
    },
    Time: {
        type: Date,
        default: Date.now
    }
})
const Article = mongoose.model('article', ArticleSchema)
module.exports = {
    Article
}
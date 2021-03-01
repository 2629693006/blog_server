// 数据库模块
const mongoose = require('mongoose')
    // 评论集合
const CommSchema = new mongoose.Schema({
    // 评论内容
    commText: {
        type: String,
        required: true
    },
    User: {
        type: String,
        required: true
    },
    // 评论点赞
    Fabulous: {
        type: Number
    },
    email: {
        type: String,
        required: true
    },
    // 文章关联
    articleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },
    // 状态
    status: {
        type: String
    },
    // 评论时间
    Time: {
        type: Date,
        default: Date.now
    }
})

// 创建数据库评论集合
const Comment = mongoose.model('Comment', CommSchema)
module.exports = {
    Comment
}
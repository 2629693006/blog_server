// 导入服务器模块
const express = require('express')
    // 构建模块化理由
const router = express.Router()
    // 登录接口
router.post('/login', require('./web/login'))
    // 侧边栏接口
router.get('/home/aside', require('./web/aside/aside'))
    // 用户接口
router.get('/user', require('./web/user/user'))
    // 添加用户
router.post('/User/Adduser', require('./web/user/addUser'))
    // 用户搜索
router.get('/User/SearchUser', require('./web/user/Serach_User'))
    // 修改用户状态
router.put('/modify/User', require('./web/user/UserStatus'))
    // 删除用户信息
router.delete('/remove/User/:id', require('./web/user/remove'))
    // 编辑用户信息
router.put('/Edit/User', require('./web/user/EditUser'))
    // 获取分类列表
router.get('/Type/list', require('./web/Type/type'))
    // 文章封面上传
router.post('/upload', require('./web/upload/formidable'))
    // 文章图片
router.post('/article/upload', require('./web/upload/articleForm'))
    // 添加文章
router.post('/Add_Article', require('./web/article/Article'))
    // 获取文章信息
router.get('/obtain/article', require('./admin/GetArticle_admin'))
    // 编辑文章信息
router.put('/Edit/article/:id', require('./web/article/EditArticle'))
    // 删除文章数据
router.delete('/Remove/Article/:id', require('./web/article/RemoveAr'))
    // 搜索文章信息
router.get('/serach/article', require('./web/article/Serach'))
    // 获取个人信息
router.get('/keyUser/:id', require('./web/user/keyUser'))
    // 编辑用户个人介绍信息
router.put('/keyUser/text', require('./web/user/text'))
router.get('/index', require('./web/bemo'))
    // web端获取文章数据信息
router.get('/web/article', require('./web/article/GetArticle'))
    // 获取单条文章信息
router.get('/keyArticle/:id', require('./web/article/GetKeyarticle'))
    // 文章评论
router.post('/article/comment', require('./web/article/Comment'))
    // 获取评论信息
router.get('/keyArticle/comment/:id', require('./web/article/GetComment'))
    // 获取分类文章信息
router.get('/articleType/:id', require('./web/article/Typearticle'))
    // 获取最新发布的文章信息
router.get('/newest/article', require('./web/article/Newest'))
    // 获取热门文章
router.get('/Hot/article', require('./web/article/Hot'))
    // 编辑观看量
router.post('/watch/article', require('./web/article/CountHot'))




// 把模块化理由向外抛出
module.exports = router
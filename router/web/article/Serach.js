// 导入用户集合和文章集合
const { Article } = require("../../../model/agg/article");
const { User } = require("../../../model/agg/user");
module.exports = async(req, res) => {
    // 获取客户端传递的参数
    const { id, Text } = req.query
    console.log(req.query);
    // 根据客户端传递的参数查询用户数据
    const data = await User.findOne({ _id: id })
        // 判断查询到的用户数据是否为管理员
    console.log(data);
    return
    if (data.Juri != 'admin') {
        // 如果不是根据用户的id查询关联的文章信息
        const keyData = await Article.find({ author: id, article_Title: { $regex: Text, $options: "gi" } })
        Data(keyData)
    } else {
        // 根据客户端传递的信息查询用户数据
        const UserKey = await User.findOne({ username: Text })
            // 如果查询用户数据为null(空)那么用户可能是使用标题查询
        if (UserKey == null) {
            // 所以我们使用标题的进行模糊匹配查询文章信息
            const AdminData = await Article.find({ article_Title: { $regex: Text, $options: 'gi' } })
            Data(AdminData)
        } else {
            // 如果是用户用户查询文章的话，那么先判断输入的用户名和查询的用户名是否一致，一致的话使用用户名查询文章信息
            if (Text == UserKey.username) {
                const AdminData = await Article.find({ article_User: Text })
                Data(AdminData)
            }
        }
    }
    // 处理响应数据的函数
    function Data(val) {
        if (val.length != 0) {
            res.send({
                status: 200,
                data: val,
                msg: '获取数据成功'
            })
        } else {
            res.send({
                status: 400,
                data: [],
                msg: '查询不到' + Text + '相关文章...'
            })
        }
    }
}
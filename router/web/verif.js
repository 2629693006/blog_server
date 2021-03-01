// 判断登录状态
module.exports = (req, res) => {
    if (!req.sessionStore.token) {
        return res.send({ status: 400, msg: '请先登录!' })
        var a = 0
    }
}
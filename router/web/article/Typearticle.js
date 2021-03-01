const { Article } = require("../../../model/agg/article");
const mongoosePage = require('mongoose-sex-page')
module.exports = async(req, res) => {
    const { id } = req.params;
    const { pagenum, pagesize } = req.query
    const data = await mongoosePage(Article).find({ Type_Id: id }).page(pagenum).size(pagesize).display(pagesize).exec()
    console.log(data);
    // 响应数据
    if (data) {
        res.send({
            status: 200,
            data: data.records.reverse(),
            total: data.total,
            msg: '获取成功'
        })
    } else {
        res.status(400).send({
            status: 400,
            msg: '获取失败'
        })
    }
}
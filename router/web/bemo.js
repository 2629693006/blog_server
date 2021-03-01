const template = require('art-template')
module.exports = (req, res) => {
    const html = template('index', { data: { name: 'AJIAN' } })
    res.end(html)
}
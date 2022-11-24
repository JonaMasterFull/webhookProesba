const { response } = require('express')

const webhookGet = (req, res = response) => {
    const body = req.body;

    res.status(200).json({
        msg: 'Get Api',
        body: body
    })
}

const webhookPost = (req, res) => {

    const body = req.body;

    res.status(200).json({
        msg: 'Post Api',
        body
    })
}

module.exports = {
    webhookGet,
    webhookPost
}
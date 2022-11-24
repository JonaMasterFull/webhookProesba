const { response } = require('express')

const webhookGet = (req, res = response) => {

    res.status(200).json({
        msg: 'Get Api'
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
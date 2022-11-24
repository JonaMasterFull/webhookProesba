const { response } = require('express')

const webhookGet = (req, res = response) => {

    res.status(200).json({
        msg: 'Get Api'
    })
}

const webhookPost = (req, res) => {

    res.status(200).json({
        msg: 'Post Api'
    })
}

module.exports = {
    webhookGet,
    webhookPost
}
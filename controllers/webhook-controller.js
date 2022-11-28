const { response } = require('express')


const webhookPost = (req, res) => {

    const body = req.body;

    console.log(body);

    res.status(200).json({
        msg: 'Post Api',
        body
    })
}

module.exports = {
    webhookPost
}
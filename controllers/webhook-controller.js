const { response } = require('express');
const CreatedOrder = require('../models/createdOrder');


const webhookPost = async (req, res) => {

    const createdOrder = new CreatedOrder();

    const body = req.body;

    console.log(body);

    createdOrder.ViewStatusUpdate(body.status, body);


    res.status(200).json({
        msg: 'Post Api',
        body
    });

}


module.exports = {
    webhookPost
}
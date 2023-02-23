const { response } = require('express');
const CreatedOrder = require('../models/createdOrder');


const webhookPost = async (req, res) => {

    const createdOrder = new CreatedOrder();

    const body = req.body;

    const order = await createdOrder.ViewStatusUpdate(body.status, body);


    res.status(200).json({
        msg: 'Post Api',
        body: order
    });

}


module.exports = {
    webhookPost
}
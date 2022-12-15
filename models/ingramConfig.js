const { axios } = require('axios');
const Datas = require('./createdOrder');

require('dotenv').config()

const infoData = new Datas();

class IngramConfig{

    async crearOrderIngram(){
        const data = await infoData.ViewStatusUpdate()


        console.log(data , ps);
    }

    
}

const crear = async () => {
    const order = new IngramConfig();

    const l = await order.crearOrderIngram();

}

crear()

module.exports = IngramConfig
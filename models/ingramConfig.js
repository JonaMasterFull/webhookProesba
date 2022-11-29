const { axios } = require('axios');
const Tokens = require('./tokensIngram');
require('dotenv').config()


class IngramConfig{

    get headersOrders () {
        
        return { 
            'IM-CustomerNumber': '50-000060',
            'IM-CountryCode': 'MX',
            'IM-CorrelationID': 'fbac82ba-cf0a-4bcf-fc03-0c5084',
            Authorization: `${ process.env.TOKEN }`
        }
    }
    
}

// const crear = async () => {
//     const order = new IngramConfig();

//     const l = order.headersOrders;

//     console.log(l);
// }

// crear()

module.exports = IngramConfig
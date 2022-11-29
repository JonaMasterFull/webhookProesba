const axios = require('axios');
require('dotenv').config();

class Tokens {

    url = 'https://api.ingrammicro.com:443/oauth/oauth30/token'
    
    
    get paramsTokensIngram(){
        return {
            'grant_type': 'client_credentials',
            'client_id': process.env.CLIENT_ID,
            'client_secret': process.env.CLIENT_SECRECT
        }
    }

    async getTokens(){
        try {
            const response = await axios.get(this.url, { params: this.paramsTokensIngram });
            
            const token = response.data.access_token;

            return token;

        } catch (error) {
            throw error;
        }
    }

}

const tokenNew = async () => {
    const token = new Tokens();

    const data = await token.getTokens();

    console.log(data);
}

tokenNew()

module.exports = Tokens;


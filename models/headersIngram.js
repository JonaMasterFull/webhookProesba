const Tokens = require('./tokensIngram')

const tokenID = new Tokens();

const headersIngrams = async() => {
    try{  const token = await tokenID.getTokens();

        let data = {
            headers: {
              'Content-Type': 'application/json',
              'IM-CustomerNumber': '50-000060',
              'IM-CorrelationID': 'fbac82ba-cf0a-4bcf-fc03-0c5084',
              'IM-CountryCode': 'MX',
              Authorization: `Bearer ${token}`,
            }
        }

        console.log(data);
    
        return data;


        } catch(err){
          console.log('IngramHeader helper error ',err.response.data)
        }
}


module.exports = { headersIngrams }
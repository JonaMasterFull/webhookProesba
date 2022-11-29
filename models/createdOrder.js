
class CreatedOrder {
    object= {}
    
    
    async ViewStatusUpdate(status, data){
        if (status === 'processing'){
            console.log('Si es Processing');

            const customerOrderNumber = data.id
            const notes = data.customer_note
            const shipToInfo = {
                name1: data.shipping.first_name,
                name2: data.shipping.last_name,
                companyName: data.shipping.company,
                addressLine1: data.shipping.address_1,
                addressLine2: data.shipping.address_2,
                city:  data.shipping.city,
                state: data.shipping.state,
                postalCode: data.shipping.postcode,
                countryCode: data.shipping.country,
                phoneNumber: data.billing.phone  
            }

            const lines = data.line_items.map((items, index)=> {
                return {
                    'customerLineNumber': index + 1,
                    'ingramPartNumber': items.sku,
                    'quantity': items.quantity
                }
            });

            console.log(customerOrderNumber, notes, shipToInfo,lines);
               
            
        }
        else {
            console.log('No es Processing');
        }
    }
}

module.exports = CreatedOrder;
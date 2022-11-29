
class CreatedOrder {
    
    async ViewStatusUpdate(status, data){
        if (status === 'processing'){
            console.log('Si es Processing');

            const customerOrderNumber = data.id
               
            console.log(customerOrderNumber);
        }
        else {
            console.log('No es Processing');
        }
    }
}

module.exports = CreatedOrder;
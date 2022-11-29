
class CreatedOrder {
    
    async ViewStatusUpdate(status, data){
        if (status === 'processing'){
            console.log('Si es Processing');
        }
        else {
            console.log('No es Processing');
        }
    }
}

module.exports = CreatedOrder;
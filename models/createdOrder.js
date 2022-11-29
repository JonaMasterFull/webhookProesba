
class CreatedOrder {
    
    async ViewStatusUpdate(status, data){
        if (status === 'processing'){
            console.log('Si es Processing');

            const datos = data.map((item) => {
                item.id
            })

            console.log(datos);
        }
        else {
            console.log('No es Processing');
        }
    }
}

module.exports = CreatedOrder;
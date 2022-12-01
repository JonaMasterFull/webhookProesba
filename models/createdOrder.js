const axios = require('axios');


class CreatedOrder {
    
    async ViewStatusUpdate(status, data){


        if (status === 'processing'){
            console.log('Si es Processing');

            const customerOrderNumber = `RSF_${data.id}`
            const notes = data.customer_note

            const estado = await this.EstadosUpdate(data.shipping.state);

            const shipToInfo = {
                name1: data.shipping.first_name,
                name2: data.shipping.last_name,
                companyName: data.shipping.company,
                addressLine1: data.shipping.address_1,
                addressLine2: data.shipping.address_2,
                city:  data.shipping.city,
                state: estado,
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

    async EstadosUpdate(Estado){

        let state = Estado.toUpperCase()

        switch (state) {
                case 'AGU': state = "AG"; break;
                case 'BCN': state = "BN"; break;
                case 'BCS': state = "BS"; break;
                case 'CAM': state = "CA"; break;
                case 'CDMX': state = "DF"; break;
                case 'CHS': state = "CI"; break;
                case 'CHS': state = "CH"; break;
                case 'COA': state = "CZ"; break;
                case 'COL': state = "CL"; break;
                case 'DGO': state = "DU"; break;
                case 'EM': state = "ME"; break;
                case 'GRO': state = "GA"; break;
                case 'GRO': state = "GE"; break;
                case 'HID': state = "HI"; break;
                case 'JAL': state = "JA"; break;
                case 'MICH': state = "MI"; break;
                case 'MOR': state = "MO"; break;
                case 'NAY': state = "NA"; break;
                case 'NL': state = "NL"; break;
                case 'OAX': state = "OA"; break;
                case 'PUE': state = "PU"; break;
                case 'QRO': state = "QA"; break;
                case 'QR': state = "QR"; break;
                case 'SLP': state = "SA"; break;
                case 'SIN': state = "SI"; break;
                case 'SON': state = "SO"; break;
                case 'TAB': state = "TB"; break;
                case 'TLA': state = "TM"; break;
                case 'TLA': state = "TL"; break;
                case 'VER': state = "VE"; break;
                case 'YUC': state = "YU"; break;
                case 'ZAC': state = "ZA"; break;
                default: state = "15"
            }
            return state;
    }
    
}

module.exports = CreatedOrder;
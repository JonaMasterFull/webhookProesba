const axios = require("axios");
const headers = require('./headersIngram');
const fs = require('fs');

class CreatedOrder {

  url = 'https://api.ingrammicro.com:443/resellers/v6/orders'
  urlOrder = '../orders/'

  async ViewStatusUpdate(status, data) {
    if (status === "processing") {
      try {
        console.log("Orden en Processing");

      const customerOrderNumber = `RSF_${data.id}`;
      const notes = data.customer_note;

      const estado = this.EstadosUpdate(data.billing.state);

      const postalCode = data.billing.postcode.substring(0, 9);
      const companyName = data.billing.company.substring(0, 34);

      const contacto = `${data.billing.first_name} ${data.billing.last_name}`;

      const direccion1 = data.billing.address_1;
      const direccion2 = data.billing.address_2;

      let addressLine1 = "";
      let addressLine2 = "";

      if (direccion1.length > 35) {
        addressLine1 = direccion1.slice(0, 34);
        addressLine2 = direccion1.slice(35);
      } else {
        addressLine1 = direccion1;
        addressLine2 = direccion2;
      }

      const shipToInfo = {
        contact: contacto.substring(0, 34),
        companyName: companyName,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: data.billing.city,
        state: estado,
        postalCode: postalCode,
        countryCode: data.billing.country,
        phoneNumber: data.billing.phone,
      };

      const lines = data.line_items.map((items, index) => {
        return {
          customerLineNumber: index + 1,
          ingramPartNumber: items.sku,
          quantity: items.quantity,
        };
      });

      //console.log(customerOrderNumber, notes, shipToInfo, lines);

      let datos = {
        customerOrderNumber: customerOrderNumber,
        notes: notes,
        shipToInfo: shipToInfo,
        lines: lines,
        additionalAttributes: [
            {
              "attributeName": "allowDuplicateCustomerOrderNumber",
              "attributeValue": "false"
            },
            {
              "attributeName": "allowOrderOnCustomerHold",
              "attributeValue": "true"
            },
        ]
      }

      fs.writeFileSync(`${this.urlOrder}_${customerOrderNumber}.txt`, JSON.stringify(datos))

      console.log("Ordenes Enviadas");

      const config = await headers();

      const enviar = await axios.post(this.url, datos, config)

      console.log(enviar);

      return enviar
      } catch (error) {
        fs.writeFileSync(`${this.urlOrder}_Error_${customerOrderNumber}.txt`, JSON.stringify(error))
        throw error
      }

    } else {
      console.log("Orden no Processing");
    }
  }

  EstadosUpdate(Estado) {
    let state = Estado.toUpperCase();

    switch (state) {
      case "AGU":
        state = "AG";
        break;
      case "BCN":
        state = "BN";
        break;
      case "BCS":
        state = "BS";
        break;
      case "CAM":
        state = "CA";
        break;
      case "CMX":
        state = "CM";
        break;
      case "CHS":
        state = "CS";
        break;
      case "CHH":
        state = "CH";
        break;
      case "COA":
        state = "CO";
        break;
      case "COL":
        state = "CL";
        break;
      case "DUR":
        state = "DU";
        break;
      case "MEX":
        state = "ME";
        break;
      case "GUA":
        state = "GU";
        break;
      case "GRO":
        state = "GR";
        break;
      case "HID":
        state = "HI";
        break;
      case "JAL":
        state = "JA";
        break;
      case "MIC":
        state = "MI";
        break;
      case "MOR":
        state = "MO";
        break;
      case "NAY":
        state = "NA";
        break;
      case "NLE":
        state = "NL";
        break;
      case "OAX":
        state = "OA";
        break;
      case "PUE":
        state = "PU";
        break;
      case "QUE":
        state = "QU";
        break;
      case "ROO":
        state = "RO";
        break;
      case "SLP":
        state = "SL";
        break;
      case "SIN":
        state = "SI";
        break;
      case "SON":
        state = "SO";
        break;
      case "TAB":
        state = "TB";
        break;
      case "TAM":
        state = "TM";
        break;
      case "TLA":
        state = "TL";
        break;
      case "VER":
        state = "VE";
        break;
      case "YUC":
        state = "YU";
        break;
      case "ZAC":
        state = "ZA";
        break;
      default:
        state = "CM";
    }
    return state;
  }

}



module.exports = CreatedOrder;

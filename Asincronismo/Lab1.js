const axios = require("axios");
const fs = require("fs").promises;

axios
  .get("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((response) => {
    var data = response.data.bpi;
    var monedas = ["EUR", "USD", "GBP"]; 
    var info = [];

      monedas.forEach((bit) => {
      var sig = "" + bit + ": " + data[bit].rate.toString();
      info.push(sig);
    });

    var result = ["Valor estimado de Bitcoin es:\n"];
    console.log(result[0]);

    info.forEach((dts) => {
      console.log(dts);
      result.push(dts.toString() + "\n");
    });

    fs.writeFile("excel_bitcoin.csv", result, (errores) => {
            console.log(errores)
    })
      
  });

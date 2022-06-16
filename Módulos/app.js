/*
	const readline = require("readline"),
	  fs = require("fs"),
	  leer = "Carros.txt";
	
	let lector = readline.createInterface({
	  input: fs.createReadStream(leer),
	});
	
	lector.on("line", (linea) => {
	  console.log("", linea);
	});*/

	var fs = require("fs");
	var stringify = require("csv-stringify");
	
	var data = [
	  {
	    Marca: "Toyota",
	    Modelo: "RAV4",
	    Año: "2020",
            Color: “Negro”,
	  },
	  {
            Marca: "Nissan",
	    Modelo: "Versa",
	    Año: "2015",
            Color: “Gris”,
	  },
	  {
            Marca: "Honda",
	    Modelo: "Civic",
	    Año: "2018",
            Color: “Azul”,
	  },
	  {
            Marca: "Mitsubishi",
	    Modelo: "Lancer",
	    Año: "2012",
            Color: “Blanco”,
          },
	  {
            Marca: "Toyota",
	    Modelo: "Corolla",
	    Año: "2010",
            Color: “Rojo”,
	  },
	];
	

	stringify.stringify(
	  data,
	  {
	    header: true,
	  },
	  function (err, output) {
	    fs.writeFileSync(__dirname + "/Carros.txt", output);
	  }
	);

function calcularVuelo() {
  let ciudades = document.getElementById("ciudades").value;
  let sillas = document.getElementById("sillas").value;
  let pasajeros = parseInt(document.getElementById("pasajeros").value);
  let maletas = parseInt(document.getElementById("maletas").value);
  let precioPasajeros = document.getElementById("precioPasajeros");
  let precioMaletas = document.getElementById("precioMaletas");
  let precioSillas = document.getElementById("precioSillas");
  let precioTotal = document.getElementById("precioTotal");
  let precio_Ciudades;
  let precio_Maletas;
  let precio_Pasajeros;
  let precio_Sillas;
  let adicional_Sillas;
 
  switch (ciudades) {
    case "Pereira":
      precio_Ciudades = 70000;
      break;
    case "Medellin":
      precio_Ciudades = 100000;
      break;
    case "Cali":
      precio_Ciudades = 90000;
      break;
    case "Bogota":
      precio_Ciudades = 200000;
      break;
    case "Cartagena":
      precio_Ciudades = 350000;
      break;
    default:
      break;
  }
  precio_Pasajeros = precio_Ciudades * pasajeros;
  precioPasajeros.innerHTML = `Subtotal: ${precio_Pasajeros}`;
  if (maletas > 50) {
    precio_Maletas = (maletas - 50) * 15000;
  } else {
    precio_Maletas = 0;
  }
  precioMaletas.innerHTML = `Adicional maletas: ${precio_Maletas}`;
  switch (sillas) {
    case "Normal":
      precio_Sillas = 0;
      break;
    case "Ejecutiva":
      precio_Sillas = 20000;
      break;
    case "VIP":
      precio_Sillas = 40000;
      break;
    default:
      break;
  }
  adicional_Sillas = precio_Sillas * pasajeros;
  precioSillas.innerHTML = `Adicional Sillas: ${adicional_Sillas}`;
  precioTotal.innerHTML = `Total de vuelo: ${
    precio_Pasajeros + precio_Maletas + adicional_Sillas
  }`;
}

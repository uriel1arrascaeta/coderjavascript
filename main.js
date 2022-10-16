

function bienvenida() {
    let tienda = prompt(`HOLA COMO ESTAS?! BIENVENIDA/O A NUESTRA JOYERIA, te gustaria ver alguno de nuestros articulos?
    1-anillo de oro $18000
    2-anillo de plata $7000
    3-cadena de plata (sin stock)
    Esc: para salir o para termina la compra`);
  
    return tienda;
  }
  
  let total = 0;
  let cantidad = 0;
  let contador = 0;
  let tienda = bienvenida();
  
  while (tienda.toLowerCase() != "esc") {
    switch (tienda) {
      case "1" == "anillo de oro":
        cantidad = parseInt(prompt("anillo de oro elije la cantidad de 1 a 3"));
        total += cantidad * 18000; //numero random
        contador += cantidad;
        break;
      case "2":
        cantidad = parseInt(prompt("anillo de plata elije la cantidad de 1 a 3"));
        total += cantidad * 500; //numero random
        contador += cantidad;
        break;
      default:
        alert("producto no encontrado");
        break;
    }
    tienda = bienvenida();
  
    alert(`Usted compró ${contador} productos por el precio de ${total}`);
  }
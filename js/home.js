// MEDIA QUERYS
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


//HEADER
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>500);
})


// BIENVENIDA AL SITIO WEB
let nombre = prompt("Distrito 4\nIngrese su nombre:");
    alert ("Bienvenido " + nombre);


//agregando productos interactuando con html
function agregarProducto (producto,precio) {
    alert ('Reservaste ' + producto + '\nPrecio: $' + precio);
}

//SELECCION DE PRODUCTO A COMPRAR
let producto1 = { nombre: 'Pioneer CDJ 3000 Nxs 2', precio: 30000 };
let producto2 = { nombre: 'Pioneer DJM 900 Nxs 2', precio: 20000 };
let producto3 = { nombre: 'Pioneer XDJ RX3', precio: 20000 };
let producto4 = { nombre: 'Parlante DAS', precio: 20000 };
let producto5 = { nombre: 'GRAVE DAS', precio: 20000};
let producto6 = { nombre: 'Cabezal móvil 7r', precio: 15000};
let producto7 = { nombre: 'Stormer RGB', precio: 8000};
let producto8 = { nombre: 'CABINA 3000', precio: 45000};
let producto9 = { nombre: 'CABINA 3000 2', precio: 40000};
let producto10 = { nombre: 'CABINA NXS 2', precio: 35000};
let producto11 = { nombre: 'COMBO X2', precio: 60000};
let producto12 = { nombre: 'COMBO X4', precio: 100000};
let producto13 = { nombre: 'COMBO SUB', precio: 150000};
let producto14 = { nombre: 'COMBO SUB X4', precio: 100000};

//declarando el arreglo 
let productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14];


//opciones a comprar
let stock = prompt ('Productos:\n1- ' + producto1.nombre + '\n2- ' + producto2.nombre + '\n3- ' + producto3.nombre + '\n4- ' + producto4.nombre + '\n5- ' + producto5.nombre + '\n6- ' + producto6.nombre + '\n7- ' + producto7.nombre + '\n8- ' + producto8.nombre + '\n9- ' + producto9.nombre + '\n10- ' + producto10.nombre + '\n11- ' + producto11.nombre + '\n12- ' + producto12.nombre + '\n13- ' + producto13.nombre + '\n14- ' + producto14.nombre);
let precioTotal = [];

//COMPRA
while (stock != 'f') {
    
    switch (stock) {
        case '1': 
            precioTotal.push({ nombre: producto1.nombre, precio: producto1.precio });
            alert('Reservaste ' + producto1.nombre);
            break;

        case '2': 
            precioTotal.push({ nombre: producto2.nombre, precio: producto2.precio });
            alert('Reservaste ' + producto2.nombre);
            break;

        case '3': 
            precioTotal.push({ nombre: producto3.nombre, precio: producto3.precio });
            alert('Reservaste ' + producto3.nombre);
            break;

        case '4': 
            precioTotal.push({ nombre: producto4.nombre, precio: producto4.precio });
            alert('Reservaste ' + producto4.nombre);
            break;

        case '5': 
            precioTotal.push({ nombre: producto5.nombre, precio: producto5.precio });
            alert('Reservaste ' + producto5.nombre);
            break;

        case '6': 
            precioTotal.push({ nombre: producto6.nombre, precio: producto6.precio });
            alert('Reservaste ' + producto6.nombre);
            break;

        case '7': 
            precioTotal.push({ nombre: producto7.nombre, precio: producto7.precio });
            alert('Reservaste ' + producto7.nombre);
            break;

        case '8': 
            precioTotal.push({ nombre: producto8.nombre, precio: producto8.precio });
            alert('Reservaste ' + producto8.nombre);
            break;

        case '9': 
            precioTotal.push({ nombre: producto9.nombre, precio: producto9.precio });
            alert('Reservaste ' + producto9.nombre);
            break;

        case '10': 
            precioTotal.push({ nombre: producto10.nombre, precio: producto10.precio });
            alert('Reservaste ' + producto10.nombre);
            break;

        case '11': 
            precioTotal.push({ nombre: producto11.nombre, precio: producto11.precio });
            alert('Reservaste ' + producto11.nombre);
            break;

        case '12': 
            precioTotal.push({ nombre: producto12.nombre, precio: producto12.precio });
            alert('Reservaste ' + producto12.nombre);
            break;

        case '13': 
            precioTotal.push({ nombre: producto13.nombre, precio: producto13.precio });
            alert('Reservaste ' + producto13.nombre);
            break;

        case '14': 
            precioTotal.push({ nombre: producto14.nombre, precio: producto14.precio });
            alert('Reservaste ' + producto14.nombre);
            break;
        default: alert ('Opcion incorrecta');
    }   
    
    stock = prompt('¿Desea sumar otro producto más? \nNuestro stock es el siguiente:\n1- ' + producto1.nombre + '\n2- ' + producto2.nombre + '\n3- ' + producto3.nombre + '\n4- ' + producto4.nombre + '\n5- ' + producto5.nombre + '\n6- ' + producto6.nombre + '\n7- ' + producto7.nombre + '\n8- ' + producto8.nombre + '\n9- ' + producto9.nombre + '\n10- ' + producto10.nombre + '\n11- ' + producto11.nombre + '\n12- ' + producto12.nombre + '\n13- ' + producto13.nombre + '\n14- ' + producto14.nombre + '\nSelecciona el número que deseas adquirir\nf-Finalizar elección y continuar con la compra');


}


//MOTOR DE BUSQUEDA
function buscarProducto(busqueda) {
    // Convertir la búsqueda a minúsculas para que sea insensible a mayúsculas
    let busquedaMin = busqueda.toLowerCase();

    // Filtra el arreglo de productos según la búsqueda
    let resultados = productos.filter(function(producto) {
    let nombreMin = producto.nombre.toLowerCase();
    return nombreMin.includes(busquedaMin);
  });

   // Devolver los resultados de la búsqueda
   return resultados;
}


let busqueda = prompt ('Ingrese el producto a buscar: ');
let resultados = buscarProducto(busqueda);
console.log(resultados);


//SUMA DE PRECIOS   
function sumaPrecioTotal () {
    let precioTotal = producto1.precio + producto2.precio + producto3.precio + producto4.precio+ producto5.precio + producto6.precio + producto7.precio + producto8.precio + producto9.precio + producto10.precio + producto11.precio + producto12.precio + producto13.precio + producto14.precio;
    return precioTotal;
}

// //precio total
const total = sumaPrecioTotal();



//FINALIZANDO COMPRA
if (precioTotal == 0 ) {
    alert ('Gracias, lo esperamos pronto!');
}
    else if (precioTotal != 0) {
        alert ('El total de los productos elegidos es de: $' + total);
        let finalizarCompra = prompt ('¿Desea confirmar su compra de $'+total+'?\n1-Para confirmar\n2-Para cancelar');
        if (finalizarCompra == '1'){
            alert ('Felicitaciones, su reserva fue confirmada.');
        } else if (finalizarCompra == '2'){
            alert ('Gracias, lo esperamos pronto!');
        }
    }
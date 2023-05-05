let nombreUsuario = prompt('¡Bienvenido! Ingresa tu nombre para continuar');
while (nombreUsuario === '') {
    alert('Nombre invalido');
    nombreUsuario = prompt('Ingresa tu nombre');
}

alert(nombreUsuario + ', gracias por elegirnos!');

let carrito = []; // 
let productos = [  
{ codigo: '1', nombre: 'Collares', precio: 10990 },
{ codigo: '2', nombre: 'Canil', precio: 15990 },
{ codigo: '3', nombre: 'Bozal', precio: 12990 },
{ codigo: '4', nombre: 'Ropita', precio: 7990 },
{ codigo: '5', nombre: 'Pecheras', precio: 7990 },
{ codigo: '6', nombre: 'Juguetes', precio: 8990 },
{ codigo: '7', nombre: 'Croquetas', precio: 2500 },
{ codigo: '8', nombre: 'Snaks', precio: 2500 }];

let Total = 0;

function buscarProducto(codigo) { 
  return productos.find(producto => producto.codigo === codigo);
}

function sumarTotal(precio) { 
  Total += precio;
}


let mensaje = prompt(nombreUsuario + ' quieres comprar algo para tu mascota?');
while (mensaje.toLowerCase() === 'si') {
    let producto = prompt('1-Collares\n2-Canil\n3-Bozal\n4-Ropita\n5-Pecheras\n6-Juguetes\n7-Croquetas\n8-Premios');
    agregarProductoAlCarrito(producto); 
    mensaje = prompt('¿Deseas comprar algún otro producto?');
    if (mensaje.toLowerCase() === 'no') {
        break;
    }
}

function agregarProductoAlCarrito(codigo) { 
  let producto = buscarProducto(codigo);
  if (producto) {
    carrito.push(producto);
    sumarTotal(producto.precio);
    alert(`Agregaste ${producto.nombre}... ${producto.precio}$`);
  } else {
    alert('Codigo inexistente');
  }
}

alert('Productos en el carrito:');
carrito.forEach(producto => alert(`${producto.nombre}... ${producto.precio}$`));
alert(`Total en el carrito: $${Total}`);
alert('Muchas gracias por tu compra ' +  nombreUsuario + '. En instantes nos pondremos en contacto para finalizar tu pedido.');


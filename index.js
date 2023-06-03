let articulos=[];

fetch("./tarjetas.json")
    .then(responsive => responsive.json())
    .then(data => {
        articulos = data;
        subirArticulos(articulos);
    })

fetch("./libreria.js")



const contenedorArticulos = document.querySelector (".container-cards");
let boton = document.querySelectorAll(".boton-agregar");
let numeroDelCarrito = document.querySelector("#contador-productos");

function subirArticulos(){

    contenedorArticulos.innerHTML ="";

    articulos.forEach(articulo => {

        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =`
            <div class="card-header">${articulo.titulo}</div>
                <div class="card-body">
                    <img class="img_inicio" src="${articulo.imagen}" class="rounded float-start" alt="${articulo.titulo}">
                    <p class="card-text">${articulo.detalle}</p>
                    <p class="articulo-precio">$${articulo.precio}</p>
                        <button type="button" class="boton-agregar btn btn-dark" id="${articulo.id}">Agregar al carrito</button>
                </div>
            </div>
        `;
        contenedorArticulos.append(div);
    })
    sumarBoton();
}


function sumarBoton(){
    boton = document.querySelectorAll(".boton-agregar");

    boton.forEach(boton =>{
        boton.addEventListener("click",agregarAlCarro);
    });
}

let articulosEnElCarro;

let articulosEnElCarroLocalStorage = localStorage.getItem("articulos-en-el-carro");

if(articulosEnElCarroLocalStorage){
    articulosEnElCarro = JSON.parse(articulosEnElCarroLocalStorage);
    refrescarElNumero();
}else{
    articulosEnElCarro = [ ];
}


function agregarAlCarro(evento){

    const idBoton = evento.currentTarget.id;
    const articuloAgregado = articulos.find(articulo => articulo.id === idBoton);
    
    if(articulosEnElCarro.some(articulo => articulo.id === idBoton)){
        const index = articulosEnElCarro.findIndex(articulo => articulo.id === idBoton);
        articulosEnElCarro[index].cantidad++;
    } else{
        articuloAgregado.cantidad = 1;
        articulosEnElCarro.push(articuloAgregado);
    } 
    refrescarElNumero();

    localStorage.setItem("articulos-en-el-carro",JSON.stringify(articulosEnElCarro));
}

function refrescarElNumero(){
    let numeroActualizado = articulosEnElCarro.reduce((acumulador,articulo) => acumulador + articulo.cantidad, 0);
    numeroDelCarrito.innerText = numeroActualizado;
}

/* 
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});


const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('.container-items');

let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});*/
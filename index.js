const articulos=[
    {   
        id:"collar",
        titulo: "collar",
        imagen: "./img/collar.jfif",
        detalle: "Hermosos Collares para todas tus mascotas y de todos los colores",
        precio: 1000,
        cantidad: 1 
    },
    {
        id:"arnes",
        titulo: "arnes",
        imagen: "./img/arnes.png",
        detalle:"Pecheras de todos los tamaños para los consentidos del hogar",
        precio: 1000,
        cantidad: 1 
    },
    {
        id:"snack",
        titulo: "snack",
        imagen: "./img/snack.jpg",
        detalle:"Los mas deliciosos y nutritivos snacks para premiar a los consentiidos",
        precio: 1000,
        cantidad: 1 
    },
    {
        id:"canil",
        titulo: "canil",
        imagen: "./img/canil.jpg",
        detalle: "Canil para la seguridad de tu mascota en los viajes",
        precio: 1000,
        cantidad: 1 
    },
    {
        id:"bozal",
        titulo: "bozal",
        imagen: "./img/bozal.jfif",
        detalle:"Aunque no nos gusten,a veces son necesarios",
        precio: 1000,
        cantidad: 1 
    },
    {
        id:"juguetes",
        titulo: "juguetes",
        imagen: "./img/juguetes.jfif",
        detalle: "Hermosos Collares para todas tus mascotas y de todos los colores",
        precio: 1000,
        cantidad: 1 
    }
];

const contenedorArticulos = document.querySelector (".container-cards");
let boton = document.querySelectorAll(".boton-agregar");
let numeroDelCarrito = document.querySelector("#contador-productos");


function subirArticulos(){
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
subirArticulos();

function sumarBoton(){
    boton = document.querySelectorAll(".boton-agregar");

    boton.forEach(boton =>{
        boton.addEventListener("click",agregarAlCarro);
    });
}

const articulosEnElCarro = [ ];

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



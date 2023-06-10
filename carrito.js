let articulosEnElCarro = localStorage.getItem("articulos-en-el-carro");
articulosEnElCarro = JSON.parse(articulosEnElCarro);

const vacio = document.querySelector("#vacio");
const articulos =document.querySelector(".articulos");
const carroVaciar= document.querySelector(".carro-vaciar");
let eliminar =document.querySelectorAll(".boton-eliminar");
const numeroTotal = document.querySelector("#total");
const comprar = document.querySelector(".comprar");

function subirArticulosCarro(){

    if(articulosEnElCarro && articulosEnElCarro.length > 0){

        vacio.classList.add("disabled");
        articulos.classList.remove("disabled");
        carroVaciar.classList.remove("disabled");

        articulos.innerHTML = "";
        articulosEnElCarro.forEach(articulo =>{
    
            const div=document.createElement("div");
            div.classList.add("articulo");
            div.innerHTML = `
                <img class="articulo-img"src="${articulo.imagen}"alt="${articulo.titulo}">
                        <div class="titulo">
                            <small>Nombre</small>
                            <h3>${articulo.titulo}</h3>
                        </div>
                        <div class="cantidad">
                            <small>Cantidad</small>
                            <p>${articulo.cantidad}</p>
                        </div>
                        <div class="precio">
                            <small>Precio</small>
                            <p>$${articulo.precio}</p>
                        </div>
                        <div class="subtotal">
                            <small>Sub-Total</small>
                            <p>$${articulo.precio*articulo.cantidad}</p>
                        </div>
                        <button type="button" class="boton-eliminar btn btn-outline-primary" id="${articulo.id}">Eliminar</button>
                            `;
            articulos.append(div);
        })
    
    } else{
    
        vacio.classList.remove("disabled");
        articulos.classList.add("disabled");
        carroVaciar.classList.add("disabled");
    }

    refrescarBotonEliminar();
    sumarAlTotal();
}

subirArticulosCarro();

function refrescarBotonEliminar(){

    eliminar = document.querySelectorAll(".boton-eliminar");
    eliminar.forEach(boton =>{
        boton.addEventListener("click",eliminarDelCarro);
    });
}

function eliminarDelCarro(evento){
    const idBoton = evento.currentTarget.id; 
    const index = articulosEnElCarro.findIndex(articulo => articulo.id ===idBoton);  

    articulosEnElCarro.splice(index,1);
    subirArticulosCarro();

    localStorage.setItem("articulos-en-el-carro",JSON.stringify(articulosEnElCarro));
}

function sumarAlTotal(){
    const sumaTotal = articulosEnElCarro.reduce((acumulador,articulo) => acumulador + (articulo.precio * articulo.cantidad), 0 );
    numeroTotal.innerText = `$${sumaTotal}`;

    /* total.innerText = `$${sumaTotal}`; */
}

comprar.addEventListener("click",hacerLaCompra);
function hacerLaCompra(){

    articulosEnElCarro.length = 0 ;
    localStorage.setItem("articulos-en-el-carro",JSON.stringify(articulosEnElCarro));

    vacio.classList.add("disabled");
    articulos.classList.add("disabled");
    carroVaciar.classList.add("disabled");
/* 
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Muchas Gracias por tu Compra.',
        showConfirmButton: false,
        timer: 2000
    }) */
}


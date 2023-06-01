const articulosEnElCarro = JSON.parse(localStorage.getItem("articulos-en-el-carro"));
console.log(articulosEnElCarro);

const vacio = document.querySelector("#vacio");
const articulos =document.querySelector(".articulos");
const carroVaciar= document.querySelector(".carro-vaciar");
const carroComprar = document.querySelector(".carro-comprar");



if(articulosEnElCarro){
    vacio.classList.add("disabled");
    articulos.classList.remove("disabled");
    carroVaciar.classList.remove("disabled");
    carroComprar.classList.add("disabled");

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

}


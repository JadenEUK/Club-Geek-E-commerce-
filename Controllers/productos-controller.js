
const crearNuevoProducto = (imageUrl, name, price, id) => {
    const cardProducto = document.createElement("div")
    cardProducto.classList.add("producto")
    const contenido = `
        
    <img src="${imageUrl}" alt="img">
    <h1 class="product-name"> ${name} </h1>
    <p class="precio">${price}</p>
    <button class="btn">Ver Producto<a class="ver-producto" href="#"></a></button>
    
    `;
    cardProducto.innerHTML = contenido;
    return cardProducto;
   

}

const seccionProductos = document.querySelector('[data-product="productos"]');

const listaProductos = () => {
    return fetch("https://simulacro-api.vercel.app/producto").then((respuesta) => respuesta.json()
    );  
}

listaProductos().then((data) =>{
    data.forEach(product => {
        const nuevoProducto = crearNuevoProducto(product.imageUrl, product.name, product.price);
        seccionProductos.appendChild(nuevoProducto)
     });
}).catch((error) => alert("Ocurrio un error"))


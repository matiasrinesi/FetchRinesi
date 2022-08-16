const tablaProductos = document.getElementById("tablaProductos")
const boton1 = document.getElementById("boton1")

async function mostrarProductos() { // le pongo async para aclarar que va a haber elementos asincronos en la funcion
    const productos = await fetch('./json/productos.json') // defino que algo es asincrono con await
    const productosParseados = await productos.json()
    tablaProductos.innerHTML = `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Equipo</th>
                <th scope="col">Modelo</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col"></th>
            </tr>
        </thead>
            <tbody id="tBody">
            </tbody>
        </table>
    
    `
    productosParseados.forEach((producto, indice) => {
        tBody.innerHTML += `
            <tr id="producto${indice + 1}">
                <th scope="row">${indice + 1}</th>
                <td>${producto.equipo}</td>
                <td>${producto.modelo}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
                <td><button class="btn btn-dark"> Comprar </button>
            </tr>
        `
})}


boton1.addEventListener('click', mostrarProductos)

boton1.addEventListener('click', () => {
    mostrarProductos()
})
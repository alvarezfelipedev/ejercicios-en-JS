class Producto {
    constructor(id, nombre, marca, precio, img) {
        this.id = id,
            this.nombre = nombre,
            this.marca = marca,
            this.precio = precio,
            this.img = img
    }
}

const producto1 = new Producto(1, "Manteca", "Mantequin", 440, "https://www.intramed.net/UserFiles/vinetas/89376.jpg")
const producto2 = new Producto(2, "Ravioles", "Seloivar", 320, "https://www.intramed.net/UserFiles/vinetas/89376.jpg")
const producto3 = new Producto(3, "Queso creama", "Re queson", 250, "https://www.intramed.net/UserFiles/vinetas/89376.jpg")
const producto4 = new Producto(4, "Oregano", "Oreganato", 140, "https://www.intramed.net/UserFiles/vinetas/89376.jpg")
const producto5 = new Producto(5, "Jugo de manzana", "Manzanin", 200, "https://www.intramed.net/UserFiles/vinetas/89376.jpg")
const producto6 = new Producto(6, "Harina", "Trigo feliz", 180, "https://www.intramed.net/UserFiles/vinetas/89376.jpg")


const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

const tBody = document.getElementById("tBody")

const consultaProductos = (estado) => {
    return new Promise((resolve, reject) => {
        if (estado == true) {
            resolve(productos)
        } else {
            reject("No tiene permisos para acceder a esta informacion")
        }
    })
}

consultaProductos(true)
    .then(productos => {
        productos.forEach(producto => {
            tBody.innerHTML += `
            <tr>
                <th scope="row">${producto.id}</th>
                <td>${producto.nombre}</td>
                <td>${producto.marca}</td>
                <td>$ ${producto.precio}</td>
                <td><img src=${producto.img}></td>
                <td><button class="btn btn-primary">COMPRAR</td>
            </tr>
        `
        });
    })
    .catch(error => { console.error(error); })
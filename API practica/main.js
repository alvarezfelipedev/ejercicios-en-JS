// Prueba API CRIPTO YA

const divCripto = document.getElementById("divCripto")

function mostrarDolar() {
    fetch("https://criptoya.com/api/dolar")
        .then(response => response.json())
        .then(({ oficial, solidario, mep, ccl, blue }) => divCripto.innerHTML =
            `
            <div>
                <h1>Cotizaciones del dolar</h1>
                <p>Oficial: $${oficial}</p>
                <p>Solidario: $${solidario}</p>
                <p>Blue: $${blue}</p>
                <p>MEP: $${mep}</p>
                <p>CCL: $${ccl}</p>
            </div>
    `)
}

mostrarDolar() // Para que se muestre por primera vez.

setInterval(() => { mostrarDolar }, 1000) // Para q' se actualice cada 1 seg


// API OPENWEATHER

fetch(`https://hp-api.onrender.com/api/characters`)
.then(response => response.json())
.then(data => {
    const {name: nombre, id} = data[0]
    console.log(nombre, id)
})

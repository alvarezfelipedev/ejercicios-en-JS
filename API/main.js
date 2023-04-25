// API CRIPTOYA - PUBLICA

const divDolar = document.getElementById("divDolar")

function mostrarDolar() {
    fetch("https://criptoya.com/api/dolar") // muestra la cotizacion del dolar.
        .then(response => response.json()) // transforma los datos de JSON a objeto.
        .then(({ oficial, solidario, mep, ccl, blue }) => divDolar.innerHTML =
            `
                <div>
                    <h2>Cotizaciones del dolar</h2>
                    <p>OFICIAL: $${oficial}</p>
                    <p>SOLIDARIO: $${solidario}</p>
                    <p>MEP: $${mep}</p>
                    <p>CCL: $${ccl}</p>
                    <p>BLUE: $${blue}</p>
                </div>
            `
        )
}
mostrarDolar(); // ya q' si es la primera vez, q' el usuario entra, se le muestre la cotizacion y luego de 1min se ejecute de nuevo, con el setInterval.

setInterval(() => {
    mostrarDolar();
},1000)

// API OPENWEATHER

const API_KEY = 'bf750c672b2cc58b3b651795771f0b0d'
const divClima = document.getElementById('divClima')
const form = document.getElementById('idForm') 

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const datForm = new FormData(e.target)

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${datForm.get('ciudad')},${datForm.get('provincia')},${datForm.get('pais')}&limit&appid=${API_KEY}`)

    .then(response => response.json())
    .then(data => {
        const {lat, lon, name: nombre, state:provincia, country: pais} = data[0]
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`)
        .then(response => response.json())
        .then(({weather, main}) => { 
        
            divClima.innerHTML = 
        `
            <div>
                <h3>CLIMA EN: ${nombre}, ${provincia}, ${pais}</h3>
                <p>Temperatura: ${main.temp}°C</p>
                <p>Sensacion termica: ${main.feels_like}</p>
                <p>Presion: ${main.pressure} hPa</p>
                <p>Humedad: ${main.humidity}%</p>
                <p>Descripcion: ${weather[0].description}</p>
            </div>
        `
        })
    })
})

// Guardar datos ingresados en un formulario en un archivo JSON, mostrarlos en una tabla y guardarlos en el storage.
// Ademas permitir cambio a darmode y lightmode. Guardando el modo en el storage.

// Dark Mode

let mode

if (localStorage.getItem('mode')) // Si existe en el localStorage 
{
    mode = localStorage.getItem('dark') // Consulto en el localStorage
} else {
    localStorage.setItem('mode', 'light') // Crearlo
}

if (mode == 'dark') {
    document.body.classList.add("dark")
}


const btnDarkMode = document.getElementById('btnDarkMode')
const btnLightMode = document.getElementById('btnLightMode')

btnDarkMode.addEventListener('click', () => {
    document.body.classList.add("dark")
    localStorage.setItem('mode', 'dark')
})

btnLightMode.addEventListener('click', () => {
    document.body.classList.remove("dark")
    localStorage.setItem('mode', 'light')
})


const formulario = document.getElementById('formulario')
const personas = []

class Persona {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni
    }
}

// Formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputNombre = document.getElementById('nombre').value
    let inputApellido = document.getElementById('apellido').value
    let inputDNI = document.getElementById('dni').value
    
    personas.push(new Persona(inputNombre, inputApellido, inputDNI))

    localStorage.setItem('personas', JSON.stringify(personas))
    
    
   // MOSTRAR EN PANTALLA LOS DATOS INGRESADOS
    
    const myContainer = document.querySelector("#my-container");
    personas.forEach((persona) => {
        const table = document.createElement("table");
        table.innerHTML = `
        <thead>
            <tr>
                <th scope="col">NOMBRE</th>
                <th scope="col">APELLIDO</th>
                <th scope="col">DNI</th>                
            </tr>
        </thead>
        <tbody>
                <tr>
                        <td>${persona.nombre}</td>
                        <td>${persona.apellido}</td>
                        <td>${persona.dni}</td>
                </tr>
        </tbody>
               `
        myContainer.appendChild(table)
    })
})


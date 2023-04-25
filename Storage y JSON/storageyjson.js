// Guardar datos ingresados en un formulario en un archivo JSON, mostrarlos en una tabla y guardarlos en el storage.
// Ademas permitir cambio a darmode y lightmode. Guardando el modo en el storage.

// Dark Mode

const btnDarkMode = document.getElementById('btnDarkMode')
const btnLightMode = document.getElementById('btnLightMode')

let mode = localStorage.getItem('mode')

if (!mode) {
  // Si no existe en el localStorage, crearlo con valor "light"
  localStorage.setItem('mode', 'light')
  mode = 'light'
}

if (mode === 'dark') {
  // Establecer el modo oscuro si estaba habilitado previamente
  document.body.classList.add('dark')
}

btnDarkMode.addEventListener('click', () => {
  // Establecer el modo oscuro
  document.body.classList.add('dark')
  localStorage.setItem('mode', 'dark')
  mode = 'dark'
})

btnLightMode.addEventListener('click', () => {
  // Establecer el modo claro
  document.body.classList.remove('dark')
  localStorage.setItem('mode', 'light')
  mode = 'light'
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

    const tBody = document.getElementById("tBody")
    personas.forEach((persona) => {
        tBody.innerHTML += `
                <tr>
                        <td>${persona.nombre}</td>
                        <td>${persona.apellido}</td>
                        <td>${persona.dni}</td>
                </tr>
        
               `
    })
})


// -- Actulizar texto

let button = document.getElementById('button')

button.addEventListener('click', () => {
    let inputActualizar = document.getElementById('input-actualizar').value
    let p = document.getElementById('p')
    p.innerText = inputActualizar
})


// -- Agregar estructura HTML

let buttonAgregar = document.getElementById('buttonAdd')

buttonAgregar.addEventListener('click', () => {
    let inputAgregar = document.getElementById('input-agregar').value
    
    let titulo = document.createElement("h1")
    titulo.innerHTML = `<h1>${inputAgregar}</h1>`

    // Agregué el h1 dentro del div
    let div = document.querySelector('div')
    div.append(titulo)

})

// -- Actualizar texto

let input = document.getElementById('inputActualizarr')

input.addEventListener('change', () => {
    let inputActualizar = document.getElementById('inputActualizarr').value
    let p = document.getElementById('p')
    p.innerText = inputActualizar
})

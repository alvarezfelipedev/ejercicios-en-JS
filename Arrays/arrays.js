// Ejemplo

const alumnos = ['juan', 'sandra', 'eduardo', 'rodrigo', 'matias', 'vero', 'marcos', 'aye', 'benja']

let nombreEliminar = prompt('Ingrese un nombre a eliminar').toLowerCase()

let indice = alumnos.indexOf(nombreEliminar)

if(indice != -1){
    alumnos.splice(indice,1)
} else{
    alert('Nombre no encontrado')
}
console.log(alumnos)

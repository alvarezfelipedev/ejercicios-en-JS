class Auto {
    constructor(modeloParam, anioParam, motorParam, marcaParam, colorParam){
        this.modelo= modeloParam
        this.anio = anioParam
        this.motor = motorParam
        this.marca = marcaParam
        this.color = colorParam
    }

    saberMarca(modelo){
        console.log(`La marca del ${modelo} es ${this.marca}`);
    }
}

const auto1 = new Auto ('Mustang GT', 2022, 'V8', 'Ford', 'Rojo')
const auto2 = new Auto ('Strada', 2015, 'V5', 'Fiat', 'Blanco')

auto2.saberMarca('Strada')
console.log(auto1)




//Ejercicio ordenando strings
let domicilios = ["Casita", "Casona", "Casoplón", "Casucha", "Casilla", "Casa"]
console.log("Visualizo el array original")
console.log(domicilios)

for (let k = 0; k < domicilios.length; k++) {
    for (let i = 0; i < domicilios.length; i++) {
        if (domicilios[i] > domicilios[i + 1]) {
            let auxiliar = domicilios[i]
            domicilios[i] = domicilios[i + 1]
            domicilios[i + 1] = auxiliar
        }
    }
}
console.log("Visualizo el array ordenado alfabéticamente")
console.log(domicilios)


console.log("-----------------------------------------------------------")


//Ejercicio ordenado de menor a mayor (Numeros)
console.log("Visualizo el array original")
let numeros = [158, 15, 4, 9999, 48]
console.log(numeros)

console.log("Visualizo el array ordenado de menor a mayor")


for (let f = 0; f < numeros.length ; f++) {
    for (let i = 0; i < numeros.length ; i++) {
        if (numeros[i] > numeros[i + 1]) {
            let auxiliar = numeros[i]
            numeros[i] = numeros[i + 1]
            numeros[i + 1] = auxiliar
        }
    }
}

console.log(numeros)


console.log("-----------------------------------------------------------")


//Ejercicio ordenado de mayor a menor (Numeros)
console.log("Visualizo el array original")
let numeros2 = [158, 15, 4, 9999, 48]
console.log(numeros2)

console.log("Visualizo el array ordenado de mayor a menor")


for (let f = 0; f < numeros2.length ; f++) {
    for (let i = 0; i < numeros2.length ; i++) {
        if (numeros2[i] < numeros2[i + 1]) {
            let auxiliar = numeros2[i]
            numeros2[i] = numeros2[i + 1]
            numeros2[i + 1] = auxiliar
        }
    }
}

console.log(numeros2)

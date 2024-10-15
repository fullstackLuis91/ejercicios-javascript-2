let booleano1 = true
let booleano2 =false

let booleanoAnd = booleano1 && booleano2 ;
console.log(booleanoAnd)

let booleanoOr = booleano1 || booleano2 ;
console.log(booleanoOr)

let booleanoNot = !booleano1 
console.log(booleanoNot)
let booleanoNot2 = !booleano2
console.log(booleanoNot2)

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))
console.log(booleanoMix0)

let valorDivision = 17/3
console.log(valorDivision.toFixed(2))

let valorResto = 17%7
console.log(valorResto)

let variableA = 9
let variableB = "9"
if (variableA == variableB)  console.log ("Son iguales");

let mochila = ["libro", "boli", "portatil", "movil", "raton", "llaves", "casco", "auriculares", "agua", "cocacola", "tabaco"] 
if (mochila.length > 10) {
    console.log("no puedo cargar mas elementos")
}
if (mochila >= 2 && mochila <=10) {
    console.log("que bien voy con mi mochila") 
} else {
    console.log("Creo que no necesito una mochila");
}

const contarHasta10 = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < contarHasta10.length; i++) {
    console.log("contarHasta10 nº" + contarHasta10[i])
}

 let diaFestivo = true //"si pones false te saldrá Hoy trabajo"
diaFestivo ? console.log("hoy no trabajo") : console.log("hoy trabajo")

let arrayBucle = []
for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i)
}
console.log(arrayBucle)

let resultado = 0
for (let i = 0; i < arrayBucle.length; i++) {
    resultado += arrayBucle
}
console.log(resultado)  //"esta no la he entendido"

let array = [ "con", "sofia", "aprendiendo", "bucles"]
for (let elemento of array) {
    console.log(elemento)
}

for (let elemento in array) {
    console.log(elemento)
}

let iteracion = 1;
while (iteracion <= 20) {
if (iteracion % 3 === 0) {
    console.log("Patata");
}
iteracion++;
}

















const suma = (a, b) => {
    console.log( a + b )
}
const resta = (a, b) => {
    console.log (a - b)
}
const multiplicacion = (a, b) => {
    console.log (a * b)
}
const division = (a, b) => {
    console.log (a / b)
}
const modulo = (a, b) => {
    console.log (a % b)
}

// Params siempre devuelve String, hay que parsear a int (parseInt())
let params = process.argv
let numa = params[2]
let numb = params[3]

suma(numa, numb)
resta(params[2], params[3])
multiplicacion(params[2], params[3])
division(params[2], params[3])
modulo(params[2], params[3])


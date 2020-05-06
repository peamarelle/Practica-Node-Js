const calculadora = require('./calculadora')
const c = console.log

c(`Suma = ${calculadora.sumar(4, 5)}`)
c(`Suma = ${calculadora.restar(4, 5)}`)
c(`Suma = ${calculadora.multiplicar(4, 5)}`)
c(`Suma = ${calculadora.dividir(4, 5)}`)
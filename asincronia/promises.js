const c = console.log

c('***********Programación asincrónica*************')

c('***********Promesas devuelven un objeto*************')

const cuadrado = value => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({value: value, result: value*value})
        },0 | Math.random() * 100)
    })
}

cuadrado(0)
.then(obj=>{
    c('Inicio promise')
    c(`Promise: ${obj.value}, ${obj.result}`)
    return cuadrado(1)
}) 
.then(obj=>{
    c('Inicio promise')
    c(`Promise: ${obj.value}, ${obj.result}`)
    return cuadrado(2)
}) 
.then(obj=>{
    c('Inicio promise')
    c(`Promise: ${obj.value}, ${obj.result}`)
    return cuadrado(3)
}) 
.then(obj=>{
    c('Inicio promise')
    c(`Promise: ${obj.value}, ${obj.result}`)
    return cuadrado(4)
}) 
.then(obj=>{
    c('Inicio promise')
    c(`Promise: ${obj.value}, ${obj.result}`)
    return cuadrado(5)
}) 
.then(obj=>{
    c('Inicio promise')
    c(`Promise: ${obj.value}, ${obj.result}`)
    return cuadrado(6)
}) 
.then(obj=>{
    c('Inicio promise')
    c(`Promise: ${obj.value}, ${obj.result}`)
    c('Fin promise')
}) 
.catch(err=>c(err))

c('Promise!!!')
const c = console.log

c('***********Programación asincrónica*************')

c('***********Async-await estas funciones internamente usan promesas*************')

const cuadrado = value => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({value: value, result: value*value})
        },0 | Math.random() * 100)
    })
}

async function cuadrados(){
    let obj = await cuadrado(0)
    c(`Promise: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(1)
    c(`Promise: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(2)
    c(`Promise: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(3)
    c(`Promise: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(4)
    c(`Promise: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(5)
    c(`Promise: ${obj.value}, ${obj.result}`)
    c('Fin async fuctions')
}

cuadrados()
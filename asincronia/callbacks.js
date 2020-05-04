const c = console.log

c('***********Programación asincrónica*************')

c('***********CallBacks*************')

const cuadrado = (value, callback) => {
    setTimeout(() => {
        callback(value, value * value)
    }, 0 | Math.random * 100);
}

cuadrado(0, (value, result) => {
    c('Inicio de callback')
    c(`Callback: ${value}, ${result}`)
    cuadrado(1, (value, result) => {
        c(`Callback: ${value}, ${result}`)
        cuadrado(2, (value, result) => {
            c(`Callback: ${value}, ${result}`)
            cuadrado(3, (value, result) => {
                c(`Callback: ${value}, ${result}`)
                cuadrado(4, (value, result) => {
                    c(`Callback: ${value}, ${result}`)
                })
            })
        })
    })
})

/*cuadrado(4, (value, result) => {
    c(`Callback: ${value}, ${result}`)
})*/

c('Callback!!!!!')
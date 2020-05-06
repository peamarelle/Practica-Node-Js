const singleThread = ()=> {

    const c = console.log

    p= process
    c('Posicion 0 Es el ejecutable de Node')
    c(p.argv[0])
    c('Posicion 1 Es el archivo que se ejecuta')
    c(p.argv[1])
    c('En las demás posiciones podemos enviar los parametros que necesitamos')
    p.argv[2] = true
    p.argv[3] = "Hola"
    p.argv[4] = 22

    c(p.argv.map(argumento => argumento))

    c(`También tenemos los datos del proceso`)
    c(`Process ID: ${p.pid}`)
}

module.exports = singleThread
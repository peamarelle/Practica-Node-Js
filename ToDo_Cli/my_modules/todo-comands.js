description = {
    demand:true,
    alias:'d',
    desc:'Descripcion de la tarea'
},completed = {
    default:true,
    alias:'c',
    desc:'cambia el estado de la tarea (completada o pendiente)'
}

const argv = require('yargs')
.command('create', "Crea una tarea por hacer",{description})
.command('read','Lee todas las tareas por hacer')
.command('update', 'actualiza el estado de una tarea',{description,completed})
.command('delete','borra una tarea de la lista',{description})
.help()
.argv

module.exports={argv}
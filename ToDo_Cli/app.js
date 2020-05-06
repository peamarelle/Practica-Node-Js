/*const singleThread = require('./my_modules/single-thread.js')

singleThread()
*/

const colors = require('colors'),
c = console.log,
todoCli = require('./my_modules/todo-comands.js').argv,
todoList = require('./my_modules/todo-list.js')

let toDoCommand = todoCli._[0]

switch (toDoCommand) {
    case 'create':
       let todo =  todoList.create(todoCli.description)
       c(todo.blue)
        break;
    case 'read':
        let todos = todoList.read()

        for (const todo of todos) {
            if(todo.completed){
                c(colors.green('✅',todo.description))
            } else {
                c(colors.red('❌',todo.description))
            }
        }
        c('Read command')
        break;
    case 'update':
        let updated = todoList.update(todoCli.description, todoCli.completed)
        c(updated.blue)
        break;
    case 'delete':
        let deleted = todoList.del(todoCli.description)
        c(deleted)
        break;
    default:
        c('Comando no reconocido, ejecute la opción --help para recibir ayuda'.rainbow)
        break;
}
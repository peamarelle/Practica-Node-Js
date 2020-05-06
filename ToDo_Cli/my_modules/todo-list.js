const fs = require('fs'),
path = require('path'),
toDoData = path.join(__dirname,'todo-data.json')

let todos = []//alamacena  las tareas creadas

const loadData = () => {
    try { 
        todos = require(toDoData)
    } catch (error) {
        todos = []
    }
}

const saveData = () => {
    let data = JSON.stringify(todos)

    fs.writeFile(toDoData,data,err => {
        if(err)throw new Error("No se puede guardar la tarea",err)
    })
}

const create = description => {
    loadData()
    let toDo = {
        description,
        completed:false
    }

    todos.push(toDo)
    saveData()
    return 'Tarea creada'
}

const read = () => {
    loadData()
    return todos
}

const update = (description, completed = true) => {

    loadData()
    let index = todos.findIndex(todo => todo.description === description) 

    if(index>=0){
        todos[index].completed = JSON.parse(completed)
        saveData()
        return 'Tarea actualizado'
    } else {
        return 'La tarea no existe'
    }
}

const del = description => {

    let mensaje
    loadData()
    let newList = todos.filter(todo => todo.description !== description) 

    if(todos.length === newList.length){
        
        mensaje = 'La tarea no existe'

    } else {
        
        todos = newList
        saveData()
        mensaje = 'Tarea eliminada'
    }
    
    return mensaje
}

module.exports = {
    create,
    read,
    update,
    del
}
const fs = require('fs');


let todos = [];

function saveToDB() {
  const data = JSON.stringify(todos);

  fs.writeFile('./db/data.json', data, 'utf8', (error) => {
    if (error) {
      throw new Error('There was an error saving the new todo');
    }
  });

  return data;
}

function loadFromDB() {
  try {
    todos = require('./../db/data.json');
  } catch(error) {
    todos = [];
  }

}

function create(descripcion) {
  loadFromDB();

  const todo = {
    descripcion,
    completado: false, 
  };

  todos.push(todo);
  saveToDB();

  return todo;
}

function list() {
  loadFromDB();
  return todos;
}

function update(descripcion, completado = true) {
  loadFromDB();

  const index = todos.findIndex((todo) => todo.descripcion === descripcion);

  if (index >= 0) {
    todos[index].descripcion = descripcion;
    todos[index].completado = completado;
    saveToDB();

    return true;
  } else {
    return false;
  }

}

function deleteTodo(descripcion) {
  loadFromDB();

  const index = todos.findIndex((todo) => todo.descripcion === descripcion);

  if (index >= 0) {
    todos = todos.filter((_, todoIndex) => {
      return index !== todoIndex;
    });
    console.log(todos);
    saveToDB();
    return true;
  } else {
    return false;
  }

}

module.exports = {
  create,
  list,
  update,
  deleteTodo,
};
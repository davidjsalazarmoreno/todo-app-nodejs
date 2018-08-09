const yargs = require('yargs');

const commandsConfig = {
  create: {
    command: 'crear',
    description: 'Comando para crear una nueva tarea, recibe una descripción.',
    aliases: {
       descripcion: {
        demand: true,
        alias: 'd',
      }
    },
    builder: (...args) => {

    },
  },  
  update: {
    command: 'actualizar',
    description: 'Comando para actualiza una tarea.',
    aliases: {
      descripcion: {
        demand: true,
        alias: 'd',
      },
      completado: {
        default: true,
        alias: 'c',
      },
    },
    builder: (...args) => {

    },
  },  
  deleteTodo: {
    command: 'borrar',
    description: 'Comando para borrar una tarea.',
    aliases: {
      descripcion: {
        demand: true,
        alias: 'd',
      },
    },
    builder: (...args) => {

    },
  },
}

const { create, update, deleteTodo } = commandsConfig;

const argv = yargs
  .command(create.command, create.description, create.aliases, create.builder)
  .command(update.command, update.description, update.aliases, update.builder)
  .command(deleteTodo.command, deleteTodo.description, deleteTodo.aliases, deleteTodo.builder)
  .help()
  .version('0.0.1')
  .argv;

module.exports = {
  argv
};
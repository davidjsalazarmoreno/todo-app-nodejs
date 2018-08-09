const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const { create, list, update, deleteTodo } = require('./por-hacer/por-hacer.js');

const command = argv._[0];

const actions = {
  crear: () => {
    const todo = create(argv.descripcion);
    console.log(todo);
  },    
  listar: () => {
    list().forEach(todo => {
      console.log('=========Por hacer========='.green);
      console.log(todo.descripcion);
      console.log(`Estado: ${todo.completado}`);
      console.log('===========================\n'.green);
    });
  },  
  actualizar: () => {
    const updated = update(argv.descripcion, argv.completado);
    console.log(updated);
  },  
  borrar: () => {
    const deleted = deleteTodo(argv.descripcion);
    console.log(deleted);
  },  
  'default': () => {
    console.log('Comando no reconocido');
  },
};

if (actions.hasOwnProperty(command)) {
  actions[command]();
} else {
  actions['default']();
}

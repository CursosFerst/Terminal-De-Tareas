require('colors');
const { v4: uuidv4 } = require('uuid');
const { inquirerMenu,pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas')



const main = async ( ) => {

    console.clear();
    let opt = '';

    do{

        opt = await inquirerMenu();

        console.log({opt});

        // const tarea = new Tarea('Comparar comida');

        // const tarea = new Tarea('Descripcion de la tarea');
        // const tareas = new Tareas();

        // Asignando tarea.id en tareas.listado
        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);

        await pausa();

    }while(opt !== '0')

}


main();


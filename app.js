require('colors');
const { v4: uuidv4 } = require('uuid');
const { inquirerMenu,
        pausa,
        leerInput} = require('./helpers/inquirer');

const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas')



const main = async ( ) => {

    let opt = '';
    const tareas = new Tareas();

    do{
        // Imprimiendo las opciones 
        opt = await inquirerMenu()

        // Seleccion del resultado en el inquiererMenu()
        switch (opt) {
            case '1':
            const desc = await leerInput('Descripcion: ');
            tareas.crearTarea( desc );
                break;
            case '2':
                console.log(tareas._listado);

                break;
            
        
        }


        await pausa();

    }while(opt !== '0')

}


main();


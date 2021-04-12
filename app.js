require('colors');
const { v4: uuidv4 }    = require('uuid');
const { guardarDataBase, leerDB}   = require('./helpers/guardar_archivo');
const { inquirerMenu,
        pausa,
        leerInput}      = require('./helpers/inquirer');
const Tarea             = require('./models/tarea');
const Tareas            = require('./models/tareas');



const main = async ( ) => {

    let opt = '';
    const tareas = new Tareas();
    
    const tareasDB = leerDB( );
    
    if(tareasDB){
        
        tareas.cargarTareasFromArray(//TODO: mandar un arreglo);
    }
    await pausa();
    
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

        guardarDataBase(tareas.getListadoArr);

        await pausa();

    }while(opt !== '0')

}


main();


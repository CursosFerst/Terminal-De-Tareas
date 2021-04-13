require('colors');
const { v4: uuidv4 }    = require('uuid');
const { guardarDataBase, leerDB}   = require('./helpers/guardar_archivo');
const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostarListadoCheckList}      = require('./helpers/inquirer');
const Tarea             = require('./models/tarea');
const Tareas            = require('./models/tareas');



const main = async ( ) => {

    let opt = '';
    const tareas = new Tareas();
    
    const tareasDB = leerDB( );
    
    if(tareasDB){
        
        tareas.cargarTareasFromArray(tareasDB);
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
                // Imprimimos la lista completa de todo con sus respectivos colores
                tareas.listadoCompleto();
                //  Tareas._listado
                break;

            case '3':
                tareas.listaraPendientesCompletadas();
                break;

            case '4':
                tareas.listarPendientesIncompletas();
                break;

            case '5':
                const ids = await mostarListadoCheckList(tareas.getListadoArr);
                tareas.toggleCompletadas( ids );
                break
            
            case '6':
                const id = await listadoTareasBorrar(tareas.getListadoArr);
                
                if( id !== '0'){
                    
                    const ok = await confirmar('¿Esta seguro?');

                    if( ok ){
                        
                        tareas.borrarTarea( id );
                        console.log('Tarea Borrada');
                    }

                }
                break
            
        
        }

        guardarDataBase(tareas.getListadoArr);

        await pausa();

    }while(opt !== '0')

}


main();


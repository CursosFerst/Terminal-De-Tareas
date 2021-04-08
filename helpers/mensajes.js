const colors = require('colors')


const mostrarMenu = ( ) => {

    return new Promise((resolve) =>{

        // console.clear();
    
        console.log('========================='.blue);
        console.log('Seleccione alguna opcion'.green);
        console.log('========================='.blue);
        console.log(`1. Crear Tarea`.green);
        console.log(`2. Listar tareas`.blue);
        console.log(`3. Listar tareas completadas`.green);
        console.log(`4. Listar tareas pendientes`.blue);
        console.log(`5. Completar tarea(s)`.green);
        console.log(`6. Borrar tarea`.blue);
        console.log(`0. Salir`.green);
    
        // Creando la interfaz de la consola
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        // Pidiendo los valores 
        readline.question('Seleccione una opcion: '.blue, ( resp )=>{
    
            // console.log({resp});
    
            // Cerrando el readline
            readline.close();
            resolve(resp);
    
        })
    });
}


const pausa = ( ) => {

    return new Promise((resolve) => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`${'Presione la tecla'.blue} ${'ENTER'.red} ${'para continuar'.blue} `, ( resp )=>{
            
            // console.log(resp);

            readline.close();
            // Mandando la respuesta del eneter
            resolve();

        })

    })

};

module.exports = {

    mostrarMenu,
    pausa
}
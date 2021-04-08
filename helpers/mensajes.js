const colors = require('colors')


const mostrarMenu = ( ) => {

    console.clear();

    console.log('========================='.blue);
    console.log('Seleccione alguna opcion'.green);
    console.log('=========================\n'.blue);

    console.log(`1. Crear Tarea`.green);
    console.log(`2. Listar tareas`.blue);
    console.log(`3. Listar tareas completadas`.green);
    console.log(`4. Listar tareas pendientes`.blue);
    console.log(`5. Completar tarea(s)`.green);
    console.log(`6. Borrar tarea`.blue);
    console.log(`7. Salir`.green);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione una opcion: ', ( resp )=>{

        console.log({resp});

        // Cerrando el readline
        readline.close();

    })
}


const pausa = ( ) => {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`${'Presione la tecla'.blue} ${'ENTER'.red} ${'para continuar'.blue} `, ( resp )=>{

        readline.close();

    })

};

module.exports = {

    mostrarMenu,
    pausa
}
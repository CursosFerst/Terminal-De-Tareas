const inquirer = require('inquirer');
const colors = require('colors');

const preguntas = 
[   
    {
    type:'list',
    name:'opcion',
    message:'Que desea hacer?',
    choices: [ 
        {
            value: '1',
            name:'1.Crear Tarea'
        },
        {
            value: '2',
            name: '2.Listar Tareas'
        },
        {
            value: '3',
            name:'3.Listar tareas completadas'
        },
        {
            value: '4',
            name:'4.Listar tareas pendientes'
        },
        {
            value: '5',
            name:'5.Completar Tarea(s)'
        },
        {
            value: '6',
            name:'6.Borrar Tarea'
        },
        {
            value: '0',
            name:'0.Salir'
        }
            ]
    }
];



const inquirerMenu = async ( ) => {

    console.clear()

    console.log('========================='.blue);
    console.log('Seleccione alguna opcion'.green);
    console.log('========================='.blue);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;


}

const ans = [{

    type:'input',
    name:'opcion',
    message:`Presiona ${'Enter'.red} para continuar`,
    
}];

const pausa = async ( ) =>{

        await inquirer.prompt(ans);
    

};

module.exports = {
    inquirerMenu,
    pausa
}
const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    constructor( ){

        this._listado = {};

    }

    cargarTareasFromArray ( tareas ) {

        tareas.forEach(tarea => {
            
            this._listado[tarea.id] = tarea;
        });

    }


    crearTarea (desc = ''){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto (  ) {
            
        console.log();
        this.getListadoArr.forEach( (tarea, ix) => {  
            const idx = `${ix + 1}`.blue;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                            ? 'Completada'.green
                            : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);
            
        })
    }

    
    listaraPendientesCompletadas ( completada = true) {
        
        console.log();
        let incremento = 1;

        this.getListadoArr.forEach( (tarea) => {  
            const { desc, completadoEn } = tarea;
            
            if(completadoEn){
                let idx = `${incremento++}.`.blue;
                console.log(`${ idx } ${ desc } :: ${'Completada'.green}`);

            }
            
        })
        
    }

    listarPendientesIncompletas(pendiente = false) {
        console.log();
        let sumador = 1;

        this.getListadoArr.forEach( (tarea) => {  
            const { desc, completadoEn } = tarea;
            
            if(!completadoEn){
                let idx = `${sumador++}.`.blue;
                console.log(`${ idx } ${ desc } :: ${'Pendiente'.red}`);

            }
            
        })

    }

    borrarTarea ( id = '' ) {

        if( this._listado[id] ){

            delete this._listado[id]
        }
    };


    get getListadoArr( ){

        const listado = [ ];
        Object.keys(this._listado).forEach(key => {

            const tarea = this._listado[key];
            listado.push( tarea );
        })

        return listado;
    }



}

module.exports = Tareas;


const fs = require('fs');
const archivo = `./db/data.json`;

const guardarDataBase = ( data ) => {

    fs.writeFileSync(archivo, JSON.stringify(data));

} 

const leerDB = ( ) => {

    if(!fs.existsSync(archivo)){

        return null;
    }

    const info = fs.readFileSync(archivo,{encoding:'utf-8'});
    const datajson = JSON.parse(info)
    
    // console.log(datajson);

    return null;
};

module.exports = {
    guardarDataBase,
    leerDB
};
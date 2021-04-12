const fs = require('fs');
let i = 0;

const guardarDataBase = ( data ) => {

    i += 1;
    const archivo = `./db/data-${i}.json`;
    fs.writeFileSync(archivo, JSON.stringify(data));

} 

module.exports = {guardarDataBase};
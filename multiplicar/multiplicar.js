const { saveFile } = require('../fileHandle/fileHandle.js');
const colors = require("colors");

let listar = (base, limite) => {

    console.log("==========================".green);
    console.log(`======= tabla de ${base} =======`.green);
    console.log("==========================".green);
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        saveFile(data, `tabla-${base}.txt`, `tablas/tabla-${base}.txt`)
            .then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });

        //console.log(text);

        //const data = new Uint8Array(Buffer.from(`'Hello Node.js'`));
        //fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        //    if (err)
        //        reject(err)
        //    else
        //        resolve(`tabla-${base}.txt`);
        //    //console.log('The file has been saved!');
        //});

    });
}

module.exports = {
    crearArchivo,
    listar
}
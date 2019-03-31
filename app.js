const { crearArchivo, listar } = require('./multiplicar/multiplicar.js');
const { argv } = require("./config/yargs.js");
const colors = require("colors");
let comando = argv._[0];

switch (comando) {

    case 'listar':
        listar(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e))
        break;

    default:
        console.log('comando no reconocido');
        break;
}




//let base = 'abc';
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split("=")[1];
//console.log(base)


//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch(e => console.log(e))
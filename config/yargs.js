const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }
}

const argv = require("yargs")
    .command("listar", 'Imprime en consola la tabla de multiplicar', opts)
    .command("crear", 'Crea un archivo con la informaciòn propiciada', opts)
    .help()
    .argv;


module.exports = {
    argv
}
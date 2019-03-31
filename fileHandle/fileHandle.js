const fs = require('fs');

let saveFile = (data, fileName, path) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(fileName);
            //console.log('The file has been saved!');
        });
    });
}

module.exports = {
    saveFile
}
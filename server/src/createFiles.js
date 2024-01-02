//const fs = require('fs')
//const path = require('./storage/storage.json')
const path = require('path')
const uuid = require('uuid')

 function createFiles(picture) {
        try {
            const fileName = uuid.v4() + ".jpg";
            const filePath = path.resolve('static', fileName);
            picture.mv(filePath);
            return fileName;
        } catch (e) {
            console.log(e)
        }
    }


module.exports =  {createFiles};

// module.exports = function createFiles(){
// const image = JSON.parse(fs.readFileSync(path.resolve('storage', storage.json)))
// image.push({
//     id: uuid.v4,
//     picture
// })
// fs.writeFileSync(path, JSON.stringify(image))
// return image
// }
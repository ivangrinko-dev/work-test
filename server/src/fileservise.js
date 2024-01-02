const { log } = require("console");
const path = require("path");
const uuid = require("uuid");

function saveFile(file) {

    const fileName = uuid.v4();
    const filePath = path.resolve("static", fileName);
    file.mv(filePath);
    return fileName;
 


}

module.exports = { saveFile };

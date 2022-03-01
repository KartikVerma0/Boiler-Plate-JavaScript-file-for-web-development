const fs = require("fs");
const folderName = process.argv[2];

const htmlBoiler =
    "<!DOCTYPE html>" +
    '<html lang="en">' +
    "<head>" +
    '<meta charset="UTF-8">' +
    '<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    "<title>Document</title>" +
    '<link rel="stylesheet" href="css/style.css">' +
    "</head>" +
    "<body>" +
    '<script src="js/app.js"></script>' +
    "</body>" +
    "</html>";
const cssBoiler = "*{margin:0;padding:0;box-sizing:border-box}";
const jsBoiler = "";

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, htmlBoiler);
fs.mkdirSync(`${folderName}/css`);
fs.writeFileSync(`${folderName}/css/style.css`, cssBoiler);
fs.mkdirSync(`${folderName}/js`);
fs.writeFileSync(`${folderName}/js/app.js`, jsBoiler);
fs.mkdirSync(`${folderName}/images`);

var htmlAutoprefixer = require("html-autoprefixer");
var fs = require("fs");
var htmlString = fs.readFileSync(__dirname + '/../index.html', 'utf-8');

var prefixed = htmlAutoprefixer.process(htmlString, { lowerCaseTags: true } );

fs.writeFileSync(__dirname + '/../index.html', prefixed);

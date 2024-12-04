var fs = require('fs');
var file = fs.createReadStream("readme.txt");
var newFile = fs.createWriteStream("readme_copy.txt");

file.pipe(newFile);
newFile.on('close', function () {
    console.log("file has been Copied")
})

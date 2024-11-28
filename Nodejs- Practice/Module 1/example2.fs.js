var fs = require('fs');

// Corrected JSON string
var myString = '{"name": "Modern Web Academy"}';

// Writing the corrected JSON string to a file
fs.writeFile('myFile.json', myString, (err) => {
    if (err) throw err;
    console.log('myFile.json has been saved!');
});

var actualObject = {
    name: 'Modern Web Academy'
};

// Writing the JSON stringified object to a file
fs.writeFile('myProcessedFile.json', JSON.stringify(actualObject), (err) => {
    if (err) throw err;
    console.log('myProcessedFile.json has been saved!');
});

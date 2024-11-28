const readline = require('readline');

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


prompt.question('What do you of Node.js ?', (answer) => {
    console.log('Thank you for Valuable Feedback.' + answer);
    prompt.close();

})
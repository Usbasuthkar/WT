const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a JSON object: ', (jsonInput) => {
    try {
        const jsonObject = JSON.parse(jsonInput);

        if (isObjectWithProperties(jsonObject)) {
            console.log('The input object has properties.');
        } else {
            console.log('The input object is empty or not an object with properties.');
        }
    } catch (error) {
        console.log('Invalid JSON input. Please provide a valid JSON object.');
    }

    rl.close();
});

function isObjectWithProperties(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    return Object.keys(obj).length > 0;
}
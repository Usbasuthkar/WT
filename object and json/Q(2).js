const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a JSON object: ', (input) => {
    try {
        const jsonObject = JSON.parse(input);

        console.log('Properties of the object:');
        for (const property in jsonObject) {
            if (jsonObject.hasOwnProperty(property)) {
                console.log(property);
            }
        }
    } catch (error) {
        console.error('Invalid JSON input:', error);
    }

    rl.close();
});
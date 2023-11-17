const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isValidEmail(inputText) {
    // Use a regular expression to validate the email address
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(inputText);
}

rl.question('Enter an email address to validate: ', (input) => {
    if (isValidEmail(input)) {
        console.log('Valid email address.');
    } else {
        console.log('Invalid email address. Please enter a valid email address.');
    }

    rl.close();
});

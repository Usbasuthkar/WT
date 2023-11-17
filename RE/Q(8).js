const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isValidPassword(inputText) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{7,15}$/;
    return passwordPattern.test(inputText);
}

rl.question('Enter a password to validate: ', (input) => {
    if (isValidPassword(input)) {
        console.log('Valid password.');
    } else {
        console.log('Invalid password. Please enter a valid password with at least 7 to 15 characters, containing at least one special symbol, one uppercase letter, and one lowercase letter.');
    }

    rl.close();
});

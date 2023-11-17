const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isValidMobileNumber(inputText) {
    // Use a regular expression to validate the mobile number
    const mobileNumberPattern = /(?:\b|^)([89]\d{9})(?:\b|$)/g;
    if(mobileNumberPattern.test(inputText)){
        console.log('Valid mobile number.');
        console.log(inputText.match(mobileNumberPattern));
    } else {
        console.log('Invalid mobile number. Mobile numbers should start with 8 or 9 and have a total of 10 digits.');
    }
}

rl.question('Enter a mobile number: ', (input) => {
    isValidMobileNumber(input)
    rl.close();
});

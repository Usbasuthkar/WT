const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the employee ID: ', (employeeId) => {
    const parsedEmployeeId = parseInt(employeeId, 10);

    fs.readFile('employeeData.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the JSON file:', err);
            rl.close();
            return;
        }

        try {
            const employeeData = JSON.parse(data);
            const employee = employeeData.employees.find(emp => emp.id === parsedEmployeeId);

            if (employee) {
                const camelCaseFirstName = employee.firstName.charAt(0).toLowerCase() + employee.firstName.slice(1);
                const camelCaseLastName = employee.lastName.charAt(0).toLowerCase() + employee.lastName.slice(1);
                console.log(`Employee ID: ${employee.id}`);
                console.log(`Camel Case First Name: ${camelCaseFirstName}`);
                console.log(`Camel Case Last Name: ${camelCaseLastName}`);
                console.log(`Salary: ${employee.salary}`);
            } else {
                console.log('Employee not found.');
            }
        } catch (jsonError) {
            console.error('Error parsing JSON data:', jsonError);
        }

        rl.close();
    });
});

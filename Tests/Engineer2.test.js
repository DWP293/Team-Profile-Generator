// constructor 
const Engineer2 = require('../lib/Engineer2');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Engineer2('Darryl', 'dwpeterson293@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Engineer2('Darryl', 'dwpeterson293@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});
 
test('gets employee ID', () => {
    const employee = new Engineer2('Darryl', 'dwpeterson293@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets email
test('gets employee email', () => {
    const employee = new Engineer2('Darryl', 'dwpeterson293@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role
test('gets role of employee', () => {
    const employee = new Engineer2('Darryl', 'dwpeterson293@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 


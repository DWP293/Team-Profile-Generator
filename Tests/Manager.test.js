// constructor 
const Manager = require('../lib/Manager');

// manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Austin', 90, 'austin@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Austin', 90, 'nicole.elisaw@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 
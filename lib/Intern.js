// importing Employee constructor 
const Employee = require('./Engineer2');

// intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

  
    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}
module.exports = Intern; 
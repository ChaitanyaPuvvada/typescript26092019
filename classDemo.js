"use strict";
class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
}
let emp = new Employee(1, 'Chaitanya', 'chaitu12@gmail.com');
console.log(emp.empId);

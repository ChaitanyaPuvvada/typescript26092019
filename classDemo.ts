class Employee {
    id : number;
    name : string;
    email : string;
    salary ?: number;

    constructor(id : number, name:string, email:string){
        this.id = id;
        this.name= name;
        this.email=email;
    }

    get empId(){
        return this.id;
    }

    set empId(id:number){
        this.id = id;
    }
}

let emp = new Employee(1, 'Chaitanya','chaitu12@gmail.com');
console.log(emp.empId)
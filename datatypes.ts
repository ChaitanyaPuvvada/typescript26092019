let lname:string = 'Virat';
let age : number = 10;
age = 12.6;
console.log('age:='+age)

let unionType : number | String = 12;
console.log('UnionType Value is :='+unionType)

unionType = 'Namaste'
console.log('UnionType Value is :='+unionType)

let empList : any[] = []
empList.push({id:1, name:'Vijay', email:'vijay@test.com'})
empList.push({id:2, name:'Ajay', email:'Ajay@test.com'})

empList.forEach(element => {
    console.log(element.id)
});

for (const employee of empList) {
    console.log(employee.name)
}

for (const employee in empList) {
    console.log(employee)
}
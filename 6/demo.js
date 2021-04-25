class Person {

    constructor(name, surName) {
        this.name = name;
        this.surName = surName;
        Person.intances += 1;
    }

    set name(valueName) {
        this._name = valueName;
    }
    get name() {
        return this._name;
    }
    set surName(valueSurName) {
        this._surName = valueSurName;
    }
    get surName() {
        return this._surName;
    }
    show() {
        return (`${this.name}, ${this.surName}`);
    }
}

class Student extends Person {

    constructor(name, surName, dayOfBirthay, course) {
        super(name, surName)
        this.dayOfBirthay = dayOfBirthay;
        this.course = course;
        Student.intances += 1;
    }
    set dayOfBirthay(valueDay) {
        this._dayOfBirthay = valueDay;
    }
    get dayOfBirthay() {
        return this._dayOfBirthay;
    }
    set course(valueCourse) {
        this._course = valueCourse;
    }
    get course() {
        return this._course;
    }
    show() {
        return (`${this.name}, ${this.surName}, ${this.dayOfBirthay}, ${this.course}`)
    }

}

class Employee extends Person {

    constructor(name, surName, salary, listOfSalary) {
        super(name, surName)
        this.salary = salary;
        this.listOfSalary = listOfSalary;
        Employee.intances += 1;
    }
    get salary() {
        return this._salary;
    }
    set salary(valueSalary) {
        this._salary = valueSalary;
    }
    get listOfSalary() {
        return this._listOfSalary;
    }
    set listOfSalary(valueList) {
        this._listOfSalary = valueList;
    }
    show() {
        return (`${this.name}, ${this.surName}, ${this.salary}, ${this.listOfSalary}`);
    }
}

class Manager extends Employee {

    constructor(name, surName, salary, payments, listEmployee) {
        super(name, surName, salary)
        this.payments = payments;
        this.listEmployeec = listEmployee;
        Manager.intances += 1;
    }
    set payments(valuePayments) {
        this._payments = valuePayments;
    }
    get payments() {
        return this._payments;
    }
    set listEmployee(valueListEmployee) {
        this._listEmployee = valueListEmployee;
    }
    get listEmployee() {
        return this._listEmployee;
    }
    static addWorker(name) {
        staffList = [];
        staffList.push(name);
        staffList.forEach(worker => {
            nameWorker.push(worker.name)
        });
    }
    show() {
        return (`${this.name}, ${this.surName}, ${this.salary}, ${this.payments}, STAFF: ${this.listEmployee}`)
    }
}

Person.intances = 0;
Student.intances = 0;
Employee.intances = 0;
Manager.intances = 0;
let staffList = [];
let nameWorker = [];


console.log('-------------------');
let person = new Person('Petr', 'Denisov');
console.log(person.show());
console.log(Person.intances);
console.log('-------------------');


let personA = new Person();
personA.name = 'Vitalik';
personA.surName = 'Jackson';
console.log(personA.show());
console.log(Person.intances);
console.log('-------------------');



let student = new Student();
student.name = 'Ali';
student.surName = 'Akmullaev';
student.course = 1;
student.dayOfBirthay = '13 feb 2003y';
console.log(student.show());
console.log(Student.intances);
console.log('-------------------');

let staff = new Employee();
staff.name = 'Vitya';
staff.surName = 'Petrov';
staff.salary = 38900;
staff.listOfSalary = [
    '10 jun: 20000',
    '10 feb: 110000'
];
console.log(staff.show());
console.log('-------------------');

let boss = new Manager();
boss.name = 'Jhon';
boss.surName = 'Willy';
boss.salary = 75000;
boss.payments = [
    '12 jun: 75000',
    '12 feb: 77000',
    '12 mar: 70000'
];

boss.listEmployee = [];

Manager.addWorker(staff);

boss.listEmployee.push(nameWorker);
console.log(boss.show());
console.log('-------------------');

boss.payments.push('12 apr: 79000');
console.log(boss.show());

let staffTest = new Employee();
staffTest.name = 'Alex';
staffTest.surName = 'Pupkin';
staffTest.salary = 35900;
staffTest.listOfSalary = [
    '20 jun: 50000',
    '20 feb: 150000'
];

Manager.addWorker(staffTest);
console.log(boss.show());
console.log('-------------------');

console.log(`Person: ${Person.intances}`);
console.log(`Student: ${Student.intances}`);
console.log(`Employee: ${Employee.intances}`);
console.log(`Manager: ${Manager.intances}`);
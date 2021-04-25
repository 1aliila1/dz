// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         this._name = value;
//     }
//     sayHi(a) {
//         console.log(`studet: ${a}`);
//     }
//     static run(name) {
//         console.log(`${name} бежит`);
//     }
// }

// class School extends User {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }
//     get age() {
//         return this._age;
//     }
//     set age(value) {
//         this._age = value;
//     }
//     sayAge(age) {
//         console.log(`ya stariy : ${age}`);
//     }

// }

// let school = new School();
// school.sayHi("vasya");
// school.sayAge(12);
// School.run('vas');



// class hello {
//     constructor(name) {
//         this.name = name;
//     }
//     sayName() {
//         console.log(`i'm ${this.name}`);
//     }
//     sayNotName() {
//         console.log(`i'm not ${this.name}`);
//     }
//     prov() {
//         if (this.name == 'ivan') {
//             ivan.sayName();
//         } else {
//             ivan.sayNotName();
//         }
//     }

//     get name() {
//         return hello.name
//     }
// }
// let ivan = new hello('ivanidze');
// ivan.prov()

// const person = {
//     name: 'maxi',
//     set name(value) {
//         this._name = value;
//     },
//     get name() {
//         return this._name
//     }
// }
// person.name = ' alex '
// console.log(person);
// console.log(person.name);
// person.name = 'filon'
// console.log(person.name);




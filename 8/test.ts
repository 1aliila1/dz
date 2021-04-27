class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
user: User;
let user = new User('Vitya', 35);
console.log(user);

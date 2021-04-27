var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
user: User;
var user = new User('Vitya', 35);
console.log(user);

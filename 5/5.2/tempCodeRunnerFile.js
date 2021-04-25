const person = {
    name: 'maxi',
    set name(value) {
        this._name = value;
    },
    get name() {
        return this._name
    }
}
person.name = ' alex '
console.log(person);
console.log(person.name);
person.name = 'filon'
console.log(person.name);
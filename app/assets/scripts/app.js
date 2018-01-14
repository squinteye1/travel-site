/*
function person(name, favColour) {
    console.log('Hello my name is ' + name + ' and my favorite colour is ' + favColour + '.');
}

var john = {
    name: 'John Doe',
    favColour: 'Blue',
    greet: function () {
        console.log('Hello my name is ' + john.name + ' and my favorite colour is ' + john.favColour + '.');
    }
}

john.greet();

person(john.name, john.favColour);
person('Jane Smith','green');
*/

function Person (fullName, favColour) {
    this.name = fullName;
    this.favoriteColour = favColour;
    this.greet = function () {
    this.favoriteColour = favColour;
        console.log('Hello my name is ' + this.name + ' and my favorite colour is ' + this.favoriteColour + '.');
    }
}

var john = new Person("John Doe","blue");
john.greet();

var jane = new Person("Jane Smith","green");
jane.greet();
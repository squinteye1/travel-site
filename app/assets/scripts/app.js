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
var $ = require('jquery');
var Person = require('./modules/Person');

var john = new Person("John Doe","blue");
john.greet();

var jane = new Person("Jane Smith","green");
jane.greet();

$('h1').remove();
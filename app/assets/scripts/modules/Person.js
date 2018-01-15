function Person (fullName, favColour) {
    this.name = fullName;
    this.favoriteColour = favColour;
    this.greet = function () {
    this.favoriteColour = favColour;
        console.log('Hello my name is ' + this.name + ' and my favorite colour is ' + this.favoriteColour + '.');
    }
}

module.exports = Person;
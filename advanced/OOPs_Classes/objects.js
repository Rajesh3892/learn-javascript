function multiplywith5(num) {
    return num * 5
}
multiplywith5.power = 2

// console.log(multiplywith5(5));
// console.log(multiplywith5.power);
// console.log(multiplywith5.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score
}
createUser.prototype.increament = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Username: ${this.username}, Score:${this.score}`)
}

let user1 = new createUser("John", 30);
let user2 = new createUser('Miller', 25)

user1.printMe()
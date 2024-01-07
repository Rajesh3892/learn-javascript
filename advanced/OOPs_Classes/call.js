function setUserName(username) {
    console.log('Called');
    this.username = username
}

function createUser(username, email, password) {
    setUserName.call(this, username); //if we don't use call() and 'this' keyword then this method will call the setUserName() but at the end don't return variables. So we use call() and 'this' keyword. 
    this.email = email;
    this.password = password;
}

const userDetails = new createUser('Rajesh', 'rajesh@google.com', '123')
console.log(userDetails); // Output: Called undefined rajesh@google.com
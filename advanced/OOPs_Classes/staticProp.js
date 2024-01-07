class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    logMe(){
        console.log(`My Name is ${this.name} and my Email address is ${this.email}`);
    }
    static createId(){
        return Math.random().toString(36).substr(-9);
    }
}

class Teacher extends User{
    constructor(name, email, subject){
        super(name, email); // calling the parent constructor
        this.subject=subject;
        this.id=User.createId();
    }
    teach(){
        console.log("I am teaching "+this.subject);
    }
}

const school = new Teacher('Rajesh', 'rajesh@google.com', 'Programming')
// console.log(school.createId()); // Getting error Because of 'Static'
school.logMe()
console.log(school.id)
console.log(school.name)
school.teach()

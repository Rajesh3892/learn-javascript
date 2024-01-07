const user = {
    name: 'John Doe',
    age: 30,
}

const teacher = { makeVideo : true }
const teachingSupport = { isAvailable: false}
const otherSupport = {
    makeAssignment: 'JS Support',
    fullTime: true,
    __proto__:teacher // This is OLD syntax of inheritance
}

teacher.__proto__ = user; // Also this this OLD syntax

// MODERN syntax in inheritance
Object.setPrototypeOf(otherSupport, teacher);

// ============= Inheritance Using Class keyword ===========
class User {
    constructor(username, email, pass){
        this.username = username;
        this.email = email;
        this.pass = pass;
    }
    logMe(){
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
}

class Teacher extends User{
    constructor(username, email, pass){
        super(username)
        this.email = email;
        this.pass = pass;
        this.subject = "JavaScript"
    }
    addCourse(){
        console.log(`Adding a new course ${this.subject}`);
    }
}

const school = new Teacher('Rajesh', 'rajesh@google.com', '123')
const student = new User('Songara')
school.addCourse()
school.logMe();
student.logMe();
student.addCourse() // Error

// ============ check equality ==================
// console.log(school === student);  // false
// console.log(school === Teacher);   // false
// console.log(Teacher === student);   // false
// // using instanceof operator to check the type of object
// console.log(school instanceof Teacher);  // true
// console.log(school instanceof User);     // true


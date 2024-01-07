// ================== Class based GET and SET (New Technique) =============
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    get name(){
        return `${this._name} Songara`;
    }
    set name(value){
        if (typeof value !== 'string') throw new Error('Name must be a string');
        else {
            this._name = `${value} 123`;
        }
    }
}

const userProfile = new User('Rajesh Kumar', 'kumar@google.com')
// console.log(userProfile.name);

// ============= Function based GET and SET (Old Technique) ====================
function CreateUser(name, email) {
    this._name = name;
    this._email = email;
    Object.defineProperty(this, 'email', { // Object Factory creation
        get: function() {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    });
    Object.defineProperty(this, 'name', {
        get: function () {
            return `${this._name} Songara`
        },
        set: function (value) {
            this._name = value
        }
    });
}
const userInfo = new CreateUser("John Doe", "john@gmail.com");
// console.log(userInfo.email);

// ============= Obejct based GET and SET (Oldest Technique) ====================
let person = {
    _firstName : "Rajesh",
    _lastName : "Songara",
    get firstName(){
        return this._firstName.toUpperCase() ;
    },
    set firstName(value){
        if(typeof value !== "string") throw new Error("Expected a string!");
        this._firstName=value;
    }
};
const human = Object.create(person)
console.log(human.firstName);


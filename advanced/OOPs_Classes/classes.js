class User {
    constructor(name, email, pass) {
        this.name = name;
        this.email = email;
        this.pass = pass
    }
    cryptoPassword(){
        return `${this.pass}abc`
        /*encrypt: function (password) {
            const cipher = crypto.createCipher('aes-256-cbc', 'a_salt');
            let encryptedData = cipher.update(password, 'utf8', 'hex');
            encryptedData += cipher.final('hex');
            return encryptedData;
        },
        decrypt: function (encryptedPassword) {
            const decipher = crypto.createDecipher('aes-256-cbc', 'a_salt');
            let decryptedData = decipher.update(encryptedPassword, 'hex', 'utf8');
            decryptedData += decipher.final('utf8');
            return decryptedData;
        }*/
    };
    toUpperCase() {
        return this.name.toLocaleUpperCase();
    };
}
module.exports = User;
let user1 = new User("John Doe", "john.doe@example.com", "123");
console.log(user1.cryptoPassword()); // JOHN DOE
console.log(user1.toUpperCase()); // john.doe@example.com

// Note: This class work behind the schene like prototype.js

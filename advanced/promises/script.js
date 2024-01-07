// First Promise
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("First promise is completed");
        resolve()
    }, 1000)
})

promiseOne.then(function (params) {
    console.log("First promise has consumed");
})

// Second Promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("second Promise is completed");
        resolve();
    }, 1000);
}).then(function () {
    console.log("second promise Consumed");
})

// Third promise
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({username:"RajeshSongara", password:"123"})
    }, 1000);
})
promiseThree.then((data) => {
    const { username, password } = data;
    console.log(`Username: ${username} and Password: ${password}`);
});

// Fourth Promise
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"MaheshRaj", password:"123"});
        } else{
            // throw new Error('Error in processing');
            reject('Error in processing')
        }
    }, 1000);
})
promiseFour.then(function (data) {
    console.log(data);
    return data.username;
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log('Either promise is resolved or rejected'));

// Five Promise
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"Javascript", password:"123"});
        } else{
            reject('Error in promise Five')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//Only async await function ===========
async function getAllUsers() {
    try {
        const result = await fetch('http://jsonplaceholder.typicode.com/users')
        const data = await result.json()
        // console.log(result);
    } catch (error) {
        console.log(error);
    }
}
getAllUsers();

// fetch without async ==============
// fetch('https://api.github.com/users/octocat')
fetch('http://jsonplaceholder.typicode.com/users')
.then((response) => {return response.json()})
.then(data => console.log(data))
.catch(err => console.log(err));

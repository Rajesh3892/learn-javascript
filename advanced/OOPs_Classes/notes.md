# javascript
  javascript is primarily prototype language and its classes are primarily syntactic sugar over existing prototype-based inharitance machanisms. In other word it provides more familiar syntax for developers coming form class based languages such as Java, c++ but under hood works somewhat differently.

# OOPs
## When use "new" keyword:
- first: Create a empty object. it's called instance
- Second: calls constructor function causes "new" keyword
- Third: all variables/parameters inject in 'this' keyword
- forth: result in object

``` javascript
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
```
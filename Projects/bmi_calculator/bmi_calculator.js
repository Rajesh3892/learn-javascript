const form = document.querySelector("form")
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector(".result")
    if (height === "" || height <= 0 || isNaN(height)) {
        result.innerHTML = `Enter valid height ${height}`
    } else if (weight === "" || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Enter valid ${weight}`
    } else {
        // Calculate BMI
        let bmi = Math.round((weight / Math.pow(height/100,2))*10)/10;
        result.innerHTML = `The BMI is ${bmi}`
    }
})
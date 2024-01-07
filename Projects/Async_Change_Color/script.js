const printTextOnTime =  function(){
    const heading = document.querySelector('.heading');
    heading.innerHTML = 'Start Async Programing'
    console.log('Hello');
};

// document.querySelector('#start').addEventListener('click', function () {
//     console.log('START FUNCTION')
//     const changeText =  setTimeout(printTextOnTime, 2000)
// })

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#';
    for (let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
const changeBody = function () {
    const body = document.querySelector('body')
    body.style.backgroundColor = randomColor()
}
let changeBodyColor;
const startChangingColor = function () {
    console.log('START FUNCTION')
    if (!changeBodyColor) {
        changeBodyColor =  setInterval(changeBody, 1000)
    }
}
document.querySelector('#start').addEventListener('click', startChangingColor)
const stopChangingColor = function () {
    clearInterval(changeBodyColor)
    console.log('STOPPED')
}
document.querySelector('#stop').addEventListener('click', stopChangingColor)

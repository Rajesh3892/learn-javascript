const clock = document.querySelector('.clock')

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);

// function to get the current time and display it on the page
// const splitTime = document.querySelector('div')
// const splithours = document.createElement('div')
// splithours.classList.add('time-display')
// splithours.style.width = '40px'
// splithours.style.height = '40px'
// splithours.style.backgroundColor = 'yellow'
// splithours.style.padding = '5px'
// splitTime.innerHTML = '<div class="" style="weight:40px; height:40px; background-color:yellow; color:white; padding:5px";></div>'
// splitTime.appendChild(splithours)
// function startTimer () {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     // add a leading zero to the value of an item if required.
//     splithours.innerHTML = checkTime(h);
//     splitMinut.innerHTML = checkTime(m);
//     splitSecond.innerHTML = checkTime(s);
// }
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  //
//     return i;
// }
// startTimer();
// setInterval(startTimer, 500);

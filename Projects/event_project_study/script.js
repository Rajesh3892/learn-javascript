// ###### this is not suitable aproach because of it don't give more information and less features. So we must use addEventListner() function because of it gives not only onlick funtion but also more features and propogation ability.

// document.getElementById('women').onclick = function(){
//     alert('Hello this is women image')
// }

/*
    attachEvent()- for internet explorer
    onEventListner() - in jQuery
    
    ======learning=======
    type of events, timestamp, defaultPrevented
    target, toElement, srcElement, currentElement
    clientX, clientY, screenX, screenY
    altKey, ctrlKey, shiftKey, keycode
*/

// Note: When run this code first print 'women clicked' after that 'Clicked inside the ul'. But if change into third parameter 'true' then result will be reverse.  
/*
document.getElementById('images').addEventListener('click', function (e) {
    console.log('Clicked inside the ul');
}, false)

document.getElementById('women').addEventListener('click', function (e) {
    console.log('Women clicked');
    e.stopPropagation(); // stop the propogation(next )
}, false)

document.getElementById('google').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation(); // stop the propogation(next )
    console.log('google Clicked');
}, false)
*/

// two types of propogation contest
// 1. Event bubbliing - default(false)
// 2. Event Capturing - true/false

document.getElementById('images').addEventListener('click', function (e) {
    const removeTarget = e.target
    // console.log(removeTarget.parentNode);
    if (removeTarget.tagName === 'IMG'){
        removeTarget.parentNode.remove()
    }
}, false)
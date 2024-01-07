//=============== 1st =================
const title = document.getElementById("title") // Select HTML part
/*
console.log(title.innerText) // return only those text which are not display:none
console.log(title.textContent) // return both text 
console.log(title.innerHTML) // return area of scope selected HTML
*/

const daysItems = document.getElementsByClassName("days")
//console.log(daysItems) // Return: HTML Collection
/* 
daysItems.forEach(function(item){ 
    console.log(item) 
})
Note: HTMLCollection does not provide forEach/map function so it convert HTMLCollection into "Array"
*/
let arrayDays = Array.from(daysItems); // Convert HTML collection to normal JS array
arrayDays.forEach((day)=>{
    day.addEventListener('click', ()=>{
        title.style.display = 'block'
        //title.innerText = `You clicked on ${day.innerHTML}`
        title.innerHTML += `<br><span style="color:orange">You clicked on ${day.innerHTML}</span>`;

    })
});

const days = document.querySelectorAll('.days')
days.forEach(function(l){
    l.style.color = 'blue'
})

days.forEach(function(d){
    d.addEventListener('click', function(){
        let dayName = this.innerText;
        if(title.style.display === "none"){
            title.style.display = "block";
        }
        title.innerHTML += `<br><span style="color:green">${dayName} was clicked.</span>`;
    })
});

//================ 2nd =================
const parent = document.querySelector('.parent');
// console.log(parent); // NodeList [div.days.monday, div.days.tuesday, div.days.wednesday, div.days.thursday]
// console.log(parent.children[1].innerHTML)
for (let index = 0; index <parent.children.length; index++) {
    const element = parent.children[index].innerHTML;
    //console.log(element)
}

// console.log(parent.firstElementChild.innerHTML)
// console.log(parent.lastElementChild.innerHTML)
const dayOne = document.querySelector('.days')
// console.log(dayOne.nextElementSibling.innerHTML)
// console.log(dayOne.previousElementSibling.innerHTML) // Return TypeError: dayOne.previousElementSibling is null
// console.log(dayOne.parentElement)
//console.log(parent.childNodes)

// =================== Create new element to the DOM ====================
const createButton = document.createElement("BUTTON");
createButton.setAttribute("id", "createBtn");
createButton.className = "btn btn-primary";
// createButton.textContent = "Create a Button!";
createButton.style.backgroundColor = 'orange'
createButton.style.padding = '5px'
createButton.style.border = 'orange';
createButton.style.borderRadius = '3px'
createButton.style.marginTop = '8px'
createButton.style.width = '100px'
createButton.style.color = '#fff'
createButton.style.fontWeight = 'bold';
createButton.style.cursor = 'pointer'
createButton.appendChild(document.createTextNode("Click me"));
parent.appendChild(createButton);
createButton.onclick = () => {
    const newDiv = document.createElement("DIV");
    newDiv.className = "newDate";
    newDiv.appendChild(document.createTextNode(`Created on ${new Date()}`)); //* Optimized approched
    parent.insertBefore(newDiv, createButton);
    // document.body.appendChild(newDiv)
};

// ================== addEventListener() To The Newly Created Element ======================
let isRed = false;
const redColor = function () {
    this.style.backgroundColor = '#008B8B'
    isRed = true;
}
const originalColor = function () {
    if (!isRed) return;
    this.style.backgroundColor = 'orange'
    isRed = false;
}
createButton.addEventListener('mouseover', redColor);
createButton.addEventListener('mouseout', originalColor);

// ================= Edit Element of DOM ===============
const secondDiv = parent.querySelector('div:nth-child(3)')
const newDay = document.createElement('div')
newDay.innerText = `Another Day`
secondDiv.replaceWith(newDay);

// ================= Remove Element from DOM ============
const removeDiv = parent.querySelector('div:nth-child(2)')
// removeDiv.remove()

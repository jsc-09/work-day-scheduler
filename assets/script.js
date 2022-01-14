// Set current time
let todayDate = moment().format("dddd, MMMM DD, YYYY");
$("#currentDay").text(todayDate);

let toDoListInput = document.getElementById('#to-do-list')
let saveBtn = document.querySelector('.saveBtn')

let textBackground = document.querySelector('.text-background')
//Step 1: Save text content into local storage when save button is save.
//Step 2: Add color for past (grayed out), present (red), future (green)

saveBtn.addEventListener('click', saveData)

let storedData = [] 

function saveData(){
    localStorage.setItem('toDoListInput', toDoListInput.value);
    console.log(toDoListInput);
}

//Change background color to reflect past, present, and future

//Set Current Time
let time = moment().format('LT');
console.log(time);

console.log(moment('8:00 AM', 'hh:mm a'))
//loop through all the children of the container divs , check the name, and 




function toDoBackground (){
    if (moment().isBefore(time)) {
        textBackground.classList.add('past');
    }
    else if (moment().isAfter(time)){
        textBackground.classList.add('future');
    }
    else {
        textBackground.classList.add('present');
    }
}

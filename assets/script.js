// Set current time
let todayDate = moment().format("dddd, MMMM DD, YYYY");
$("#currentDay").text(todayDate);

let toDoListInput = document.getElementById('#to-do-list')
let saveBtn = document.querySelector('.saveBtn')
//Step 1: Save text content into local storage when save button is save.
//Step 2: Add color for past (grayed out), present (red), future (green)

saveBtn.addEventListener('click', saveData)

function saveData(){
    localStorage.setItem('#toDoListInput', toDoListInput.value);
    console.log(toDoListInput);
}

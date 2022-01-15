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

//set current hour to schedule hour 

function toDoBackground (){
    const currentHour = moment().hour();
    console.log(currentHour);

    $('.time-block').each(function(){
       let rowHour = parseInt($(this).attr('id'))
       console.log(rowHour);

       if (rowHour === currentHour){
           $(this).children('textarea').addClass('present')
       }
       else if (rowHour < currentHour){
            $(this).children('textarea').addClass('past')
       }
       else {
        $(this).children('textarea').addClass('future')
   }
    })
}
toDoBackground()


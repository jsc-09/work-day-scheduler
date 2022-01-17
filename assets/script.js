// Set current time
let todayDate = moment().format("dddd, MMMM DD, YYYY");
$("#currentDay").text(todayDate);

let saveBtn = document.querySelector('.saveBtn')

let textBackground = document.querySelector('.text-background')
//Step 1: Save text content into local storage when save button is save.
//Step 2: Add color for past (grayed out), present (red), future (green)

saveBtn.addEventListener('click', saveTask)

//Add local storage store tasks

let tasksToday = []

function saveTask () {
    let taskInput = $('input[name="task-input').val();
    console.log(taskInput);
    console.log(rowHour);
    //Store Task in Local Storage

    const taskByHour = {
        hour: rowHour,
        task: taskInput
    }
    console.log(taskByHour);

    tasksToday.push(taskByHour);
    localStorage.setItem('tasksToday', JSON.stringify(tasksToday));

    saveTask()
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


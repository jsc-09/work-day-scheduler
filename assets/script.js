// Set current time
let todayDate = moment().format("dddd, MMMM DD, YYYY");
$("#currentDay").text(todayDate);


let textBackground = document.querySelector('.text-background')
//Step 1: Save text content into local storage when save button is save.
//Step 2: Add color for past (grayed out), present (red), future (green)


/*
saveBtn.forEach(button => {
    button.addEventListener("click",saveTask)
})*/
let taskByHour = {}

$('.saveBtn').each(function(){
    $(this).click(saveTask);
})


//Saving each task by hour
function saveTask(event) {
    // $(event.target).parent()
    console.log($(this).parent());

    let taskHour = $(this).parent().attr("id");
    let taskTask = $(this).parent().children('textarea').val();
    console.log(taskHour);
    console.log(taskTask)

    
    taskByHour[taskHour] = taskTask
    
    console.log(taskByHour);

    localStorage.setItem('taskByHour', JSON.stringify(taskByHour))
 }

 //Retriving each task by hour
 function init() {
     let storedTask = JSON.parse(localStorage.getItem('taskByHour'));
     console.log(storedTask)
 }



//set current hour to schedule hour 

function toDoBackground (){
    const currentHour = moment().hour();
   // console.log(currentHour);

    $('.time-block').each(function(){
       let rowHour = parseInt($(this).attr('id'))
      // console.log(rowHour);

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

init()
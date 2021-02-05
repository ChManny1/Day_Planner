// Daily planner Date at top of screen
// blocks with hours
// Color blocks based on time (past/present/future)
// clicking box allows you to enter an event
// save event to local storage
// refreshed page events stay
// moment.js library

// live url, loads no errors / githhub and repo url
// easy to navigate 

// vars: hour, suffix, saved "blocks"
// functions: 
// hourblock generator, 
// suffix change after 12pm
// text hour increment, 
// display date up top, current hour, past hour
// alter stored blocks old stored blocks function
// return old blocks saved(refresh storage)
// lock button function


var todaysDate = moment().format("MMMM DD YYYY");
$("#currentDay").text(todaysDate)



var container = $(".container");
var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var plannerItems = []

for (let i = 0; i < times.length; i++) {
    var row = $("<div>").addClass("row");
    var timeBlock = $("<div>").addClass("time-block col-1").text(times[i]);
    var textArea = $("<textarea>").addClass("col-10").addClass(times[i]);
    var button = $("<button>").addClass("saveBtn col-1");
    container.append(row);
    row.append(timeBlock, textArea, button);
          
    }
$(".saveBtn").on("click", function(){
        var timeEl = $(this).prev().prev().text();
        var textContent = $(this).prev().val();
        localStorage.setItem(timeEl, textContent);
        });

function plannerItemsPush(){
        for (let j = 0; j < times.length; j++) {
               
        plannerItems.push(
            localStorage.getItem(times[j])
        )
        console.log(plannerItems)
        $(times[j]).text(plannerItems[j]);
        }
    }


    


plannerItemsPush();
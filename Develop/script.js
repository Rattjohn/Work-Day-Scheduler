// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".btn").click(function(event){
    console.log(event)
    var textBox = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, textBox)
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // step1 Write a function to update the hour blocks
  // step2 Get the current hour 
  // step3 loop over all the time blocks 
  // step4 Check if individual time block is pass, present, or future. 
  // step 5 update css class of the time block
  $(".time-block").each(function (index){
    var hour = 14// dayjs().hour();
    const hourBlock = parseInt($(this).attr('id').split('-')[1]);
    console.log(hourBlock)
    $(`#hour-${index+9} textarea`).val(localStorage.getItem(`hour-${index+9}`))
    if (hourBlock < hour) {
      $(this).removeClass('present future').addClass('past');
    } else if (hourBlock === hour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var date = dayjs().format("dddd, MMMM D");
$("#currentDay").text(date);



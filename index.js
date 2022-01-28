// const { Json } = require("sequelize/dist/lib/utils");

// add current day function or var
$("#currentDay").text(moment().format("MMM Do YYYY"));
// add a save to local storage function 
$(".saveBtn").on("click", function () {
    var textInput = $(this).siblings(".input-area").val();
    var hours = $(this).parent().attr("id");
    console.log(hours)
    console.log(this)
    //save to local
    localStorage.setItem(hours, textInput)
    alert("Added to local storage")
})
// this was to try and load the added tasks but cant get it to work 
//  var loadInput = function(){
//      var inputArea = JSON.parse(localStorage.getItem("hours"))
//     console.log(inputArea)
//      if(!inputArea) {
//          inputArea = {
//              hours: []
//          }

//      }
// }
$("#hour9 .input-area").val(localStorage.getItem("hour9"))
$("#hour10 .input-area").val(localStorage.getItem("hour10"))
$("#hour11 .input-area").val(localStorage.getItem("hour11"))
$("#hour12 .input-area").val(localStorage.getItem("hour12"))
$("#hour13 .input-area").val(localStorage.getItem("hour13"))
$("#hour14 .input-area").val(localStorage.getItem("hour14"))
$("#hour15 .input-area").val(localStorage.getItem("hour15"))
$("#hour16 .input-area").val(localStorage.getItem("hour16"))
$("#hour17 .input-area").val(localStorage.getItem("hour17"))


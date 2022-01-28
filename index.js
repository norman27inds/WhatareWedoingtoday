
$("#currentDay").text(moment().format("MMM Do YYYY"));
 
$(".saveBtn").on("click", function () {
    var textInput = $(this).siblings(".input-area").val();
    var hours = $(this).parent().attr("id");
    console.log(hours)
    console.log(this)
   
    localStorage.setItem(hours, textInput)
    alert("Added to local storage")
})

$("#hour9 .input-area").val(localStorage.getItem("hour9"))
$("#hour10 .input-area").val(localStorage.getItem("hour10"))
$("#hour11 .input-area").val(localStorage.getItem("hour11"))
$("#hour12 .input-area").val(localStorage.getItem("hour12"))
$("#hour13 .input-area").val(localStorage.getItem("hour13"))
$("#hour14 .input-area").val(localStorage.getItem("hour14"))
$("#hour15 .input-area").val(localStorage.getItem("hour15"))
$("#hour16 .input-area").val(localStorage.getItem("hour16"))
$("#hour17 .input-area").val(localStorage.getItem("hour17"))


function scrooge() {
    
    var rightNow = moment().hour();

    
    $(".time-block").each(function () {
        var hours = parseInt($(this).attr("id").split("hour")[1]);

        
        if (hours < rightNow) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (hours === rightNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
scrooge(); 
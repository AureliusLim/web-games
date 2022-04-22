$(document).ready(function(){
   
})
function welcomeUser(){
    const d = new Date();
    let time = d.toLocaleTimeString();
    var localtime = time;
    localtime = localtime.split(":");
    var hour = localtime[0];
    var tail = localtime[2];
    var size = tail.length;
    var letter = tail[size - 2];
    var greeting;
    if (letter == "A"){
        greeting = "Good Morning ";
    }
    else if (letter == "P" && ((hour < 6) || hour == 12)){
        greeting = "Good Afternoon "
    }
    else if(letter == "P" && hour >= 6){
        greeting = "Good Evening ";
    }
    var name = $("#name").val();
    $("#welcome").text(greeting + name + "!!!");
}
function displayGame(source){
    $("#gameImage").attr("src",source);
    $("#gameImage").attr("width",250);
    $("#gameImage").attr("heigth",250);
    if (source == "image/breaker.png"){
        $("#redirectGame").attr("href","game3.html");
    }
    else if (source == "image/paper.jpg"){
        $("#redirectGame").attr("href","game2.html");
    }
    else if (source == "image/snake.png"){
        $("#redirectGame").attr("href","game1.html");
    }
}
function changePage(){
    var link = $("#redirectGame").attr("href");
    if (link == ""){
        alert("Select a game in order to proceed");
    }

}
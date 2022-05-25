$(document).ready(function(){
  
})
var rGame = "";
var un = "";
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
    un = $("#name").val();
    $("#welcome").text(greeting + un + "!!!");
}
function displayGame(source){
    $("#gameImage").attr("src",source);
    $("#gameImage").attr("width",300);
    $("#gameImage").attr("height",250);
    if (source == "image/breaker.png"){
        $("#GameTitle").text("Block Breaker");
        $("#GameDesc").text("The ball flies to wherever you touched. Clear the stages by removing bricks on the board. Break the bricks and never let them hit the bottom. Find best positions and angles to hit every brick.")
        rGame = "game3.html";
    }
    else if (source == "image/paper.jpg"){
        $("#GameTitle").text("Rock Paper Scissors");
        $("#GameDesc").text("Challenge the computer in a first to 5 format with this classic game. ")
        rGame = "game2.html";
    }
    else if (source == "image/snake.png"){
        $("#GameTitle").text("Snake Game");
        $("#GameDesc").text("Move the snake around with the arrow keys, eat the red dots to grow bigger, and avoid hitting your own tail.")
        rGame = "game1.html";
    }
}
function changePage(){

    if (un ===""){
        alert("Please input a username");
    }
    else if (rGame === ""){
        alert("Select a game in order to proceed");
    }
    else{
        window.location.href=rGame;
    }

}
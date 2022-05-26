
$(document).ready(function(){
    const canvas =  document.getElementById("board");
    const ctx = canvas.getContext('2d');
    var hw = 10;
    var snakearr=[];
    
    function initialize(){

        var game_loop;
        create_snake();
        // create_food();
        
        if(game_loop !="undefined"){
            clearInterval(draw);
        }
       
            setInterval(draw, 45);
        
    }
    
    function create_snake(){
        var length = 5;
        var x,y;
        for (var i = 0; i < length; i++){
            snakearr.push({
                x : i*hw,
                y : 0,
            });
        }
        
    }

    function draw(){
        for (var i = 0; i < snakearr.length; i++){
            ctx.fillRect(snakearr[i].x,snakearr[i].y, hw,hw);
            ctx.strokeStyle = "white";
            ctx.strokeRect(snakearr[i].x,snakearr[i].y, hw,hw);
        }
       
    }
    

    initialize();
});


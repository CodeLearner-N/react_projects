var sounds=
{
    green:"sounds/green.mp3",
    red:"sounds/red.mp3",
    yellow:"sounds/yellow.mp3",
    blue:"sounds/blue.mp3",
    wrong:"sounds/wrong.mp3"
};

var buttonGeneratedOrder=[];
var buttonClickedOrder=[];
var i=0;
var colors=["green","red","yellow","blue"];
var temp=0;
var permanent=0;

$(document).keydown(function(event) { 
    if(event.key === "Enter") {
       $(".button").blur();

       buttonGeneratedOrder = [];
        buttonClickedOrder = [];
        i = 0;
        temp = 0;

        $("h2").hide();  // Use .hide() instead of .css("display", "none")
        $("#score").text("Level: " + temp);   
        $("#highscore").css("visibility", "visible");
        $("#score").css("visibility", "visible");

        GenerateRandomButtons();
    }
});

function GenerateRandomButtons(){
    $("h2").css("display","none");
    var randomNumber=Math.floor(Math.random()*4);
    buttonGeneratedOrder.push(colors[randomNumber]);
    
    buttonGeneratedOrder.forEach(
        (color, index) => {
        setTimeout(() => { makeSound(color); flashButton(color); } , 1000 * (index + 1));
    });
}

$(".button").off("click").on("click",function(){
    var buttonClicked=this.id;
    if(buttonGeneratedOrder.length && buttonGeneratedOrder[i]!==buttonClicked)
    {
        $("#highscore").text("HighLevel: "+permanent);
        makeSound("wrong");
        buttonGeneratedOrder=[];
        buttonClickedOrder=[];
        i=0;

        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h2").text("Game Over, Press Enter to Restart").show();
    } 
    else
    {
        buttonClickedOrder.push(buttonClicked);
        makeSound(buttonClicked);
        flashButton(buttonClicked);
        i++;
        temp=buttonClickedOrder.length;
        
        if(buttonClickedOrder.length === buttonGeneratedOrder.length)
        {
            $("#score").text("Level: "+temp);
            if(temp>permanent)
            {
                permanent=temp;
            }
            // $("#highscore").text("Highscore: "+permanent);
            buttonClickedOrder = [];
            i=0;
            GenerateRandomButtons();
        }
    }
});
        
// Play sound
function makeSound(Clickedcolor) {
    if (!sounds[Clickedcolor]) {
        return;
    }
        var audio = new Audio(sounds[Clickedcolor]);
        audio.play();
        return;
    }

// Flash button effect
function flashButton(Clickedcolor) {
    $("#" + Clickedcolor).addClass("flash");
    setTimeout( () => { $("#" + Clickedcolor).removeClass("flash"); } , 200);
        return;
}
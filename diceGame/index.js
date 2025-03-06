 var score1=0;
    var score2=0;
    var count=0;
    function resetGame(){
        score1=0;
        score2=0;
        count=0;
        document.getElementById("s1").innerHTML="Score: "+score1;
        document.getElementById("s2").innerHTML="Score: "+score2;
        document.querySelector("h1").innerHTML="Let's Play";
        document.getElementById("start").style.visibility="visible";
        document.getElementById("reset").style.visibility="hidden";
        document.getElementById("flag1").style.visibility="hidden";
        document.getElementById("flag2").style.visibility="hidden";
        document.querySelector("#p1dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336943.png");
        document.querySelector("#p2dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336943.png");
    }
 function startGame()
 {
    count++;
  var p1=Math.floor(Math.random()*6)+1;
  var p2=Math.floor(Math.random()*6)+1;

  if(p1==1)
  {
    document.querySelector("#p1dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336943.png");
  }
  else if(p1==2)
  {
    document.querySelector("#p1dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336956.png");
  }
    else if(p1==3)
    {
        document.querySelector("#p1dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336955.png");
    }
    else if(p1==4)
    {
        document.querySelector("#p1dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336933.png");
    }
    else if(p1==5)
    {
        document.querySelector("#p1dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336931.png");
    }
    else if(p1==6)
    {
        document.querySelector("#p1dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336948.png");
    }
    score1+=p1;
    document.getElementById("s1").innerHTML="Score: "+score1;
    if(p2==1)
    {
        document.querySelector("#p2dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336943.png");
    }
    else if(p2==2)
    {
        document.querySelector("#p2dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336956.png");
    }
    else if(p2==3)
    {
        document.querySelector("#p2dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336955.png");
    }
    else if(p2==4)
    {
        document.querySelector("#p2dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336933.png");
    }
    else if(p2==5)
    {
        document.querySelector("#p2dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336931.png");
    }
    else if(p2==6)
    {
        document.querySelector("#p2dice").setAttribute("src","https://cdn-icons-png.flaticon.com/128/8336/8336948.png");
    }
    score2+=p2;
    document.getElementById("s2").innerHTML="Score: "+ score2;
    if(count==6)
        {
            document.querySelector("h1").innerHTML="Game Over";
            document.getElementById("start").style.visibility="hidden";
            document.getElementById("reset").style.visibility="visible";
            if(score1>score2)
            {
                document.querySelector("h1").innerHTML="Player 1 wins";
                document.getElementById("flag1").style.visibility="visible";
                document.getElementById("flag2").style.visibility="hidden";
            }
            else if(score2>score1)
            {
                document.querySelector("h1").innerHTML="Player 2 wins";
                document.getElementById("flag2").style.visibility="visible";
                document.getElementById("flag1").style.visibility="hidden";
            }
            else
            {
                document.querySelector("h1").innerHTML="Draw";
                document.getElementById("flag1").style.visibility="hidden";
                document.getElementById("flag2").style.visibility="hidden";
            }
            
            return
        }

    // if(p1>p2)
    // {
    //     document.querySelector("h1").innerHTML="Player 1 wins";
    //     document.getElementById("flag1").style.visibility="visible";
    //     document.getElementById("flag2").style.visibility="hidden";
    // }
    // else if(p2>p1)
    // {
    //     document.querySelector("h1").innerHTML="Player 2 wins";
    //     document.getElementById("flag2").style.visibility="visible";
    //     document.getElementById("flag1").style.visibility="hidden";
    // }
    // else
    // {
    //     document.querySelector("h1").innerHTML="Draw";
    //     document.getElementById("flag1").style.visibility="hidden";
    //     document.getElementById("flag2").style.visibility="hidden";
    // }
 }

//  function startGame() {
//     var p1 = Math.floor(Math.random() * 6) + 1;
//     var p2 = Math.floor(Math.random() * 6) + 1;

//     var diceImages = [
//         "https://cdn-icons-png.flaticon.com/128/8336/8336943.png",
//         "https://cdn-icons-png.flaticon.com/128/8336/8336956.png",
//         "https://cdn-icons-png.flaticon.com/128/8336/8336955.png",
//         "https://cdn-icons-png.flaticon.com/128/8336/8336933.png",
//         "https://cdn-icons-png.flaticon.com/128/8336/8336931.png",
//         "https://cdn-icons-png.flaticon.com/128/8336/8336948.png"
//     ];

//     document.querySelector("#p1dice").setAttribute("src", diceImages[p1 - 1]);
//     document.querySelector("#p2dice").setAttribute("src", diceImages[p2 - 1]);
// }
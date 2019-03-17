$(document).ready(function()  {

  //decalaring the global variables
  var target = Math.floor(Math.random()*101+19);
  var crystal1val = Math.floor(Math.random()*12+1);
  var crystal2val = Math.floor(Math.random()*12+1);
  var crystal3val = Math.floor(Math.random()*12+1);
  var crystal4val = Math.floor(Math.random()*12+1);
  var userScore = $(document).val($("userScore"));
  console.log(crystal1val)

  //game start function 
  
    //variables to keep score
    var wins = parseInt($("#wins").val(),10);
    var losses = parseInt($("#losses").val(),10);
    
    //writes the target number to the span so the user can see it in the HTML
    $(".targetNumber").text(target);

    //function that adds the random crystal number to the users score
    function input(crystal){
      $("userScore").text(userScore + crystal)
    }

    //calls our input function when we click on the crystal buttons
    $("#crystal1").click(input(crystal1val))
    $("#crystal2").click(input(crystal2val))
    $("#crystal3").click(input(crystal3val))
    $("#crystal4").click(input(crystal4val))

    //logic that determines when the round is over and if the user wins or loses
    if (userScore === target) {
      alert("You Win!");
      wins++;
    }
    else if (userScore > target)  {
      alert("You Lose!");
      losses++;
    }
  }
)

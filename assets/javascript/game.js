$(document).ready(function()  {
  
  
    var target = Math.floor(Math.random()*101+19)
    var crystal1val = Math.floor(Math.random()*12+1)
    var crystal2val = Math.floor(Math.random()*12+1)
    var crystal3val = Math.floor(Math.random()*12+1)
    var crystal4val = Math.floor(Math.random()*12+1)
    var userScore = $("userScore");
    console.log(userScore)
    $(".targetNumber").innerHTML = target
    $("#crystal1").click(function(){
      $("#userScore").innerHTML = crystal1val + parseInt(userScore)
    })
  
  }
  
)

$(document).ready(function()  {
  var target = Math.floor(Math.random()*101+19)
  var crystal1val = Math.floor(Math.random()*12+1)
  var crystal2val = Math.floor(Math.random()*12+1)
  var crystal3val = Math.floor(Math.random()*12+1)
  var crystal4val = Math.floor(Math.random()*12+1)
  var userScore = $("#userScore").val()

  function gamestart(){

    var wins = parseInt($("#wins").val(),10)
    var losses = parseInt($("#losses").val(),10)

    $(".targetNumber").text(target)

    function input(crystal){
      $("userScore").text(userScore + crystal)
    }

    $("#crystal1").click(input(crystal1val))
    $("#crystal1").click(input(crystal2val))
    $("#crystal1").click(input(crystal3val))
    $("#crystal1").click(input(crystal4val))

    if (userScore === target) {
      alert("You Win!")
      wins++
    }
    else if (userScore > target)  {
      alert("You Lose!")
      losses++
      gamestart()
    }
    gamestart()
  }
  }
)

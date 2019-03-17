$(document).ready(function()  {
  var userScore = parseInt($("#userScore"),10);

  var wins = 0;
  var losses = 0;
  var target;

  target = Math.floor(Math.random()*101+19);

  function start()  {
    $(".targetNumber").html(target)

    var images = ["https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmgefanon%2Fimages%2F6%2F69%2FKinetic_Crystal.jpg%2Frevision%2Flatest%3Fcb%3D20150409231719&imgrefurl=https%3A%2F%2Fmgefanon.fandom.com%2Fwiki%2FKinetic_Crystal&docid=_542IdKX_LnmkM&tbnid=8HkvRCLa2WsljM%3A&vet=10ahUKEwiY66Hx7oXhAhVJnuAKHXmbBGsQMwh6KA8wDw..i&w=314&h=524&safe=off&bih=888&biw=1920&q=crystal&ved=0ahUKEwiY66Hx7oXhAhVJnuAKHXmbBGsQMwh6KA8wDw&iact=mrc&uact=8", "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjDnr-A74XhAhXMJt8KHUC6DcEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.com%2Frockcloud-Titanium-Decoration-Gemstone-Specimen%2Fdp%2FB01G3EECXM&psig=AOvVaw1ajZS5kZzMwusNidd3BHGI&ust=1552798382709474", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fracichemedcentral.com.au%2Fimages%2Fcrystal-growing.png&imgrefurl=https%3A%2F%2Fracichemedcentral.com.au%2Fcrystal-growing&docid=ACKnT66OXcBVIM&tbnid=2mEpKM8-Et0vqM%3A&vet=12ahUKEwjShJeX74XhAhVMmuAKHTZkDtI4yAEQMygIMAh6BAgBEAk..i&w=301&h=347&safe=off&bih=888&biw=1920&q=crystal&ved=2ahUKEwjShJeX74XhAhVMmuAKHTZkDtI4yAEQMygIMAh6BAgBEAk&iact=mrc&uact=8", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fstarwars%2Fimages%2F5%2F5f%2FLightsaberCrystal-SWE.png%2Frevision%2Flatest%3Fcb%3D20160911062335&imgrefurl=https%3A%2F%2Fstarwars.fandom.com%2Fwiki%2FCrystal&docid=cs4ku-DfNdmCcM&tbnid=tLHpLVZBaEBinM%3A&vet=12ahUKEwiJwveL74XhAhVtQt8KHVBrB1k4ZBAzKFgwWHoECAEQWg..i&w=340&h=615&safe=off&bih=888&biw=1920&q=crystal&ved=2ahUKEwiJwveL74XhAhVtQt8KHVBrB1k4ZBAzKFgwWHoECAEQWg&iact=mrc&uact=8"]

      for(var i=1; i<=4; i++){
         crystalVal = Math.floor(Math.random()*11+1);
        var crystal = $("<div>")
        crystal.attr({
          "class":'crystal'+i,
          "id": 'crystalid',
          "value":crystalVal
        })
        crystal.value = crystalVal;
        console.log("Crystal Val " + crystal.value)
       // crystal.css("background-image", 'url('+images[i]+')')
      
        $(".crystal").append(crystal)

      }

      $("div").on("click", "#crystalid", function(event) {

      console.log("Crystal Value: " + $(this).attr('value'))
        
      var number = $(this).attr('value')
        console.log(number)
      userScore += number
      console.log(userScore)
      $("#userScore") .text(userScore);
      })
    if (userScore===target){
      confirm("You Win!");
      wins++;
      start();
    }
    else if (userScore>target){
      confirm("You Lose!");
      losses++;
      start();
    }
  }
  start()
})
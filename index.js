var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonCase = this.innerHTML;
    makeSound(buttonCase);
    buttonAnimation(buttonCase);


    //What to do when 'click' is detected
  });

  document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

}


function makeSound(key) {
  switch(key) {
    case "w":
      var tone1 = new Audio("sounds/tom-1.mp3");
      tone1.play();
      break;
    case "a":
      var tone2 = new Audio("sounds/tom-2.mp3");
      tone2.play();
      break;
    case "s":
      var tone3 = new Audio("sounds/tom-3.mp3");
      tone3.play();
      break;
    case "d":
      var tone4 = new Audio("sounds/tom-4.mp3");
      tone4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
  }
}

function buttonAnimation(keyValue) {
  var activeButton = document.querySelector("." + keyValue);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100); 
}

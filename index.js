//This is a comment

var button = document.querySelectorAll("button");

document.addEventListener("keydown", function() {
  var keyPressed = event.key;
  makeSound(keyPressed);
  buttonAnimation(keyPressed);
});

for (var i = 0; i < button.length; i++) {

  button[i].addEventListener("click", function() {

    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);

  });
}

function makeSound(key) {
  switch(key){

    case 'w':
      var audio = new Audio("sounds/tom-1.mp3")
      audio.play();
      break;

    case 'a':
      var audio = new Audio("sounds/tom-2.mp3")
      audio.play();
      break;

    case 's':
      var audio = new Audio("sounds/tom-3.mp3")
      audio.play();
      break;

    case 'd':
      var audio = new Audio("sounds/tom-4.mp3")
      audio.play();
      break;

    case 'j':
      var audio = new Audio("sounds/snare.mp3")
      audio.play();
      break;

    case 'k':
      var audio = new Audio("sounds/crash.mp3")
      audio.play();
      break;

    case 'l':
      var audio = new Audio("sounds/kick-bass.mp3")
      audio.play();
      break;

  }
}

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);

}



// audio.play();

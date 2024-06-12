document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector("#Enter");
    var nameInput = document.querySelector("#nameInput");
    var cont0 = document.querySelector("#contant0");
    var cont1 = document.querySelector("#contant");
    var mainText = document.querySelector("#main");
    const b1 = document.querySelector("#yesButton");
    var text = document.querySelector("#contant #main"); 

    btn.addEventListener('click', function() {
        var name = nameInput.value;
        if (name) {
            mainText.innerText = name + "! Do you like Tushar?";
            cont0.style.display = "none";
            cont1.style.display = "block";
        }
    });

    let noButtonClicks = 0;

    b1.addEventListener("click", function() {
        text.innerHTML = "Thank You!🥰"; 
    });

    document.getElementById("noButton").addEventListener("click", function() {
        noButtonClicks++;
        if (noButtonClicks >= 5) {
            chutiyaText.style.display = "block";
        }
        const button = document.getElementById("noButton");
        const newPositionTop = Math.floor(Math.random() * window.innerHeight);
        const newPositionLeft = Math.floor(Math.random() * window.innerWidth);
        button.style.top = newPositionTop + "px";
        button.style.left = newPositionLeft + "px";
    });
});
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  var yesBtn = document.getElementById("yesBtn");
  var noBtn = document.getElementById("noBtn");
  var playBtn = document.getElementById("playBtn");
  var pauseBtn = document.getElementById("pauseBtn");
  var audio = document.getElementById('myAudio');
  btn.onclick = function() {
      modal.style.display = "block";
  }
  span.onclick = function() {
      modal.style.display = "none";
      audio.play();
      audio.currentTime = 0;
  }
  yesBtn.onclick = function() {
      document.querySelector('.audio-controls').style.display = 'block';
  }
  noBtn.onclick = function() {
      modal.style.display = "none";
      audio.pause();
      audio.currentTime = 0;
  }
  playBtn.onclick = function() {
      audio.play();
  }
  pauseBtn.onclick = function() {
      audio.pause();
  }
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          audio.pause();
          audio.currentTime = 0;
      }
  }
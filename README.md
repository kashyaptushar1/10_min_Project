

## Hello World , I am Tushar Kashyap
# Interactive Webpage with Video Background and Music Modal

This project is a fun interactive webpage that features a video background, a name input prompt, and a modal to control music playback. The user is prompted to enter their name and answer questions in a playful way.

## Features

- **Video Background**: A looping video is displayed as the background.
- **Name Input Prompt**: Users are asked to enter their name, which is then displayed in a personalized message.
- **Music Modal**: A modal that allows the user to choose whether or not to play music.
- **Button Animations**: Buttons that respond to user interactions, including a button that moves around the screen when clicked multiple times.

## File Structure

- `index.html`: The main HTML file containing the structure of the webpage.
- `style.css`: The CSS file for styling the webpage.
- `script.js`: The JavaScript file for adding interactivity to the webpage.
- `vid.mp4`: The video file used as the background.
- `aud3.mp3`: The audio file played in the modal.

## HTML Overview

The `index.html` file contains the structure of the webpage. Here are the key sections:

### Video Background

```html
<video autoplay muted loop src="vid.mp4"></video>
```

### Name Input Prompt

```html
<div id="contant0">
    <h1>Please! Enter your name</h1>
    <input placeholder="Example - Tushar" type="text" id="nameInput">
    <button id="Enter">Enter</button>
    <button id="myBtn">Play Song</button>
</div>
```

### Music Modal

```html
<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <p>Do You Like to play music?</p>
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
        <div class="audio-controls">
            <button id="playBtn">Play</button>
            <button id="pauseBtn">Pause</button>
        </div>
        <audio id="myAudio" src="aud3.mp3"></audio>
    </div>
</div>
```

### Post-Input Interaction

```html
<div id="contant">
    <h1 id="main">.</h1>
    <button id="yesButton">Yes😍</button>
    <button id="noButton">No🥰</button>
    <p id="chutiyaText" style="display: none;">Kya kr rahi hai yaar😒.</p>
</div>
```

## CSS Overview

The `style.css` file styles the webpage. It includes styles for the video background, input prompt, modal, and buttons. Key styles include:

- Fullscreen video background
- Centered input prompt with transparent background
- Modal with backdrop blur effect
- Responsive design adjustments for smaller screens

## JavaScript Overview

The `script.js` file contains the logic for interactivity. Key functionality includes:

### Name Input Handling

```javascript
var btn = document.querySelector("#Enter");
var nameInput = document.querySelector("#nameInput");
var cont0 = document.querySelector("#contant0");
var cont1 = document.querySelector("#contant");
var mainText = document.querySelector("#main");

btn.addEventListener('click', function() {
    var name = nameInput.value;
    if (name) {
        mainText.innerText = name + "! Do you like Tushar?";
        cont0.style.display = "none";
        cont1.style.display = "block";
    }
});
```

### Button Animations

```javascript
let noButtonClicks = 0;
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
```

### Music Modal Control

```javascript
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
```

## Running the Project

To run this project, simply open the `index.html` file in a web browser. Ensure that `vid.mp4` and `aud3.mp3` are in the same directory as `index.html`.

## License

This project is open source and available under the [MIT License].
```

You can create these files in your project directory with the provided content, ensuring the `vid.mp4` and `aud3.mp3` files are included in the same directory as `index.html`. This setup will create a functional interactive webpage with the specified features.
## Output



https://github.com/kashyaptushar1/10_min_Project/assets/127180405/8dd631c5-ddc7-48c7-b49d-2cdf1329cce2


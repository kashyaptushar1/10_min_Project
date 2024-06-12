Sure, here is the complete content including the HTML, CSS, JavaScript, and the README.md file all together:

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Webpage</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div id="page1">
        <video autoplay muted loop src="vid.mp4"></video>
       <div id="contant0">
        <h1>Please! Enter your name</h1>
        <input placeholder="Example - Tushar" type="text" name="" id="nameInput">
        <br>
        <button id="Enter">Enter</button>
        <br>
        <button id="myBtn">Play Song</button>

        <!-- The Modal -->
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

       </div>
       <div id="contant">
        <h1 id="main">.</h1>
        <button id="yesButton">Yes😍</button>
        <button id="noButton">No🥰</button>
        <p id="chutiyaText" style="display: none;">Kya kr rahi hai yaar😒.</p>
       </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### `style.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    height: 100%;
    width: 100%;
}

#page1 {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: red;
    overflow: hidden;
}

#page1 video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

#page1 #contant0 {
    border-radius: 2vw;
    height: 90%;
    width: 50%;
    backdrop-filter: blur(10px);
    background-color: rgba(226, 223, 223, 0.337);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
    display: block;
}

#contant0 h1 {
    text-align: center;
    font-size: 3vw;
}

#contant0 input {
    margin-top: 2vw;
    margin-left: 20%;
    height: 2.9vw;
    width: 30vw;
    font-size: 3vw;
    border: none;
    outline: none;
    border-bottom: 2px solid black;
    background-color: transparent;
    text-align: center;
    padding-bottom: .5vw;
}

input::placeholder {
    font-size: 1.5vw;
}

#Enter {
    padding: .5vw 2vw;
    font-size: 2vw;
    border-radius: 2vw;
    margin-left: 40%;
    margin-top: 2vw;
}

#page1 #contant {
    position: relative;
    border-radius: 2vw;
    height: 90%;
    width: 50%;
    background-color: rgba(226, 223, 223, 0.337);
    backdrop-filter: blur(10px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: none;
}

#contant h1 {
    text-align: center;
    font-size: 4vw;
}

#yesButton {
    padding: .5vw 2vw;
    font-size: 2vw;
    border-radius: 2vw;
    margin-top: 2vw;
    margin-left: 40%;
    position: absolute;
}

#noButton {
    padding: .5vw 2vw;
    font-size: 2vw;
    border-radius: 2vw;
    margin-top: 8vw;
    margin-left: 40%;
    position: absolute;
}

#myBtn {
    padding: .5vw 2vw;
    font-size: 2vw;
    border-radius: 2vw;
    margin-left: 35%;
    margin-top: 2vw;
}

.modal {
    display: none; 
    position: fixed; 
    z-index: 1; 
    left: 0; 
    top: 0; 
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0, 0, 0); 
    background-color: rgba(0, 0, 0, 0.4); 
    padding-top: 60px;
}

.modal-content {
    background-color: #fff;
    margin: 5% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%; 
    text-align: center;
    border-radius: 2vw;
}

.modal-content p {
    font-size: 2vw;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.audio-controls {
    margin-top: 20px;
}

#playBtn, #pauseBtn, #yesBtn, #noBtn {
    padding: .5vw 2vw;
    font-size: 2vw;
    border-radius: 2vw;
    margin-left: 5%;
    margin-top: 1vw;
}

@media (max-width: 500px) {
    
#page1 {
    position: relative;
    height: 100%;
    width: 100%;
}

#page1 video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

#page1 #contant0 {
    border-radius: 2vw;
    height: 50%;
    width: 70%;
    backdrop-filter: blur(10px);
    background-color: rgba(226, 223, 223, 0.337);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
    display: block;
}

#contant0 h1 {
    text-align: center;
    font-size: 8vw;
}

#contant0 input {
    margin-top: 5vw;
    margin-left: 11%;
    height: 15vw;
    width: 50vw;
    font-size: 10vw;
    border: none;
    outline: none;
    border-bottom: 2px solid black;
    background-color: transparent;
    text-align: center;
    padding-bottom: .1vw;
}

input::placeholder {
    font-size: 5vw;
}

#Enter {
    padding: 2vw 5vw;
    font-size: 5vw;
    border-radius: 5vw;
    margin-left: 30%;
    margin-top: 10vw;
}

#page1 #contant {
    position: relative;
    border-radius: 2vw;
    height: 50%;
    width: 70%;
    background-color: rgba(226, 223, 223, 0.337);
    backdrop-filter: blur(10px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: none;
}

#contant h1 {
    text-align: center;
    font-size: 10vw;
}

#yesButton {
    padding: 2vw 5vw;
    font-size: 5vw;
    border-radius: 5vw;
    margin-top: 5vw;
    margin-left: 30%;
    position: absolute;
}

#noButton {
    padding: 2vw 5vw;
    font-size: 5vw;
    border-radius: 5vw;
    margin-top: 21vw;
    margin-left: 30%;
    position: absolute;
}

#myBtn {
    padding: 2vw 5vw;
    font-size: 5vw;
    border-radius: 5vw;
    margin-left: 20%;
    margin-top: 10vw;
}

.modal {
    display: none; 
    position: fixed; 
    z-index: 1; 
    left: 0; 
    top: 0; 
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0, 0, 0); 
    background-color: rgba(0,

 0, 0, 0.4); 
    padding-top: 60px;
}

.modal-content {
    background-color: #fff;
    margin: 5% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%; 
    text-align: center;
    border-radius: 2vw;
}

.modal-content p {
    font-size: 6vw;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.audio-controls {
    margin-top: 20px;
}

#playBtn, #pauseBtn, #yesBtn, #noBtn {
    padding: .5vw 2vw;
    font-size: 4vw;
    border-radius: 2vw;
    margin-left: 5%;
    margin-top: 1vw;
}
}
```

### `script.js`

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

### `README.md`

```markdown
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

This project is open source and available under the [MIT License](LICENSE).
```

You can create these files in your project directory with the provided content, ensuring the `vid.mp4` and `aud3.mp3` files are included in the same directory as `index.html`. This setup will create a functional interactive webpage with the specified features.

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


<!DOCTYPE html>: Defines the document type and version of HTML.
<html lang="en">: The root element of the HTML document with language set to English.
<head>: Contains meta-information about the document.
<meta charset="UTF-8">: Specifies the character encoding.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Ensures the webpage is responsive.
<title>Interactive Webpage</title>: Sets the title of the webpage.
<link rel="stylesheet" href="style.css">: Links to the external CSS file.
<body>: The main content of the HTML document.
<div id="page1">: A container for the main content.
<video autoplay muted loop src="vid.mp4"></video>: Embeds a video that autoplays, is muted, and loops.
<div id="contant0">: A container for the initial user prompt.
<h1>Please! Enter your name</h1>: A heading prompting the user to enter their name.
<input placeholder="Example - Tushar" type="text" name="" id="nameInput">: An input field for the user's name.
<button id="Enter">Enter</button>: A button to submit the entered name.
<button id="myBtn">Play Song</button>: A button to open the music modal.
<div id="myModal" class="modal">: The modal container.
<div class="modal-content">: Container for modal content.
<span class="close">&times;</span>: A close button for the modal.
<p>Do You Like to play music?</p>: A prompt inside the modal.
<button id="yesBtn">Yes</button>: Button for confirming to play music.
<button id="noBtn">No</butt

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

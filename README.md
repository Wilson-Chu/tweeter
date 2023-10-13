# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

HTML, CSS, JS, jQuery and AJAX were used for the front-end, and Node with Express was used for the back-end.

Users can submit a message up to 140 characters long, and the program will display that message immediately on screen. A valid message can be anywhere from 1 to 140 characters long, otherwise the program will display an error message and the user will not be able to submit their message. This website is responsive (test it out!) for both desktop and smaller devices (e.g. tablets, smartphones).

The prompt at the top right of the page will also toggle the input box to show/hide upon a click (Stretch activity).



## Getting Started

1. Clone your repository onto your local device (SSH) `git clone git@github.com:Wilson-Chu/tweeter.git`
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
   - (OR use `npm run local` if you prefer using `nodemon`)
4. Go to <http://localhost:8080/> in your browser to see the project running.

## Dependencies

- Express
- Node 5.10.x or above
- Body Parser
- Nodemon

## Future Work

- Add a button in the lower right hand corner to go to the top of the page if the user has to scroll down a lot
- Animate the "Write a new tweet" prompt on the top right
- Add some effects to the background images or transitions
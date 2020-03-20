
# Project 1

 - By Cecilia Butler
 - Last Update:  March 19, 2020
 - Production URL:  http://e28p1.domain.com


## Outside Resources

No outside resources were used in this game with the exception of assistance from help sites like Stackoverflow, Github and 
YouTube for addition how-to videos.  Background images and some fonts courtesy of Google Images and Google Fonts developer
sites.


## Notes For Instructor

This game is called Guess The Number.  When launched, it will display a greeting prompt the player for their name.    The player will provide a number and they will be informed if the number is correct.  A player will be allowed to replay another round or reset the game after they win or lose a round.

Additional information: 
 1. The Vue.js and images files are in separate folders, js and images respectively. 
 2. To play the game, the player may need to scroll up to see all of the features and/or get to the reset and replay buttons.
 3. Commented out code that displays the random number remains in the code.  Near line 336 using most code editors (ie., Notepad++, PyCharm or Brackets).  See the snippet below:
 4. There is an error message if a non-numeric guess is entered.
 5. The status message flashes.  However, the reset and replay buttons will still work.

    <!-- These lines remain for testing the random number code and the collection of game round data --> 
 Game round information is {{roundInfo}} <br> randomnumber is {{randomNum}} <br>


## Player Directions

 1. Launch the game at http://e28p1.domain.com.
 2. Type in your name in the input field.
 3. Click button "Play Game" to start the game.
 4. Enter a guess of 0 to up to and inclusive of 50.
 5. You can guess up to 5 times.  Cards that have your guess will appear below the input field.
 6. If you win or lose, a status message will flash.  The winning message will have green border highlights.  The losing message will have red highlights with an "unhappy face" image.  You have a chance to reset or replay.  Below is what will occur with each selection.
 - [x] Click the Replay button to continue and play another round.  A round detail indicator (upper right) will keep track of the rounds and the winner.  Your guess details and counter will reset.  All numbers from 0 to 50 inclusive are reusable.
 - [x] Click the Replay button to fully reset the game. 

## Files

 1. Index.html for the main game.
 2. game.js is the main Vue.js file
 3. Images:  unhappyFace.jpg, argyle.jpg and right.jpg and wrong.jpg are the files that provide the images on the cards and the background of the win/lose game status messages.

 


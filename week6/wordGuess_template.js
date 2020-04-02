// C. Butler:  Game for DGMD Vue.js course.  Project 1, Word Game Vue.js file
// Guess the number game instance

Vue.component('game-status', {
  props: {
    rightMsg: {
        type: String,
        default: "right-o"
    },

    wrongMsg: {
        type: String,
        default: "Hi there, that is the wrong answer..."
    }
 },

  template: "#game-status",
})

let app = new Vue({
  // Options
  el: '#game',
    data: {
        count: 0,
        playerName: "",
        round: 0,
        guesses: [],
        randomNum: Math.floor(Math.random() * 51),
        guess: null,
        guessesLeft: 5,
        correct: null,
        exist: null,
        isValid: null,
        validNum: null,
        error: false,
        lost: false,
        playing: false,
        showErr: false ,
        showResponse: false,
        start: false,
        msg: "",
        imgAlt: "",
        imgSrc: "",
        lostAlt: "loser",
        lostImg: "images/unhappyFace.jpg",
        rightAlt: "Winner",
        rightImg: "images/right.jpg",
        wrongAlt: "Wrong Answer",
        wrongImg: "images/wrong.jpg",
    },

    methods:{
        myGame: function(){
            let playerName = this.playerName;
            let guessesLeft = 5 - this.count;

            if (this.guess != this.randomNum && this.count <= 4){
                this.correct = false;
                this.msg = "Sorry, this is the wrong answer";
                this.showResponse = true;
                this.guess = "";
                this.correct = "";
                this.imgAlt = "Wrong Answer";
                this.imgSrc = "images/wrong.jpg";
                }

                else if(this.guess != this.randomNum && this.count == 5){
                this.lost = true;
                this.correct = false;
                this.showResponse = true;
                this.msg = "Sorry, this was your last chance.  The number was " + this.randomNum;
                this.guess = "";
                this.correct = "";
                this.imgAlt = "Loser";
                this.imgSrc = "images/unhappyFace.jpg";
                }
            else{
                this.isValid = true;
                this.correct = true;
                this.showResponse = true;
                this.guess = "";
                this.imgSrc = "";
                this.imgAlt = "";
                this.msg = "You've guessed the magic number.  Congratulations ";
                this.imgAlt = "Right Answer";
                this.imgSrc = "images/right.jpg";
            }
        },

        //Lock the input field to stop additional entries
        lock:
            function() {
                if(this.count === 5 || this.correct === true){
                    document.getElementById("guess").disabled = true;
                }
            },

        //A new game will load if they want to play again.
        reset:
            function(){
                let playerName = this.playerName;
                let guessesLeft = 5;
                this.count = 0;
                this.guesses = [];
                //let randomNum = Math.floor(Math.random() * 51);
                this.randomNum = Math.floor(Math.random() * 51);
                this.guess = null;
                //this.guessesLeft = 5;
                this.correct = null;
                this.exist = null;
                this.isValid = null;
                this.validNum = null;
                this.lost = false;
                this.start = true;
                this.msg = "";
                this.imgAlt = "";
                this.imgSrc = "";
                document.getElementById("guess").disabled = false;
            },

        //Validates the number entered to ensure it is valid.
        validate: function(guess){
            validNum = this.guess;
            exist = this.guesses.indexOf(validNum);
            currGuess = document.getElementById('guess').value

            if (validNum > 50 || isNaN(validNum) || exist >= 0) {
                this.isValid = false;
                this.showErr = true;
                this.count--;
                document.getElementById("overlay").style.display = "block";
                document.getElementById('valid').innerHTML =
                "Your entry, " + currGuess + ", is invalid.  Please enter a valid integer from 0 ot 50. Guesses can not be repeated.  Try again....";
                }
            else{
                this.exist = false;
                this.isValid = true;
                this.guesses.push(validNum);
                //console.log("Recent guesses:  ", this.guesses);
            }
            return validNum;
        },

        on: function(){
                document.getElementById("overlay").style.display = "block";
        },

        off: function() {
                document.getElementById("overlay").style.display = "none";
            }

    },          //Methods section delimiter

    mount(){}

});


// C. Butler:  Game for DGMD Vue.js course.
// Project One --  Create a Game using a component and style bindings

Vue.component('player-greeting', {

props: {
    playerName: {
        type: String,
    },
},

  template: "#player-greeting",
})

let app = new Vue({
  // Options
  el: '#game',
    data: {
        count: 0,
        round: 0,
        playerName: "",
        winner: "",
        roundInfo: [],
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
        showErr: false ,
        showResponse: false,
        start: false,
        msg: "",
        imgAlt: "",
        imgSrc: "",
        rightAlt: "Right Answer",
        rightImg: "images/right.jpg",
        styleObject: {
            color: 'goldenrod',
            fontSize: 40 + 'px',
            top: '20%',
        }
    },

    methods:{
        myGame: function(){
            let playerName = this.playerName;
            let guessesLeft = 5 - this.count;
            let round = this.round;
            let winner = this.winner;
            console.log("The random number is ", this.randomNum);

            if (this.guess != this.randomNum && this.count <= 4){
                this.correct = false;
                this.msg = "Sorry, this is the wrong answer";
                this.showResponse = true;
                this.guess = "";
                this.correct = "";
                this.imgSrc = "images/wrong.jpg";
                this.imgAlt = "Wrong Answer";
                }

                else if(this.guess != this.randomNum && this.count == 5){
                this.lost = true;
                this.correct = false;
                this.showResponse = true;
                this.msg = "Sorry, that was your last chance.  The number was " + this.randomNum;
                this.guess = "";
                this.imgAlt = "Loser";
                this.imgSrc = "images/unhappyFace.jpg";

                winner = "ComCee";
                this.roundInfo.push({round, winner});
                }
            else{
                this.validNum = true;
                this.correct = true;
                this.showResponse = true;
                this.msg = "Congratulations, you've guessed the magic number.";
                this.guess = "";

                winner = playerName;
                this.roundInfo.push({round, winner});
            }
        },

        //Lock the input field to stop additional entries
        lock:
            function() {
                if(this.count === 5 || this.correct === true){
                    document.getElementById("guess").disabled = true;
                    document.getElementById("enterGuess").disabled = true;
                }
            },

        //A new game will load if they want to play again.
        replay:
            function(){
                let playerName = this.playerName;
                //let round = this.round + 1;
                this.guesses = [];
                this.correct = null;
                this.lost = null;
                this.guess = null;
                this.count = 0;
                this.round += 1;
                this.guessesLeft = 5;
                this.randomNum = Math.floor(Math.random() * 51);
                document.getElementById("guess").disabled = false;
                document.getElementById("enterGuess").disabled = false;
                console.log(this.randomNum);
            },

        reset:
            function(){
                location.reload(true);
            },

        //Validates the number entered to ensure it is valid.
        validate: function(guess){
            validNum = this.guess;
            exist = this.guesses.indexOf(validNum);
            currGuess = document.getElementById('guess').value;

            if (validNum > 50 || isNaN(validNum) || exist >= 0) {
                this.isValid = false;
                this.showErr = true;
                this.count--;
                document.getElementById("overlay").style.display = "block";
                document.getElementById('valid').innerHTML = "Your guess, " + currGuess + ", is invalid.  Please enter a valid integer from 0 ot 50. Guesses can not be repeated.  Try again....";
                }
            else{
                this.exist = false;
                this.isValid = true;
                this.guesses.push(validNum);
            }
            return validNum;
        },

        on: function(){
                document.getElementById("overlay").style.display = "block";
        },

        off: function() {
                document.getElementById("overlay").style.display = "none";
            }

    },  //Methods section delimiter

     mount(){}
});

// C. Butler:  Game for DGMD Vue.js course.
// Word Scramble Game for Week 5
let app = new Vue({

  // Options
  el: '#game',
    data: {
        playerName: "",
        randomWord: "",
        hint: "",
        shuffled: "",
        randomNum: "",
        guess: "",
        msg: "",
        correct: null,
        start: false,
        url:"https://www.mydomain.com",
        words: [
            ['grapes', 'Red, white or purple and always good'],
            ['apple', 'Sometimes red, sometimes delicious'],
            ['washington', 'Rushmore’s left edge'],
            ['pumpkin', 'Halloween’s favorite fruit'],
            ['football', 'Play with your hands or feet, depending on your location'],
            ['news', 'Information that is good or bad'],
            ['donut', 'It can be glazed, plain or decorated'],
            ['games', 'You play, sometimes you win too'],
        ]
    },

    computed:{
        shuffle: function(){
            // Create a random number for random word selection
            let randomNum = Math.floor(Math.random() * this.words.length);
            let word = this.words[randomNum][0];
            this.hint = this.words[randomNum][1];

            //console.log("random number is: ", randomNum);
            //console.log("This is the word selected to shuffle:  ", word);
            //console.log("hint: ", this.hint);

           // Place word into array and shuffle word with for loop
            var wordarray = word.split("");
            var arraylen = wordarray.length;

            for (var i = 0; i < arraylen - 1; i++) {
                var j = randomNum;

                var temp = wordarray[i];
                wordarray[i] = wordarray[j];
                wordarray[j] = temp;
            }

            // Compile shuffled word and return to program
             shuffled = wordarray.join("");
             randomWord = word;
             hint = this.hint;
             //console.log(shuffled);

             return shuffled;
        }
    },

    // Methods to compare the guess to shuffled word and reset the game
    methods:{
        checkWord: function(guess){
            //console.log("checking word: ", randomWord);
            //console.log("guess is:  ", guess);
            if(randomWord === this.guess) {
                console.log("randomword is: ", randomWord);
                this.correct = true;
                this.answer = "correct";
                this.msg = "You got it right!";
                //console.log(this.msg);
            }
            else{
                this.correct = false;
                this.answer = "incorrect";
                this.guess = "";
                this.msg="Sorry, try again!";
            }
        },

        reset: function() {
            console.log("resetting");
            this.randomWord = "";
            this.hint = "";
            this.guess = "";
            this.correct = null;
            //correct = null;
            this.shuffle;
            this.answer = null;
        }
    }
});



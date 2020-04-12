// C. Butler:  Game for DGMD Vue.js course.
// Word Scramble Game for Week 6 -- Generate a color coded response with a component

Vue.component('game-status', {
  props: {
    correct: {
        type: Boolean,
        required: true
    },

    rightMsg: {
        type: String,
        default: "right-o"
    },

    wrongMsg: {
        type: String,
        default: "Hi there, that is the wrong answer..."
    }
 },

  template: `
    <div>
        <div v-if="correct">{{rightMsg}} hi there
            <button v-show="correct" @click='$emit("game-status")'>Play Again</button>
        </div>
        <div v-if="!correct" v-show="!correct">{{wrongMsg}} awwww</div>
    </div>

  `,

  data(){
    return{
        playerName: this.playerName,
        answer: null,
    }
  },

  methods: {},
})

let app = new Vue({
  // Options
  el: '#game',
    data: {
        answer: "",
        playerName: "",
        prevWord: "",
        randomWord: "",
        hint: "",
        shuffled: "",
        randomNum: "",
        guess: "",
        msg: "",
        correct: "",
        start: false,
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

    methods:{
        checkWord: function(guess){
            //console.log("checking word: ", randomWord);
            //console.log("guess is:  ", guess);
            if(randomWord === this.guess) {
                this.correct = true;
                correct = true;
                this.answer = "correct";
                this.msg = "You got it right!";
            }
            else{
                this.correct = false;
                this.answer = "incorrect";
                this.msg="Sorry, try again!";
                this.guess = "";
            }

            let prevWord = this.guess;
        },

        reset: function() {
            console.log("resetting");
            this.randomWord = "";
            this.hint = "";
            this.guess = "";
            this.correct = null;
            this.answer = null;
            this.shuffle;
        }
    },

    computed:{
        shuffle: function(){
            let randomNum = Math.floor(Math.random() * this.words.length);
            word = this.words[randomNum][0];
            this.hint = this.words[randomNum][1];

            //console.log("Declared random number is: ", randomNum);
            //console.log("This is the word selected to shuffle:  ", word);
            //console.log("hint: ", this.hint);

            //While loop checks if word was used and reselects using a random method until new word
            console.log(this.prevWord);
            while (word === this.prevWord) {
              randomNum = Math.floor(Math.random() * this.words.length);
              word = this.words[randomNum][0]
            }

            //Shuffle word using an array and return word
            var wordarray = word.split("");
            var arraylen = wordarray.length;

            for (var i = 0; i < arraylen - 1; i++) {
            var j = randomNum;

            var temp = wordarray[i];
            wordarray[i] = wordarray[j];
            wordarray[j] = temp;
          }

            shuffled = wordarray.join("");
            randomWord = word;
            console.log(shuffled);
            hint = this.hint

            return shuffled;
        }
    },

    mount: function(shuffle){}
});




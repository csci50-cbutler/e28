// C. Butler:  Game for DGMD Vue.js course.  Project 1, Week 3
// Guess the number game instance
let app = new Vue({

    // Options
    el: '#game',
    data: {
        playerName: "",
        guessNum: [],
        guess: null,
        start: false
    }

});
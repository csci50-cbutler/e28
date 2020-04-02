<template>
    <div>
        <div v-if="correct">{{this.rightMsg}}
            <button v-show="correct" @click='$emit("game-status")'>Play Again</button>
        </div>
        <div v-if="!correct">{{this.wrongMsg}}</div>
    </div>
</template>

<script>
    export default {
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
        }
    }
</script>

<style>
    [v-cloak]{
        display: none;
    }

    h1{
        color: pink;
        font-weight: bolder;
    }

    .right{
        background-color: green;
        width: 20%;
    }
    .wrong{
        background-color: red;
        width: 25%;
    }
    .good {
        background-color: gold;
        color: blue;
        width: 20%;
    }
    .bad {
        background-color: navy;
        color: gold;
        width: 25%;
    }
</style>

<template>
    <div>
        <div id="timer" class="bgimg">
            <div class="topleft">
                <p>Logo</p>
            </div>
            <div class="middle">
                <h1>We are working on a new design...</h1>
                <hr>
                <div id="clock" style="font-size:28px"></div>
            </div>
            <div class="bottomright">
                <p>Come back soon to check on our progress!!!</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            setClockInterval: null,
            countDownDate: new Date("Jan 5, 2021 15:37:25").getTime(),
            now: new Date().getTime(),
            distance: countDownDate - now,
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),

        },
        template: "#count-down",

        methods: { 
            startClock: function(){ 
                setClockInterval = setInterval(function() {
                // Display the result in the element with id="demo"
                document.getElementById("clock").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(setClockInterval);
                    document.getElementById("demo").innerHTML = "EXPIRED";
                } 
                }, 1000)
            }
        },
    }
</script>

<style scoped>
    .bgimg {
    background-image: url('images/notepad.png');
    height: 100%;
    background-position: center;
    background-size: cover;
    position: relative;
    }

    .topleft {
    position: absolute;
    top: 0;
    left: 16px;
    }

    .bottomright {
    position: absolute;
    bottom: 24%;
    right: 18%;
    font-weight: bold;
    }

    .middle {
    position: absolute;
    top: 46%;
    left: 30%;
    transform: translate(-50%, -50%);
    text-align: center;
    }

    hr {
    margin: auto;
    width: 40%;
    }

    .bottomright p {
        color: goldenrod;
    }
</style>
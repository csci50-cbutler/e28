<template>
    <div id="admin" @load=startClock()>
        <div id="clock" class="bgimg">
            <div class="topleft">
                <h1>THE NEW FUTURE OF SETTINGS FOR YOUR CONTACT CENTER APPLICATION</h1>
            </div>
            <div class="middle">
                <h2>Reveal Day is May 31, 2021</h2>
                <hr>
                <Countdown deadline="May 31, 2021"></Countdown>
                 <p>Come back soon to check on our progress...</p>
            </div>
        </div>
        <footer class="footer">
            <p> &nbsp;&nbsp; North America Call Centers -- All Rights Reserved &nbsp;&nbsp;</p>
        </footer>
    </div>
</template>

<script>
import Countdown from 'vuejs-countdown';

export default {
    name: ' ',
    components: { 
        Countdown 
    },
    data: function() {
        return{};
    },
};
</script>

<style scoped>
    body, html {
        height: 100%;
        margin: 0;
        background-color: oldlace;
        color: #1D024F;
        font-weight: bold;
        }
    p {
        color: goldenrod;
        font-size: 20px;
        font-weight: bold;
        }
    .bgimg{
        background-image: image('@/assets/images/wfm1.gif');
    }
    .navbar {
        margin-bottom: 50px;
        border-radius: 0;
        background-color: #1D024F;
        }
    .footer p {
        background-color: #1D024F;
        color: #C5B870;
        text-align: center;
        padding: 6px 0px 6px 0px;
        bottom: 0;
        position: absolute;
        width: 100%;
        height: 4.5rem;     /* Footer height */
        }
    .topleft {
        position: absolute;
        top: 40%;
        left: 26px;
        }

    .middle {
        color: goldenrod;
        position: absolute;
        margin-top: 10%;
        left: 20%;
        transform: translate(-50%, -50%);
        text-align: center;
        }
    hr {
        margin: auto;
        width: 40%;
        }
</style>
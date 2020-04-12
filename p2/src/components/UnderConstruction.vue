<template>
    <div id="uc">
        <div>
            <webnav-design></webnav-design>
        </div>
        <div id="clock" class="bgimg">
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
        <div class="footer">
            <p> &nbsp;&nbsp; North America Call Centers -- All Rights Reserved &nbsp;&nbsp;</p>
        </div>
    </div>
</template>
import WebnavDesign from './WebnavDesign.vue';

<script>
export default {
    name: "",
    components: {
        "webnav-design": WebnavDesign
    },
    props: {
        clock: "",
        },
    data: function() {
        return{
            clock: "",
            message: "We are still working on great design...",
            home: "Home",
            page1: "Contact Center Main Page",
            page2: "Personalization",
            page3: "Settings",
        };
    }
    
};
</script>

<style scoped>
    body, html {
        height: 100%;
        margin: 0;
        background-color: oldlace;
        }
    p {
        color: fuchsia;
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
        }
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
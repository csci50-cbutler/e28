<template>
    <div id="geoStats">
        <div class="w3-panel">
            <div class="w3-row-padding" style="margin:0 -16px">
                <div class="w3-third">
                    <h4>North America Contact Density </h4>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=north%20america&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                            <a href="https://www.embedgooglemap.org">google. maps directions</a>
                        </div>
                    </div>
                </div>

                <div class="w3-twothird" style="margin-left: 50px; width: 900px; border-color: grey; overflow-x:auto;">
                    <h4> North American Call Volumes</h4>
                    <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-flat-pumpkin ">
                        <tr>
                            <td>New York City</td>
                            <td>35%</td>
                        </tr>
                        <tr>
                            <td>Denver</td>
                            <td>25.7%</td>
                        </tr>
                        <tr>
                            <td>Vancouver</td>
                            <td>15.7%</td>
                        </tr>
                        <tr>
                            <td>Montreal</td>
                            <td>14.6%</td>
                        </tr>
                        <tr>
                            <td>Boston</td>
                            <td>12.1%</td>
                        </tr>
                        <tr>
                            <td>New Orleans</td>
                            <td>9.9%</td>
                        </tr>
                        <tr>
                            <td>Dallas</td>
                            <td>7.5%</td>
                        </tr>
                        <tr>
                            <td>Phoenix</td>
                                <td>7.9%</td>
                            </tr>
                            <tr>
                                <td>Albuquerque</td>
                                <td>2.5%</td>
                            </tr>
                        </table><br>
                        <button class="w3-button w3-gray" @click='update()'>More Locations &nbsp;<i class="fa fa-arrow-right"></i></button><br>
                    </div>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
 /* Maps and  w3-panel grid  styling */
    .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 5px;
        font-weight: bold;
        padding: 10px;
        border: 4px solid white;
    }
    .grid-container div {
        background-color: white;
        text-align: center;
        padding: 20px 0;
        font-size: 18px;
        color: teal;
    }
    .mapouter {
        position:relative;
        text-align:right;
        height:500px;
        width:500px;
    }
    .gmap_canvas  {
        overflow:hidden;
        background:none!important;
        height:500px;
        width:500px;
    }
    button .geo {
        border: 5px inset  oldlace;
        color:  oldlace;
        font-weight: bold;
        height: 45px;
        width:  90%;
    }
</style>
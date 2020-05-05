<template>
    <div>
        <div id="callGraphs" class="w3-row-padding w3-flat-colors">
            <table style="overflow-x:auto; border: 2px solid flat-pumpkin; width:100%">
                <tr>
                    <td>
                        <div class="control-section">
                            <ejs-circulargauge :title='title' style='display:block; width: 470px; height: 350px; border: 3px  solid navy;' align='center' id='gauge'>
                                <e-axes>
                                    <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle'>
                                        <e-pointers>
                                            <e-pointer :value='value' :radius='pointerRadius'  :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail'></e-pointer>
                                        </e-pointers>
                                    </e-axis>
                                </e-axes>
                            </ejs-circulargauge>
                        </div>
                    </td>
                    
                    <td>
                         <div id="avgCallTime" style="width: 470px; height: 350px; border: 3px  solid navy;">
                             <pie-chart :donut="true"  title="Incomplete Calls" :data="[['System Disconnect', 44], ['Caller Terminated', 183], ['Transfer Drop', 208], ['Long Wait', 209], ['2+ Transfers', 328]]"></pie-chart>
                            </div>
                    </td>

                    <td> 
                        <div id="chart" style="width: 490px;">
                            <bubble-chart style="height: 350px; border: 3px solid navy"></bubble-chart>
                        </div>
                    </td>
                 </tr>
             </table>
        </div> <!-- End table of graphs -->
        <br><br><br>
    </div>
</template>
<script>
    import Vue from 'vue';
    import BubbleChart from '@/components/BubbleChart';
    import Chartkick from 'vue-chartkick';

    import Chart from 'chart.js';
    Vue.use(Chartkick.use(Chart));

    import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";
    Vue.use(CircularGaugePlugin);

    export default {
        data:function(){
            return{  

            // Chart  series data start 
                title: "% Calls Completed",
                titleStyle: {size: '16px', color: '#4B0082'},
                gaugeRadius: '80%',
                startAngle: 230,
                endAngle: 130,
                majorTicks: {width: 1},
                lineStyle: { width: 12 },
                minorTicks: { width: 0},
                labelStyle: {
                font: {fontFamily: 'Roboto', size: '12px', fontWeight: 'Regular', color: 'navy'},
                    offset: -5
                },
                value: 70,
                pointerRadius: '70%',
                pointerWidth: 7,
                cap: {radius: 8, border: { width: 0 }},
                needleTail: {length: '25%'} , 
                // Chart Description End
            }
     },
     components: {
            'bubble-chart': BubbleChart,
     }
}
</script>
<style scoped>

</style>
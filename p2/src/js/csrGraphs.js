window.onload = function() {

    // Incomplete Calls
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light1", //"light1", "light2", "dark2"
        title: {
            text: "Incompleted Calls",
            fontFamily: "Impact",
            fontWeight: "bold"
        },

        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        data: [{
            //startAngle: 45,
            indexLabelFontSize: 16,
            indexLabelFontFamily: "Garamond",
            indexLabelFontColor: "maroon",
            indexLabelLineColor: "darkgrey",
            indexLabelPlacement: "outside",
            type: "doughnut",
            showInLegend: true,
            dataPoints: [
                { y: 53.37, legendText: "On Hold > 5 minute 45%", indexLabel: "Hold > 5m 45%" },
                { y: 35.0, legendText: "System Dropped 25%", indexLabel: "System 35%" },
                { y: 7, legendText: "Disconnect w/Agent 7%", indexLabel: "Disconnected 7%" },
                { y: 2, legendText: "Transfer Drop 2%", indexLabel: "Transfer 2%" },
                { y: 5, legendText: "Unknown 5%", indexLabel: "Unknown 5%" }
            ]
        }]
    });

    chart.render();

    // Current Calls Status
    var chart = new CanvasJS.Chart("funnelChart", {
        animationEnabled: true,
        theme: "light2", //"light1", "light2", "dark2"
        title: {
            text: "Call Monitor",
            fontFamily: "Impact",
            fontWeight: "bold"
        },
        data: [{
            type: "funnel",
            indexLabelPlacement: "inside",
            indexLabelFontColor: "ivory",
            toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
            indexLabel: "{label} ({percentage}%)",
            dataPoints: [
                { y: 1000, label: "Active Calls" },
                { y: 212, label: "On Hold" },
                { y: 180, label: "2+ Transfers" },
                { y: 465, label: "Specialist Request" },
                { y: 178, label: "Priority Queue" },
                { y: 200, label: "Unresolved" }
            ]
        }]
    });
    calculatePercentage();
    chart.render();

    function calculatePercentage() {
        var dataPoint = chart.options.data[0].dataPoints;
        var total = dataPoint[0].y;
        for (var i = 0; i < dataPoint.length; i++) {
            if (i == 0) {
                chart.options.data[0].dataPoints[i].percentage = 100;
            } else {
                chart.options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
            }
        }
    }


    // Average Call Times Today
    var chart = new CanvasJS.Chart("avgCallTime", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: "Average Call Times 7-day Glance"
        },
        axisY: {
            title: "Call Times in Minutes (2-hr Intervals)",
            interval: "mm",
        },
        data: [{
            type: "boxAndWhisker",
            upperBoxColor: "#FFC28D",
            lowerBoxColor: "#9ECCB8",
            color: "maroon",
            yValueFormatString: "00:00",
            toolTipContent: " {label}: Shift Start: {y[0]} , Shift End: {y[4]}",
            dataPoints: [
                { label: "Monday", y: [300, 320, 820, 650, 700] },
                { label: "Tuesday", y: [831, 180, 582, 289, 381] },
                { label: "Wednesday", y: [191, 143, 505, 450, 580] },
                { label: "Thursday", y: [634, 353, 120, 216, 757] },
                { label: "Friday", y: [275, 361, 118, 919, 714] },
                { label: "Saturday", y: [134, 353, 820, 216, 357] },
                { label: "Sunday", y: [295, 161, 118, 419, 714] }
            ]
        }]
    });
    chart.render();

}
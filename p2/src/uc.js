let app = new Vue({
    // Options
    el: '#uc',
    data: {
        clock: null,
        message: "We are still working on great design...",
        home: "Home",
        page1: "Contact Center Main Page",
        page2: "Personalization",
        page3: "Settings",
    },

    components: {
        "nav-header": WebnavDesign,
        "count-down": CountDown,
    },

    computed: {},
});
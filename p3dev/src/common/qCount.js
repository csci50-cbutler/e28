export default class queues {

    // Create random number for queues for dashboard  page

    count() {
        return Math.floor(Math.random() * 100) + 15;
    }

    constructor() {
        // Set up queue counts using random numbers
        localStorage.setItem('billReqQ', this.billReqQ.count());
        let billReqCount = localStorage.getItem('billReqQ');
        return billReqCount;
    }
}
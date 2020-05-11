import Vue from 'vue'
import Vuex from 'vuex'

//import * as app from '@/common/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        chatReqCount: 0,
        automatedReqCount: 0,
        agentReqCount: 0,
        tferReqCount: 0,
        billReqCount: 0,
        twitterReqCount: 0,
        prodReqCount: 0,
        priorityReqCount: 0,

    },

    // Mutations & Actions section

    mutations: {
        updateChatReqCount(state, chatReqPayload) {
            state.chatReqCount = chatReqPayload;
        },
        updateAutomatedReqCount(state, autoReqPayload) {
            state.automatedReqCount = autoReqPayload;
        },
        updateAgentReqCount(state, agentReqPayload) {
            state.agentReqCount = agentReqPayload;
        },
        updateTferReqCount(state, tferReqPayload) {
            state.tferReqCount = tferReqPayload;
        },
        updateBillReqCount(state, billReqPayload) {
            state.billReqCount = billReqPayload;
        },
        updateTwitterReqCount(state, twitterReqPayload) {
            state.twitterReqCount = twitterReqPayload;
        },
        updateProdReqCount(state, prodReqPayload) {
            state.prodReqCount = prodReqPayload;
        },
        updatePriorityReqCount(state, priorityReqPayload) {
            state.priorityReqCount = priorityReqPayload;
        }
    }


})
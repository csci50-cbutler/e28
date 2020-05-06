import Api from '@/common/api.js';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

export const config = {
    firebase: {
        apiKey: 'AIzaSyDL8rdGe_OGvNDX3uebReo8cUhTO30EsD4',
        projectId: 'e28-zipfoods-ceb005'
    }
}

/* export const config = {
    firebase: {
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID
    }
} */

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});
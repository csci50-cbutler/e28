import Api from '@/common/api.js';

export { default as Cart }
from '@/common/Cart.js';

export const config = {
    firebase: {
        apiKey: 'AIzaSyDL8rdGe_OGvNDX3uebReo8cUhTO30EsD4',
        projectId: 'e28-zipfoods-ceb005'
    }
}

/* eslint-disable */
console.log(process.env.VUE_APP_FIREBASE_PROJECT_ID);
/* eslint-enable */

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});

// Simple state management pattern
// No longer using this now that we've switched to Vuex
// export let store = {
//     cartCount: 0
// }
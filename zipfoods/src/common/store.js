import Vue from 'vue'
import Vuex from 'vuex'

import * as app from '@/common/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    // State - Single source of truth; object where all data is stored.
    state: {
        cartCount: 0,
        products: [],
    },
    // Mutations - Methods used to update data in the store.
    mutations: {
        setCartCount(state, payload) {
            state.cartCount = payload;
        },
        updateCartCount(state, payload) {
            state.cartCount += payload;
        },
        updateProducts(state, payload) {
            state.products = payload;
        }
    },
    // Actions - Methods used to asynchronously change the store, committing the changes via mutations.
    actions: {
        setProducts(context) {
            app.api.all('products').then(response => {
                context.commit('updateProducts', response);
            });
        }
    },
    // Getters - Methods used to retrieve and perform some operation on data in the store.
    getters: {
        getProductBySlug(state) {
            return function(slug) {
                for (let key of Object.keys(state.products)) {
                    if (state.products[key].slug == slug) {
                        return state.products[key];
                    }
                }
            }
        }
    }
})
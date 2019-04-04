import Vue from 'vue'
import Router from 'vue-router'

import Cheat from './views/cheat.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Cheat',
            component: Cheat
        },

    ]
})
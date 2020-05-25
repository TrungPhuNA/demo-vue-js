import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from "./router/index"


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import store from './stores/index';

Vue.config.productionTip = false;

// Use vuex
// Vue.use(Vuex);
Vue.use(VueSweetalert2);


// Install BootstrapVue
Vue.use(BootstrapVue)

// Register paginate

// use vue route
Vue.use(VueRouter)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

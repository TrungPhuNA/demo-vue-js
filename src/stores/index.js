import Vuex from 'vuex';
import Vue from "vue"
import Users from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
    modules :  {
        Users
    }
})
import axios from "axios";
import API from './../../api/index';

export default {
    state: {
        users: [],
    },
    mutations: {
        setUsers(state, data) {
            state.users = data;
        }
    },
    getters: {
        listUsers: state => state.users
    },
    actions: {
        async loadUsers({commit}, payload) {
            let params = {
                name : payload.name,
                email : payload.email
            }

            let response = await axios.get(API.api + 'users/', {
                params
            });
            commit('setUsers', response.data.data)
        },

        async deleteUserById({ commit }, id) {
            let response = await axios.delete(API.api +'users/' + id);
            this.dispatch('loadUsers', {
                name : null,
                email : null
            })
        }
    }
}
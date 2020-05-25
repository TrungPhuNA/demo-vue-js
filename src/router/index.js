import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Dashboard from "./../pages/Dashboard";
import User from "./../pages/users/index";
import UserEdit from "./../pages/users/edit";
import UsersCreate from "./../pages/users/add";

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component : Dashboard
        },
        {
            path: '/user',
            name: 'Users',
            component : User
        },
        {
            path: '/user/create',
            name: 'UsersCreate',
            component : UsersCreate
        },
        {
            path: '/user/edit/:id',
            name: 'UsersEdit',
            component : UserEdit
        }
    ]
})
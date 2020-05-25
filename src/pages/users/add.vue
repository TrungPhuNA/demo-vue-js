<template>
    <b-row>
        <b-col cols="8" offset="2">
            <div>
                <h2>Thêm mới thành viên  <router-link class="btn btn-xs btn-outline-primary"  :to="{ name: 'Users'}">Trở về</router-link></h2>
            </div>
            <div>
                <ul>
                    <li v-for="(error, key) in errors" :key="key">{{ error[0] }}</li>
                </ul>
                <b-form @submit="onSubmit">
                    <b-form-group
                            id="input-group-1"
                            label="Email:"
                            label-for="input-1"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="demo@gmail.com"
                        ></b-form-input>
<!--                        <p v-if="errors.email" :errors="errors">-->
<!--                            {{ errors.email }}-->
<!--                        </p>-->

                    </b-form-group>

                    <b-form-group id="input-group-2" label="Họ tên:" label-for="input-2">
                        <b-form-input
                                id="input-2"
                                v-model="form.name"
                                required
                                placeholder="Nguyen van A"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-3" label="Số điện thoại:" label-for="input-3">
                        <b-form-input
                                id="input-3"
                                v-model="form.phone"
                                required
                                placeholder="0986420994"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-4" label="Mật khẩu:" label-for="input-4">
                        <b-form-input
                                id="input-4"
                                type="password"
                                v-model="form.password"
                                required
                                placeholder="******"
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Thêm mới</b-button>
                </b-form>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    import axios from "axios";
    import {URL_API} from "../../../vue.config";
    import Vue from 'vue'

    export default {
        data() {
            return {
                errors: [],
                success : true,
                form: {
                    email: '',
                    name: '',
                },
                url : URL_API + 'users/'
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                axios.post(this.url, this.form)
                    .then(() => {
                        this.success = true;
                        this.$router.push({ name : 'Users'});
                        Vue.notify({
                            group: 'foo',
                            type : 'success',
                            position : 'bottom right',
                            title: 'Thông báo',
                            text: 'Thêm mới thành công!'
                        })
                    }).catch(error => {
                        this.success = false;
                        this.errors =  error.response.data.errors;

                    })
            }
        },
    }
</script>
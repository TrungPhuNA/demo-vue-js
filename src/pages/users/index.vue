<template>
    <b-row>
        <b-col cols="8" offset="2">
            <div>
                <h2>Danh sách thành viên
                    <router-link class="btn btn-xs btn-outline-primary"  :to="{ name: 'UsersCreate' }"> Thêm mới</router-link>
                </h2>

                <h2>Tìm kiếm</h2>
                <b-row>
                    <b-form  style="margin-bottom: 10px" inline @submit.prevent="searchUsers">
                        <b-col >
                            <b-form-group
                                    id="input-group-1"
                                    label="Email "
                                    label-for="input-1"
                            >
                                <b-form-input
                                        style="margin-left: 10px;"
                                        id="input-1"
                                        type="text"
                                        name="email"
                                        v-model="defaultParams.email"
                                        placeholder="Enter email"
                                ></b-form-input>
                                <b-form-input
                                        style="margin-left: 10px;"
                                        id="input-2"
                                        type="text"
                                        v-bind:value="defaultParams.name"
                                        name="name"
                                        placeholder="Name"
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-button type="submit" variant="primary" style="margin-right: 10px">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </b-row>

                <div class="table-responsive">
                    <table class="table table-hover table-centered table-nowrap">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col" style="width: 10px;">ID</th>
                            <th scope="col" style="width: 20%;">Name</th>
                            <th scope="col" style="width: 20%;">Email</th>
                            <th scope="col" style="width: 20%;">Phone</th>
                            <th scope="col" style="width: 10%;">Status</th>
                            <th scope="col" style="width: 20%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            <Lazyload v-if="listUsers.length == 0" />
                            <tr v-for="user in listUsers" :key="user.id">
                                <td>{{user.id}}</td>
                                <td>{{user.name}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.phone}}</td>
                                <td v-html="getTextStatus(user.status)"></td>
                                <td style="font-size: 16px">
                                    <b-link href="#"  class="btn btn-xs btn-danger" style="margin-right: 10px;" @click="deleteUser(user)">Delete</b-link>
                                    <router-link class="btn btn-xs btn-outline-primary"  :to="{ name: 'UsersEdit', params: { id: user.id }}">Edit</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <pagination v-bind:pagination="pagination" :offset="4"></pagination>
                </div>
            </div>
        </b-col>
    </b-row>
</template>
<script>
    import Pagination from "../../components/Pagination";
    import Lazyload from "../../components/Lazyload";
    import { mapActions, mapGetters } from 'vuex'

    export default {
        components : {
            Pagination,
            Lazyload
        },
        data() {
            return {
                users : [],
                page : 1,
                defaultParams : {
                    email : '',
                    name : ''
                },
                perPage: 9,
                pagination: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                url : process.env.ROOT_API + 'users/'
            }
        },

        methods: {
            ...mapActions(["loadUsers","deleteUserById"]),
            getTextStatus(status)
            {
                switch (status) {
                    case -1:
                        return `<span class="text-danger">Block</span>`
                    case 1:
                        return `<span class="text-default">Default</span>`
                    case 2:
                        return `<span class="text-primary">Process very account</span>`
                    case 3:
                        return `<span class="text-success">Success</span>`
                }
                return  'Active'
            },
            deleteUser(user)
            {
                this.$swal({
                    title: "Bạn có chắn chắn xoá dữ liệu không??",
                    text: "Dữ liệu ko thể khôi phục",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Ok! Tôi chấp nhận"
                }).then((result) => { // <--
                    if (result.value) { // <-- if confirmed
                        this.$store.dispatch('deleteUserById', user.id);
                    }
                });
            },

            searchUsers()
            {
                this.loadUsers(this.defaultParams);
                this.$router.push({
                    name: this.$route.name, query: this.defaultParams
                });
            }
        },

        computed: mapGetters(["listUsers"]),

        created() {
            this.loadUsers(this.defaultParams)
        }
    }
</script>
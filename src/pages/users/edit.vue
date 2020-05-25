<template>
    <b-row>
        <b-col cols="8" offset="2">
            <div>
                <h2>Cập nhật thành viên  <router-link class="btn btn-xs btn-outline-primary"  :to="{ name: 'Users'}">Trở về</router-link></h2>
            </div>
            <div>
                <b-form @submit="onSubmit" enctype="multipart/form-data" method="POST">
                    <b-form-group
                            id="input-group-1"
                            label="Email address:"
                            label-for="input-1"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Enter email"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-file
                            @change="onFileChange"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                    ></b-form-file>
                    <div class="mt-3">Selected file: {{ file }}</div>

                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                        <b-form-input
                                id="input-2"
                                v-model="form.name"
                                required
                                placeholder="Enter name"
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Cập nhật</b-button>
                </b-form>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                user : {},
                form : {
                    name : '',
                    email : '',
                    file :''
                },
                file : '',
                url : 'http://127.0.0.1:8000/api/users/'
            }
        },
        methods: {
            onFileChange(e) {
                this.file = e.target.files[0];
            },
            onSubmit(evt) {
                evt.preventDefault()
                // form data
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                let formData = new FormData();
                formData.append('file', this.file);
                formData.append('name', this.form.name);
                formData.append('email', this.form.email);

                console.log(formData);

                axios.put(this.url+this.$route.params.id, formData, config)
                    .then((response) => {
                        console.log(response);
                    }).catch(errors => {
                        console.log("========== Error ========== ")
                        console.log(errors);
                    })
            },

            getUserByID(id) {
                axios.get(this.url+id)
                    .then((response) => {
                        this.user = response.data
                        this.form = response.data
                    }).catch(errors => {
                        console.log("========== Error ========== ")
                        console.log(errors);
                    })
            }
        },

        async created() {
            let id = this.$route.params.id;
            await this.getUserByID(id);
        },
    }
</script>
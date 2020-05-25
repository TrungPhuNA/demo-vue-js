<template>
    <b-row>
        <b-navbar  type="dark" variant="info">
            <router-link to="/" class="navbar-brand">Trang chủ</router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <li class="nav-item">
                        <router-link to="/user" class="nav-link">Thành viên</router-link>
                    </li>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Từ khoá ..."></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Tìm kiếm</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-row>
</template>
<script>
    export default {

    }
</script>
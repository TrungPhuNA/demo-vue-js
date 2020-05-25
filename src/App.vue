<template>
    <div id="app">
        <b-container class="bv-example-row" fluid>
            <Header />
            <router-view style="margin-top: 50px;"></router-view>
        </b-container>
<!--        <notifications group="foo" position="bottom right"/>-->
    </div>
</template>

<script>
    import Header from "./components/Header"
    export default {
        components : {
            Header
        }
    }
</script>

<style>
    .navbar-expand {
        width: 100%;
    }
</style>

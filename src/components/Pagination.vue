<template>
    <nav>
        <ul class="pagination b-pagination">
            <li v-if="pagination.current_page > 1">
                <a href="#" class="btn btn-xs btn-outline-primary" aria-label="Previous" v-on:click.prevent="changePage(pagination.current_page - 1)">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" v-for="page in pagesNumber" :class="{'active': page == pagination.current_page}" :key="page">
                <a href="#" class="btn btn-xs btn-outline-primary" v-on:click.prevent="changePage(page)">{{ page }}</a>
            </li>
            <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                <a href="#" class="btn btn-xs btn-outline-primary" aria-label="Next" v-on:click.prevent="changePage(pagination.current_page + 1)">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>
    export default{
        props: {
            pagination: {
                type: Object,
                required: true
            },
            offset: {
                type: Number,
                default: 4
            }
        },
        computed: {
            pagesNumber: function () {
                if (!this.pagination.to) {
                    return [];
                }
                var from = this.pagination.current_page - this.offset;
                if (from < 1) {
                    from = 1;
                }
                var to = from + (this.offset * 2);
                if (to >= this.pagination.last_page) {
                    to = this.pagination.last_page;
                }
                var pagesArray = [];
                for (from = 1; from <= to; from++) {
                    pagesArray.push(from);
                }
                return pagesArray;
            }
        },
        methods : {
            changePage: function (page) {
                this.pagination.current_page = page;
            }
        }
    }
</script>
<style lang="css" scoped>
    .b-pagination li {
        margin-right: 5px;
    }
    .b-pagination .active {
        background: #007bff;
        color: white;
        border-radius: 0.25rem;
    }
    .b-pagination .active a{
        color: white;
    }
    .b-pagination .active a:focus, .b-pagination .active a:active {
        outline: none;
    }
</style>
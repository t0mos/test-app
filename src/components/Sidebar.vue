<template>
    <Wrapper>
        <p class="sidebar__header">{{ products.length }} items</p>
        <div class="sidebar__search">
            <label for="search">Search</label>
            <input
                id="search"
                type="text"
                placeholder="Type here to search"
                v-model="search"
            />
        </div>
        <div
            class="sidebar__items"
            v-if="products.length && products.length > 0"
        >
            <Card
                v-for="item in products"
                :key="item.id"
                :id="item.id"
                :title="item.title"
                :price="item.price"
                :description="item.description"
                :brand="item.brand"
                :category="item.category"
            />
        </div>
        <p v-else class="no-items">No products found</p>
    </Wrapper>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "./Card.vue";
import Wrapper from "./Wrapper.vue";

export default {
    components: {
        Card,
        Wrapper,
    },
    data() {
        return {
            search: "",
        };
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData() {
            this.$store.dispatch("getAllItems");
        },
    },
    computed: {
        ...mapGetters(["products"]),
        products() {
            return this.$store.getters.products.filter((item) => {
                return item.title
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
            });
        },
    },
};
</script>

<style scoped>
#search:focus {
    background: #3c7efd30;
    outline: none;
}
.sidebar__header {
    background-color: #8080802b;
    margin: 0;
    padding: 10px;
}
.sidebar__search {
    margin: 0px 0px 10px 0px;
}
.sidebar__search label {
    display: none;
}
.sidebar__search input {
    width: -webkit-fill-available;
    padding: 10px;
    font-size: 16px;
    border-left: none;
    border-right: none;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
.sidebar__items {
    margin: 10px;
    height: 70vh;
    overflow: scroll;
}
.no-items {
    margin: 0;
    padding: 10px;
    text-align: center;
}
@media only screen and (max-width: 768px) {
    .sidebar__items {
        display: flex;
        justify-content: space-between;
        height: 250px;
    }
}
</style>

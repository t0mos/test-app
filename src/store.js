import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            products: [],
            product: "",
        };
    },
    mutations: {
        getAllItems(state, payload) {
            state.products = payload;
        },
        getSingleItem(state, payload) {
            state.product = payload;
        },
    },
    actions: {
        async getAllItems(context) {
            const res = await fetch("https://dummyjson.com/products");
            const json = await res.json();
            this.products = json.products;
            context.commit("getAllItems", this.products);
        },
        async getSingleItem(context, payload) {
            const res = await fetch(
                "https://dummyjson.com/products/" + payload
            );
            const data = await res.json();
            this.product = data;
            context.commit("getSingleItem", this.product);
        },
    },
    getters: {
        products(state) {
            return state.products;
        },
        product(state) {
            return state.product;
        },
    },
});

export default store;

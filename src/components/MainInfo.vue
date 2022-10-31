<template>
    <Wrapper class="main">
        <div class="detail__header">
            <p>Details:</p>
            <div>
                <button type="button" class="btn btn-primary">
                    Add to Basket
                </button>
                <button type="button" class="btn btn-secondary">
                    Secondary Button
                </button>
            </div>
        </div>
        <div class="detail">
            <h1 class="detail__title">{{ product.title }}</h1>
            <p class="detail__brand">
                <span>{{ product.brand }}</span>
            </p>
            <p class="detail__description">
                <span>{{ product.description }}</span>
            </p>
            <p class="detail__price">
                Price: <span>${{ product.price }}</span>
            </p>
            <p class="detail__discount">
                Discount: <span>{{ product.discountPercentage }}</span>
            </p>
            <div class="detail__category">
                <span class="pill">{{ product.brand }}</span>
                <span class="pill">{{ product.category }}</span>
                <span class="pill">rating: {{ product.rating }}</span>
                <span class="pill">stock: {{ product.stock }}</span>
            </div>
            <div class="detail__image">
                <img
                    v-for="(image, index) in product.images"
                    :key="index"
                    :src="image"
                    alt="Product image"
                />
            </div>
        </div>
    </Wrapper>
</template>

<script>
import Wrapper from "./Wrapper.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        Wrapper,
    },
    data() {
        return {
            id: this.$route.params.itemId,
        };
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData() {
            this.$store.dispatch("getSingleItem", this.id);
        },
    },
    watch: {
        $route(to) {
            this.id = to.params.itemId;
            this.loadData();
        },
    },
    computed: {
        ...mapGetters(["product"]),
    },
};
</script>

<style scoped>
.detail__header {
    background-color: #8080802b;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
}
.detail__header p {
    margin: 0;
}
.detail {
    padding: 10px;
}
.btn {
    color: white;
    border: none;
    padding: 3px 15px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
}
.btn:hover {
    opacity: 0.8;
}
.btn:active {
    opacity: 1;
}
.btn-primary {
    background-color: #00a200;
    margin-right: 5px;
}
.btn-secondary {
    background-color: #eb973b;
}
.detail__title {
    margin: 0px;
}
.detail__brand {
    margin: 0px 0px 20px 0px;
    color: grey;
}
.detail__category {
    margin: 20px 0px;
}
.detail__description {
    font-size: 20px;
}
.detail__price,
.detail__discount {
    margin: 0;
    font-weight: bold;
}
.detail__price span {
    color: #ea983b;
}
.detail__discount span {
    color: #00a200;
}
.detail__image {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 20px;
}
img {
    width: 150px;
    height: fit-content;
    margin: 5px;
}
@media only screen and (max-width: 375px) {
    .detail__header div {
        display: flex;
    }
}
</style>

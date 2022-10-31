<template>
    <router-link :to="'/' + id" class="card">
        <div class="card__header">
            <span class="card__header-title">{{ title }}</span>
            <span class="card__header-price">${{ price }}</span>
        </div>
        <p class="card__body">
            {{ description }}
        </p>
        <div class="card__footer">
            <span class="pill">{{ brand }}</span>
            <span class="pill">{{ category }}</span>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ["id", "title", "price", "description", "brand", "category"],
};
</script>

<style scoped>
.card {
    background-color: #eaeaea82;
    border: 1px solid #a2a2a2;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: block;
    cursor: pointer;
    text-decoration: none;
    color: black;
}
.card:hover,
.card.active {
    border: 1px solid #004eff;
}
.card.active {
    background-color: #004eff17;
}

.card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card__header-title {
    font-size: 20px;
    font-weight: bold;
}
.card__header-price {
    font-size: 14px;
    font-style: italic;
}
@media only screen and (max-width: 768px) {
    .card {
        flex: 0 0 12em;
        margin-bottom: 0px;
        margin-right: 10px;
    }
    .card__header {
        flex-direction: column-reverse;
        align-items: flex-start;
    }
    .card__body {
        display: none;
    }
}
</style>

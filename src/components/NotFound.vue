<template>
    <Wrapper class="main">
        <div class="detail__header">
            <p>Something went wrong...</p>
        </div>
        <h1>Item not found</h1>
    </Wrapper>
</template>

<script>
import Wrapper from "./Wrapper.vue";

export default {
    components: {
        Wrapper,
    },
};
</script>

<style scoped>
.detail__header {
    background-color: #8080802b;
    padding: 10px;
    border-bottom: 1px solid black;
}
.detail__header p {
    margin: 0px;
}
h1 {
    text-align: center;
}
</style>

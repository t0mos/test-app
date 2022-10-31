<template>
    <section class="wrapper">
        <slot></slot>
    </section>
</template>

<script></script>

<style scoped>
.wrapper {
    border: 1px solid;
    border-radius: 5px;
    margin-right: 10px;
    width: 450px;
}
@media only screen and (max-width: 768px) {
    .wrapper {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>

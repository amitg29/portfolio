<template>
    <header class="header">
        <h1> {{ developerName }}</h1>
    </header>
</template>

<script>
export default {
    data() {
        return {
            developerName: 'Amit Gupta'
        }
    }
}
</script>

<style scoped>
.header>h1 {
    margin-top: 20px;
    width: fit-content;
    font-size: 2rem;
    background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
</style>
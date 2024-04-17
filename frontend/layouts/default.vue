<template>
    <div class="layout">
        <Header />
        <Navigation />
        <div class="container">
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>

<script>
import Header from './header.vue'
import Navigation from '@/layouts/navigation.vue'
export default {
    components: {
        Header,
        Navigation
    }

}
</script>

<style scoped>
/* .layout{
        display: flex;

    } */

.container {
    margin: 20px;
}
</style>
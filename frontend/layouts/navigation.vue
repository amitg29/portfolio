<template>
    <nav class="nav">
        <ul>
            <li v-for="item in navList" :key="item.to" style="list-style: none;">
                <!-- <NuxtLink :to="item.to">{{ item.title }}</NuxtLink> -->
                <button class="nav-item" @click="redirect(item.to)">{{ item.title }}</button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    to: '/',
                    title: 'Home',
                    components: '/index.vue'
                },
                {
                    to: '/about',
                    title: 'About',
                    components: '/about.vue'
                },
                {
                    to: '/works',
                    title: 'Works',
                    components: '/works'
                },
                {
                    to: '/contact',
                    title: 'Contact',
                    // components: '/works'
                },
                {
                    to: '/projects',
                    title: 'Project',
                    components: '/projects.vue'
                }
            ],
        }
    },
    methods: {
        redirect(link) {
            this.$router.push(link)
        }
    }
}
</script>

<style scoped>
.nav {
    position: fixed;
    right: 20px;
    margin: 10px;
    z-index: 2;
}

.nav-item {
    /* display: inline-block; */
    min-width: 80px;
    padding: 10px;
    margin: 10px;
    background-color: #ffb400;
    border: 1px solid black;
    border-radius: 8px;
    position: auto;
    cursor: pointer;
}

/* .nav>ul>li :hover {
    background-color: aqua;
} */
</style>
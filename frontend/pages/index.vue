<template>
    <div class="grid-container">
        <section class="profile">
            <img class="profile__img" src="/img/profile.jpg" alt="amit-gupta-profile-image">
        </section>
        <section class="profile__data">
            <section id="profile__data--header">
                I'm AMIT GUPTA
                <br>
                <span class="dynamic-tech-stacks">
                    Full Stack Developer
                </span>
            </section>
            <section id="profile__data--desc">
                Experienced Full-Stack Developer adept in Vue.js, React.js, Nuxt.js, Next.js, Node.js, and Python with
                3+ years
                of hands-on experience. Proven track record in crafting robust web applications from concept to
                deployment, leveraging agile methodologies. Passionate about innovation and staying updated with the
                latest technologies.
            </section>
            <div style="margin-top: 30px;">
                <button class="about-me-button" @click="redirectAboutPage">More about me
                    <span style="font-size: 20px; border: 1px;">&#8594;</span>
                </button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        redirectAboutPage() {
            this.$router.push('/about')
        }
    }

}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 25vw 55vw 20vw;
    margin-top: 50px;
}

.profile {
    margin: 10px;
}

.profile__img {
    width: 175px;
    height: 225px;
}


#profile__data--header {
    font-size: 50px;
    font-display: swap;
    font-family: 'Times New Roman', Times, serif;
}

.dynamic-tech-stacks {
    background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

#profile__data--desc {
    margin-top: 20px
}

section+div :hover {
    background: #ffb400;
    background: linear-gradient(to-right, #e5b138, #dbb14f);
}

.about-me-button {
    background: #111111;
    color: #ececec;
    padding: 12px;
    font-size: large;
    border-radius: 25px;
    border: 1px solid #dbb14f;
    cursor: pointer;
    font-weight: 600;
}
</style>
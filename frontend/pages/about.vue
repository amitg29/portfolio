<template>
    <div>
        <pageTitle background-title="RESUME" frontground-title="ABOUT" frontground-colored-title="ME" />

        <PersonalInfo />

        <Skills />

        <Experience />
    </div>
</template>

<script>
import pageTitle from '~/components/designedPageTitle.vue'
import PersonalInfo from '~/components/abouts/personalInfo.vue'
import Skills from '~/components/abouts/skills.vue'
import Experience from '~/components/abouts/experienceEducation.vue'

export default {
    components: {
        pageTitle,
        PersonalInfo,
        Skills,
        Experience
    }

}
</script>

<style scoped>
/* div>div {
    margin-top: 10px;
    padding: 40px;
} */
</style>
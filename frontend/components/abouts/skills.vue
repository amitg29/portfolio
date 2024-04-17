<template>
    <div id="skills">
        <hr>
        <div style="font-size: 30px; font-weight: 600; text-align: center;">
            MY SKILLS
        </div>
        <div class="tech-stack">
            <div class="tech-stack__division">
                <b>Languages :</b>
                <div>
                    JavaScript
                </div>
                <div>
                    Python
                </div>
                <div>
                    TypeScript
                </div>
            </div>
            <div class="tech-stack__division">
                <b>Frontend : </b>
                <div>
                    JavaScript
                </div>
                <div>
                    React.Js
                </div>
                <div>
                    Vue.Js
                </div>
                <div>
                    Next.Js
                </div>
                <div>
                    Nuxt.Js
                </div>
            </div>

            <div class="tech-stack__division">
                <b>Backend : </b>
                <div>
                    Node.Js
                </div>
                <div>
                    Python
                </div>
                <div>
                    TypeScript
                </div>
            </div>

            <div class="tech-stack__division">
                <b>Database : </b>
                <div>
                    Mysql
                </div>
                <div>
                    MongoDb
                </div>
                <div>
                    Mongoose
                </div>
            </div>

            <div class="tech-stack__division">
                <b>Tools & Other : </b>
                <div>
                    VS Code
                </div>
                <div>
                    Git (GitHub, GitLab)
                </div>
                <div>
                    Figma
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tech-stack {
    display: grid;
    grid-template-rows: repeat(4, 50px);
    grid-template-columns: auto;
    /* Dynamic columns */
    margin-left: 40px;
}

.tech-stack__division>div {
    /* grid-column-start: 1;     */
    display: inline-block;
    padding: 10px;
    margin: 5px;
}
</style>
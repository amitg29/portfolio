<template>
    <div>
        <hr>
        <div class="title">
            EXPERIENCE & EDUCATION
        </div>
        <div class="experience-container">
            <!-- <div class="experience-row"> -->
            <div v-for="item in experienceItem" :key="item.role" card>
                <div class="card-action" style="display: inline-block; width: 40vw; white-space: nowrap;">
                    <div style="margin-bottom: 10px;">
                        <icon style="display: inline;"> {{ item.icon }}</icon>
                        <div style="display: inline;"> {{ item.startDate }} - {{ item.endDate }} </div>
                    </div>
                    <div style="display: inline-block; vertical-align: middle;">
                        <!-- Inline SVG and start of content -->
                        <svg width="2" height="100" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" y1="0" x2="1" y2="120" stroke="#ffb400" stroke-width="2" />
                        </svg>
                    </div>
                    <div style="display: inline-block; vertical-align: top; margin-left: 20px;"> <!-- Content -->
                        <!-- <icon style="display: inline;"> txt</icon>
                            <div style="display: inline; margin-top: 5px;"> Dec 22 - current </div> -->
                        <div style="font-size: x-large;">
                            <b>{{ item.role }}</b> - {{ item.company }}
                        </div>
                        <p style="display: inline-block; margin-top: 5px; white-space: normal;">
                            {{ item.desc }}
                        </p>
                    </div>
                </div>

            </div>
            <!-- </div> -->

            <div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            experienceItem: [
                {
                    icon: 'amdocs.ico',
                    startDate: 'Dec 2022',
                    endDate: 'Current',
                    company: 'Amdocs',
                    role: 'Software Engineer',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptas voluptate vero perspiciatis impedit dolor debitis corporis eius sint quasi at aperiam. Sint, nostrum nemo modi repellendus minima dignissimos exercitationem?'
                },
                {
                    icon: 'amdocs.ico',
                    startDate: 'April 2020',
                    endDate: 'Nov 2022',
                    company: 'Amdocs',
                    role: 'Associate Software Engineer',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptas voluptate vero perspiciatis impedit dolor debitis corporis eius sint quasi at aperiam. Sint, nostrum nemo modi repellendus minima dignissimos exercitationem?'
                },
                {
                    icon: 'amdocs.ico',
                    startDate: 'July 2016',
                    endDate: 'May 2020',
                    company: 'Techno India Salt Lake',
                    role: 'B.Tech (CSE)',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptas voluptate vero perspiciatis impedit dolor debitis corporis eius sint quasi at aperiam. Sint, nostrum nemo modi repellendus minima dignissimos exercitationem?'
                },
                // {
                //     icon: 'amdocs.ico',
                //     startDate: 'Dec 2022',
                //     endDate: 'Current',
                //     company: 'Amdocs',
                //     role: 'Software Engineer',
                //     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptas voluptate vero perspiciatis impedit dolor debitis corporis eius sint quasi at aperiam. Sint, nostrum nemo modi repellendus minima dignissimos exercitationem?'
                // }
            ]
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
}

.experience-container {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 40vw 40vw;
    /* margin-left: 10px; */
    justify-content: center;
    gap: 25px;
}
</style>
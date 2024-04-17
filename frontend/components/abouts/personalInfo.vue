<template>
    <section class="personal-info">
        <div>
            <div style="font-size: 30px; font-weight: bold;">
                Personal Info:
            </div>
            <br><br>
            <div class="personal-flex">
                <section>
                    <div class="text-title">
                        First Name :
                        <span class="text-value">
                            Amit
                        </span>
                    </div>
                    <div class="text-title">
                        Last Name :
                        <span class="text-value">
                            Gupta
                        </span>
                    </div>
                    <div class="text-title">
                        Age :
                        <span class="text-value">
                            26
                        </span>
                    </div>
                    <div class="text-title">
                        Nationality :
                        <span class="text-value">
                            Indian
                        </span>
                    </div>
                </section>
                <section>
                    <div class="text-title">
                        Address :
                        <span class="text-value">
                            <address style="display: inline;">Gurgaon, Haryana</address>
                        </span>
                    </div>
                    <div class="text-title">
                        Phone :
                        <span class="text-value">
                            +91 7003961589
                        </span><br>
                    </div>
                    <div class="text-title">
                        Email :
                        <span class="text-value">
                            amitg1371@gmail.com
                        </span>
                    </div>
                </section>
            </div>
        </div>
        <div>
            <section style="border: 1px #202020 solid; min-width: 180px; padding: 8px; display: inline-block;">
                <div style="color: #ffb400; font-size: 30px; font-weight: bold;">
                    3 +
                </div><br>
                <!-- <span style="display: inline-block;">-</span> -->
                <span>
                    - Years of <br>Experience
                </span>
            </section>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.personal-info {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 50% 50%;
    margin: 30px 20px;
    justify-content: start;
}

.text-title {
    color: #ececec;
    opacity: .7;
    margin-top: 20px;
}

.text-value {
    font-weight: bold;
    color: white;
}

.personal-flex {
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    align-content: center;
}
</style>
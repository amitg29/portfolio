<template>
    <div>
        <pageTitle background-title="CONTACT" frontground-title="GET IN" frontground-colored-title="TOUCH" />

        <div class="contact-container">
            <div class="details">
                <div>
                    <h1> DON'T BE SHY!</h1>
                    Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
                    opportunities to be part of your visions.
                </div>
                <div>
                    <div style="display: inline-block; vertical-align: middle;">
                        <!-- <i class="fab fa-facebook fa-lg" style="min-width: 30px;"></i> -->
                        <i class="position-absolute fas fa-envelope-open fa-lg"
                            style="color:#ffb400; font-size: 33px;"></i>
                    </div>
                    <div style="display: inline-block; margin:10px; vertical-align: middle;">
                        <span style="padding: 10px; font-weight: 100; font-size: large;">Mail Me</span>
                        <br>
                        <span style="padding: 10px;">amitg1371@gmail.com</span>
                    </div>
                </div>

                <div>
                    <div style="display: inline-block; vertical-align: middle;">
                        <!-- <i class="fab fa-facebook fa-lg" style="min-width: 30px;"></i> -->
                        <i class="position-absolute fas fa-phone-square fa-lg"
                            style="color:#ffb400; font-size: 33px;"></i>
                    </div>
                    <div style="display: inline-block; margin:10px; vertical-align: middle;">
                        <span style="padding: 10px; font-weight: 100; font-size: large;">Call Me</span>
                        <br>
                        <span style="padding: 10px;">+91 700 396 1589</span>
                    </div>
                </div>
            </div>
            <div class="email-form">
                <div>
                    <form>
                        <div style="display: flex;">
                            <input class="form-input" type="text" placeholder="Your Name" value="" name="name" required>
                            <input class="form-input" type="email" placeholder="Your Email" value="" name="email"
                                @input="validateEmail" required>
                            <input class="form-input" type="text" placeholder="Your Subject" value="" name="subject"
                                required>
                            <!-- <input class="form-input" type="text" placeholder="Your Name" value="" name="name"> -->
                        </div>
                        <div>
                            <input class="form-input textarea-input" type="textarea" placeholder="Comment" value=""
                                name="comment" required>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pageTitle from '~/components/designedPageTitle.vue'
export default {
    components: {
        pageTitle
    },
    methods: {
        validateEmail(email) {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        }
    }
}
</script>

<style scoped>
.contact-container {
    margin: 50px 11%;
    display: flex;
}

.details {
    flex: 0 0 35%
}

.email-form {
    flex: 0 0 65%
}

.form-input {
    margin: 10px;
    border-radius: 25px;
    min-height: 40px;
    background-color: #252525;
    color: aliceblue;
    padding-left: 20px;
    border: 0px solid;
    min-width: 31%;
}

.textarea-input {
    width: auto;
    min-height: 150px;
    min-width: 100%;
}

.submit-btn {
    margin: auto;
    margin-left: 20px;
    min-width: 100px;
    padding: 8px;
    border-radius: 8px;
}

.submit-btn:hover {
    /* border: 1px solid #202020; */
    background: #ffb400;
    cursor: pointer;
}
</style>
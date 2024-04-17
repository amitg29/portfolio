<template>
    <div class="title-container">
        <div style="font-size: 110px; text-align: center; text-transform: capitalize; opacity: 0.2; font-weight: 600;">
            {{ backgroundTitle }}
        </div>
        <div style="font-size: 50px; text-align: center; margin-top: -90px; font-weight: bold;">
            {{ frontgroundTitle }}
            <span style="color: #ffb400">{{ frontgroundColoredTitle }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        backgroundTitle: {
            type: String,
            default: 'RESUME'
        },
        frontgroundTitle: {
            type: String,
            default: 'ABOUT'
        },
        frontgroundColoredTitle: {
            type: String,
            default: 'ME'
        }
    }
}
</script>

<style></style>
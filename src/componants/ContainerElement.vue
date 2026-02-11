<template>
    <div class="box">
        <span class="section-title Playfair Display"> {{ title }} </span>
        <div class="icon-container"><i :class="icon"></i></div>
    </div>
</template>
<script setup>
const props = defineProps({
    icon: String,
    title: String
})
</script>
<style scoped>
.box {
    width: 25%;
    border: 3px solid #F5F5F5;
    border-radius: 10px;
    margin: 10px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20% 80%;
}

.icon-container {
    font-size: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10vh;
    margin-right: 5px;
    margin-left: 5px;
}

.section-title {
    margin-right: 5px;
    margin-left: 5px;
    font-size: 4vh;
}
</style>

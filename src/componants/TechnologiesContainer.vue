<template>
    <div class="techno-wrapper">
        <div class="icon-container"><i :class="icon"></i></div>
        <span>{{ title }}</span>       
    </div>
</template>
<script setup>
const props = defineProps({
    icon: String,
    title: String
})
</script>
<style>
.techno-wrapper {
    display: flex;
    border: 2px solid #F5F5F5;
    border-radius: 3px;
    margin: 3px;
    padding: 3px;
    cursor: pointer;
}

.techno-wrapper:hover {
    transform: translate(-2px, -2px);
    box-shadow: 3px 3px 0 white;
}

.icon-container {
    margin-right: 2px;
}
</style>
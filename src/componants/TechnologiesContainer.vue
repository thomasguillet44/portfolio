<template>
    <div class="icon-container"><i :class="icon"></i></div> 
</template>
<script setup>
const props = defineProps({
    icon: String,
    title: String
})
</script>
<style>
.icon-container {
    margin: 2px;
    font-size: 5vh;
    cursor: pointer;
}

.icon-container:hover {
    transform: translateY(-2px);
}
</style>